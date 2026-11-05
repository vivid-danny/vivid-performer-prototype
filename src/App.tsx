import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles } from "lucide-react";
import { Navbar } from "./components/Navbar";
import { PerformerFilters } from "./components/PerformerFilters";
import {
  DecisionChips,
  DecisionChipId,
} from "./components/DecisionChips";
import { ProductionCard } from "./components/ProductionCard";
import {
  VersionSwitcher,
  type LayoutVersion,
} from "./components/VersionSwitcher";
import { LayoutV1 } from "./components/layouts/LayoutV1";
import { LayoutV2 } from "./components/layouts/LayoutV2";
import { LayoutV3 } from "./components/layouts/LayoutV3";
import {
  eventsData,
  rankAndFilterEvents,
  getCompoundRecommendationReason,
} from "./data/events";
import {
  decisionTree,
  matchTextToChip,
  streamingResponses,
  getRecommendedCount,
  getFollowUpRecommendedCount,
  type FollowUpChipId,
} from "./data/decisionTree";
import { seoMetadata } from "./data/seoMetadata";
// seoMetadata powers future AI interactions — not rendered directly
void seoMetadata;

// Layout shells, keyed by switcher version. Each takes the shared
// content column as children, so the AI layer behaves identically
// across all of them.
const layouts = {
  1: LayoutV1,
  2: LayoutV2,
  3: LayoutV3,
} as const;

export default function App() {
  // Which performer-page layout to render:
  // 1 = gradient hero + sidebar, 2 = white header,
  // 3 = short gradient header + 1024px column
  const [layoutVersion, setLayoutVersion] =
    useState<LayoutVersion>(1);
  const Layout = layouts[layoutVersion];

  const [decisionPath, setDecisionPath] = useState<{
    level0: DecisionChipId | null;
    level1: FollowUpChipId | null;
  }>({ level0: null, level1: null });
  const [displayedPath, setDisplayedPath] = useState<{
    level0: DecisionChipId | null;
    level1: FollowUpChipId | null;
  }>({ level0: null, level1: null });
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [streamingText, setStreamingText] = useState<string | null>(
    null,
  );
  const [isStreaming, setIsStreaming] = useState(false);
  const streamingTimerRef = useRef<number | null>(null);

  // Cleanup streaming timer on unmount
  const clearStreamingTimer = useCallback(() => {
    if (streamingTimerRef.current !== null) {
      clearTimeout(streamingTimerRef.current);
      streamingTimerRef.current = null;
    }
  }, []);

  // Toggle panel — closing resets all selection/streaming state
  const handleTogglePanel = useCallback(() => {
    if (isPanelOpen) {
      clearStreamingTimer();
      setDecisionPath({ level0: null, level1: null });
      setDisplayedPath({ level0: null, level1: null });
      setIsLoading(false);
      setStreamingText(null);
      setIsStreaming(false);
    }
    setIsPanelOpen((prev) => !prev);
  }, [isPanelOpen, clearStreamingTimer]);

  // Level 0 select handler
  const handleLevel0Select = useCallback(
    (chipId: DecisionChipId | null) => {
      clearStreamingTimer();
      setStreamingText(null);
      setIsStreaming(false);

      if (chipId === null || chipId === decisionPath.level0) {
        // Deselecting
        setDecisionPath({ level0: null, level1: null });
        setDisplayedPath({ level0: null, level1: null });
        setIsLoading(false);
      } else {
        // Selecting new chip
        setDecisionPath({ level0: chipId, level1: null });
        setIsLoading(true);
        setTimeout(() => {
          setDisplayedPath({ level0: chipId, level1: null });
          setIsLoading(false);
        }, 600);
      }
    },
    [decisionPath.level0, clearStreamingTimer],
  );

  // Level 1 follow-up select handler
  const handleLevel1Select = useCallback(
    (followUpId: FollowUpChipId | null) => {
      if (followUpId === null || followUpId === decisionPath.level1) {
        // Deselecting follow-up
        setDecisionPath((prev) => ({ ...prev, level1: null }));
        setDisplayedPath((prev) => ({ ...prev, level1: null }));
        setIsLoading(false);
      } else {
        setDecisionPath((prev) => ({
          ...prev,
          level1: followUpId,
        }));
        setIsLoading(true);
        setTimeout(() => {
          setDisplayedPath((prev) => ({
            ...prev,
            level1: followUpId,
          }));
          setIsLoading(false);
        }, 400);
      }
    },
    [decisionPath.level1],
  );

  // Back to level 0 handler
  const handleBackToLevel0 = useCallback(() => {
    setDecisionPath((prev) => ({ ...prev, level1: null }));
    setDisplayedPath((prev) => ({ ...prev, level1: null }));
    // Clear level0 as well to return to chip selection
    setDecisionPath({ level0: null, level1: null });
    setDisplayedPath({ level0: null, level1: null });
    setIsLoading(false);
  }, []);

  // Something else streaming handler
  const handleSomethingElseSubmit = useCallback(
    (text: string) => {
      clearStreamingTimer();
      const matchedChip = matchTextToChip(text);
      const response =
        streamingResponses[matchedChip] ??
        streamingResponses["best-deal"];

      // Start streaming
      setStreamingText("");
      setIsStreaming(true);
      setDecisionPath({ level0: matchedChip, level1: null });

      let charIndex = 0;
      const streamNextChar = () => {
        if (charIndex < response.length) {
          setStreamingText(response.slice(0, charIndex + 1));
          charIndex++;
          streamingTimerRef.current = window.setTimeout(
            streamNextChar,
            25,
          );
        } else {
          // Streaming complete — show results after brief pause
          setIsStreaming(false);
          streamingTimerRef.current = window.setTimeout(() => {
            setStreamingText(null);
            setDisplayedPath({ level0: matchedChip, level1: null });
            setIsLoading(false);
          }, 800);
        }
      };
      streamNextChar();
    },
    [clearStreamingTimer],
  );

  // Derive recommended count: follow-up can only narrow, not expand
  const level0Count = displayedPath.level0
    ? getRecommendedCount(displayedPath.level0)
    : 3;
  const level1Count = displayedPath.level1
    ? getFollowUpRecommendedCount(displayedPath.level1)
    : level0Count;
  const recommendedCount = Math.min(level0Count, level1Count);

  // Resolve the active follow-up chip object
  const activeFollowUp =
    displayedPath.level0 && displayedPath.level1
      ? (decisionTree[displayedPath.level0] ?? []).find(
          (f) => f.id === displayedPath.level1,
        ) ?? null
      : null;

  // Split events into near shows (first 2) and all shows (rest)
  const nearEvents = eventsData.slice(0, 2);
  const allEvents = eventsData.slice(2);

  // Rank events based on displayed path
  const rankedNearEvents = rankAndFilterEvents(
    nearEvents,
    displayedPath.level0,
    activeFollowUp,
  );
  const rankedAllEvents = rankAndFilterEvents(
    allEvents,
    displayedPath.level0,
    activeFollowUp,
  );

  // For unified view when chip is selected
  const allEventsUnified = eventsData.slice(0);
  const rankedAllEventsUnified = rankAndFilterEvents(
    allEventsUnified,
    displayedPath.level0,
    activeFollowUp,
  );

  // Get description for selected chip
  const getChipDescription = (
    chipId: DecisionChipId | null,
  ): string => {
    if (!chipId) return "";

    const base = (() => {
      switch (chipId) {
        case "best-deal":
          return "Great seats at competitive prices with high demand - the sweet spot between affordability and popularity.";
        case "biggest-crowd":
          return "Shows with the highest anticipated demand and energy - perfect for the ultimate concert atmosphere.";
        case "selling-fast":
          return "Tickets moving quickly - these shows have the highest sales velocity, so act fast to secure your spot.";
        case "best-weekend":
          return "Perfect for your weekend plans - Friday, Saturday, and Sunday shows ranked by popularity.";
        case "safest-bet":
          return "Shows with the most availability - plenty of seat options to choose from.";
        case "almost-gone":
          return "Shows with the lowest availability - these are selling out fast, so secure your tickets now.";
        default:
          return "";
      }
    })();

    if (activeFollowUp) {
      return `${base} ${activeFollowUp.description}`;
    }
    return base;
  };

  const contentColumn = (
    <>
      <PerformerFilters isPanelOpen={isPanelOpen} onToggle={handleTogglePanel} />

                      {/* Panel + events row — panel only pushes the event list */}
                      <div className="flex items-start w-full">
                        <AnimatePresence initial={false}>
                          {isPanelOpen && (
                            <motion.div
                              key="decision-panel"
                              initial={{ width: 0 }}
                              animate={{ width: 340 }}
                              exit={{ width: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className="overflow-hidden shrink-0"
                            >
                              <motion.div
                                initial={{ x: -340 }}
                                animate={{ x: 0 }}
                                exit={{ x: -340 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="w-[340px] pr-[32px]"
                              >
                                <DecisionChips
                                  decisionPath={decisionPath}
                                  onLevel0Select={handleLevel0Select}
                                  onLevel1Select={handleLevel1Select}
                                  onBackToLevel0={handleBackToLevel0}
                                  onSomethingElseSubmit={handleSomethingElseSubmit}
                                  isLoading={isLoading}
                                  streamingText={streamingText}
                                  isStreaming={isStreaming}
                                />
                              </motion.div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        <div className="flex-1 min-w-0">
                      <AnimatePresence mode="wait">
                        {isLoading ? (
                          // Loading state
                          <motion.div
                            key="loading"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full py-[80px]"
                          >
                            <div className="flex flex-col gap-[16px] items-center justify-center w-full">
                              <div className="flex gap-[8px] items-center">
                                <motion.div
                                  animate={{ rotate: 360 }}
                                  transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                    ease: "linear",
                                  }}
                                  className="size-[24px]"
                                >
                                  <Sparkles className="size-full text-[#ce3197]" />
                                </motion.div>
                                <p className="font-medium leading-[24px] text-[#717488] text-[16px]">
                                  Finding the best matches for
                                  you...
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        ) : displayedPath.level0 ? (
                          // Unified view when chip is selected
                          <motion.div
                            key={`recommended-${displayedPath.level0}-${displayedPath.level1}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{
                              duration: 0.4,
                              ease: "easeOut",
                            }}
                            className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full"
                          >
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{
                                duration: 0.3,
                                delay: 0.1,
                              }}
                              className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
                            >
                              <p className="font-bold relative shrink-0 text-[#04092c] text-lg">
                                Look what we found for you!
                              </p>
                              <p className="font-normal leading-[21px] relative shrink-0 text-[#717488] text-base mb-4">
                                {getChipDescription(
                                  displayedPath.level0,
                                )}
                              </p>
                            </motion.div>

                            {rankedAllEventsUnified.length === 0 ? (
                              <div className="flex flex-col gap-[8px] items-center justify-center w-full py-[40px]">
                                <p className="font-medium leading-[24px] text-[#717488] text-[16px]">
                                  No matches for this filter. Try a different option.
                                </p>
                              </div>
                            ) : (
                            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                              {rankedAllEventsUnified.map(
                                (event, index) => (
                                  <motion.div
                                    key={event.id}
                                    initial={{
                                      opacity: 0,
                                      y: 20,
                                    }}
                                    animate={{
                                      opacity: 1,
                                      y: 0,
                                    }}
                                    transition={{
                                      duration: 0.3,
                                      delay:
                                        0.15 + index * 0.03,
                                      ease: "easeOut",
                                    }}
                                    className="w-full"
                                  >
                                    <ProductionCard
                                      event={event}
                                      isRecommended={index < recommendedCount}
                                      recommendationReason={
                                        index < recommendedCount
                                          ? getCompoundRecommendationReason(
                                              event,
                                              displayedPath.level0!,
                                              index,
                                              activeFollowUp,
                                              recommendedCount,
                                            )
                                          : null
                                      }
                                    />
                                  </motion.div>
                                ),
                              )}
                            </div>
                            )}
                          </motion.div>
                        ) : (
                          // Default view when no chip selected
                          <motion.div
                            key="default"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full"
                          >
                            {/* Near Shows Section */}
                            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                              <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
                                <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
                                  <p className="font-bold leading-[22.5px] relative shrink-0 text-[#04092c] text-[18px] text-nowrap">
                                    2 Shows Near
                                  </p>
                                  <div className="content-stretch flex items-center relative shrink-0">
                                    <p className="font-bold leading-[22.5px] relative shrink-0 text-[#ce3197] text-[18px] text-nowrap">
                                      Chicago, IL
                                    </p>
                                  </div>
                                </div>
                              </div>

                              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                                {rankedNearEvents.map(
                                  (event, index) => (
                                    <ProductionCard
                                      key={event.id}
                                      event={event}
                                      isRecommended={false}
                                      recommendationReason={
                                        null
                                      }
                                    />
                                  ),
                                )}
                              </div>
                            </div>

                            {/* All Tour Dates Section */}
                            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                              <div className="content-stretch flex gap-[8px] items-center not-italic relative shrink-0 text-[18px] text-nowrap w-full">
                                <p className="font-bold leading-[22.5px] relative shrink-0 text-[#04092c]">
                                  The Wizard of Oz at Sphere Tour Dates
                                </p>
                                <p className="font-normal leading-[22px] relative shrink-0 text-[#717488]">
                                  •
                                </p>
                                <p className="font-normal leading-[22px] relative shrink-0 text-[#717488]">
                                  32 Shows
                                </p>
                              </div>

                              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                                {rankedAllEvents.map(
                                  (event, index) => (
                                    <ProductionCard
                                      key={event.id}
                                      event={event}
                                      isRecommended={false}
                                      recommendationReason={
                                        null
                                      }
                                    />
                                  ),
                                )}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                        </div>
                      </div>
    </>
  );

  return (
    <div
      className="bg-white relative size-full"
      data-name="screen-xl"
    >
      <div className="content-stretch flex flex-col items-start relative size-full">
        <Navbar />

        <Layout>{contentColumn}</Layout>
      </div>

      <VersionSwitcher
        value={layoutVersion}
        onChange={setLayoutVersion}
      />
    </div>
  );
}
