import {
  Sparkles,
  TrendingUp,
  Calendar,
  Clock,
  Zap,
  DollarSign,
  MessageSquare,
  X,
  Send,
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { decisionTree, type FollowUpChipId } from "../data/decisionTree";

export type DecisionChipId =
  | "best-deal"
  | "biggest-crowd"
  | "selling-fast"
  | "best-weekend"
  | "safest-bet"
  | "almost-gone";

interface DecisionChip {
  id: DecisionChipId;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
}

const chips: DecisionChip[] = [
  {
    id: "best-deal",
    label: "Which show is the best deal?",
    icon: DollarSign,
    description: "Best combination of price and value",
  },
  {
    id: "biggest-crowd",
    label: "Which has the biggest energy?",
    icon: TrendingUp,
    description: "Most anticipated show with high demand",
  },
  {
    id: "selling-fast",
    label: "Which is selling fastest?",
    icon: Zap,
    description: "High ticket velocity - act quick",
  },
  {
    id: "best-weekend",
    label: "Best show for the weekend?",
    icon: Calendar,
    description: "Perfect for weekend plans",
  },
];

export { chips };

interface DecisionChipsProps {
  decisionPath: {
    level0: DecisionChipId | null;
    level1: FollowUpChipId | null;
  };
  onLevel0Select: (chipId: DecisionChipId | null) => void;
  onLevel1Select: (followUpId: FollowUpChipId | null) => void;
  onBackToLevel0: () => void;
  onSomethingElseSubmit: (text: string) => void;
  isLoading: boolean;
  streamingText: string | null;
  isStreaming: boolean;
}

export function DecisionChips({
  decisionPath,
  onLevel0Select,
  onLevel1Select,
  onBackToLevel0,
  onSomethingElseSubmit,
  isLoading,
  streamingText,
  isStreaming,
}: DecisionChipsProps) {
  const [showCustomInput, setShowCustomInput] = useState(false);
  const [customQuestion, setCustomQuestion] = useState("");

  const handleChipClick = (chipId: DecisionChipId) => {
    if (decisionPath.level0 === chipId) {
      onLevel0Select(null);
    } else {
      onLevel0Select(chipId);
    }
    setShowCustomInput(false);
  };

  const handleFollowUpClick = (followUpId: FollowUpChipId) => {
    if (decisionPath.level1 === followUpId) {
      onLevel1Select(null);
    } else {
      onLevel1Select(followUpId);
    }
  };

  const handleSomethingElseClick = () => {
    setShowCustomInput(!showCustomInput);
  };

  const handleSubmit = () => {
    const trimmed = customQuestion.trim();
    if (!trimmed) return;
    onSomethingElseSubmit(trimmed);
    setCustomQuestion("");
    setShowCustomInput(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  // Streaming view
  if (streamingText !== null) {
    return (
      <div className="w-full">
        <div className="flex flex-col gap-[12px]">
          <div className="flex flex-col items-start justify-between gap-[8px]">
            <div className="flex items-center gap-[8px]">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="size-[20px]"
              >
                <Sparkles className="size-full text-[#ce3197]" />
              </motion.div>
              <p className="font-bold leading-[25px] text-[#04092c] text-[20px]">
                Thinking...
              </p>
            </div>
          </div>
          <div className="bg-[#fef9fd] border-2 border-[#ce3197] rounded-[8px] px-[14px] py-[12px]">
            <p className="font-normal leading-[21px] text-[#04092c] text-[14px]">
              {streamingText}
              {isStreaming && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="text-[#ce3197]"
                >
                  |
                </motion.span>
              )}
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Determine view mode
  const isLevel1 = decisionPath.level0 !== null;
  const selectedLevel0Chip = chips.find(
    (c) => c.id === decisionPath.level0
  );
  const followUps = decisionPath.level0
    ? decisionTree[decisionPath.level0] ?? []
    : [];

  return (
    <div className="w-full">
      <div className="flex flex-col gap-[12px]">
        <div className="flex flex-col items-start justify-between gap-1">
          <p className="font-bold text-[#04092c] text-lg">
            Need help picking a show?
          </p>
          <p className="text-[#717488] text-base mb-4">
            Get recommendations for the best show for you.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {isLevel1 ? (
            // Level 1 view: back button + selected chip + follow-ups
            <motion.div
              key="level1"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col gap-[8px]"
            >
              {/* Selected level-0 chip with X dismiss button */}
              {selectedLevel0Chip && (
                <div className="flex items-center justify-between px-[14px] py-[12px] rounded-[8px] w-full bg-[#ce3197] border-2 border-[#ce3197]">
                  <div className="flex gap-[8px] items-center">
                    <selectedLevel0Chip.icon className="size-[18px] shrink-0 text-white" />
                    <p className="font-medium leading-[21px] text-[14px] text-white">
                      {selectedLevel0Chip.label}
                    </p>
                  </div>
                  <button
                    onClick={onBackToLevel0}
                    className="text-white/70 hover:text-white transition-colors cursor-pointer shrink-0"
                  >
                    <X className="size-[16px]" />
                  </button>
                </div>
              )}

              {/* "Narrow it down:" label */}
              <p className="font-medium leading-[18px] text-[#717488] text-[12px] mt-[4px]">
                Narrow it down:
              </p>

              {/* Follow-up chips */}
              {followUps.map((followUp, index) => {
                const Icon = followUp.icon;
                const isSelected = decisionPath.level1 === followUp.id;

                return (
                  <motion.div
                    key={followUp.id}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.2,
                      delay: 0.05 * index,
                    }}
                  >
                    <button
                      onClick={() => handleFollowUpClick(followUp.id)}
                      className="flex gap-[8px] items-center justify-start px-[12px] py-[10px] rounded-[8px] w-full text-left transition-all duration-200 cursor-pointer border-2"
                      style={{
                        backgroundColor: isSelected ? "#086e88" : "#ffffff",
                        borderColor: isSelected ? "#086e88" : "#d3d3dc",
                      }}
                    >
                      <Icon
                        className={`size-[16px] shrink-0 ${isSelected ? "text-white" : "text-[#717488]"}`}
                      />
                      <p
                        className="font-medium leading-[18px] text-[13px]"
                        style={{ color: isSelected ? "#ffffff" : "#04092c" }}
                      >
                        {followUp.label}
                      </p>
                    </button>
                  </motion.div>
                );
              })}
            </motion.div>
          ) : (
            // Level 0 view: chips + something else
            <motion.div
              key="level0"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col gap-[8px]"
            >
              {chips.map((chip) => {
                const Icon = chip.icon;
                const isSelected = decisionPath.level0 === chip.id;

                return (
                  <button
                    key={chip.id}
                    onClick={() => handleChipClick(chip.id)}
                    className={`
                      flex gap-[8px] items-center justify-start px-[14px] py-[12px] rounded-[8px] w-full text-left
                      transition-all duration-200 cursor-pointer
                      ${
                        isSelected
                          ? "bg-[#ce3197] border-2 border-[#ce3197]"
                          : "bg-white border-2 border-[#d3d3dc] hover:border-[#ce3197]"
                      }
                    `}
                  >
                    <Icon
                      className={`size-[18px] shrink-0 ${isSelected ? "text-white" : "text-[#717488]"}`}
                    />
                    <p
                      className={`
                      font-medium leading-[21px] text-[14px]
                      ${isSelected ? "text-white" : "text-[#04092c]"}
                    `}
                    >
                      {chip.label}
                    </p>
                  </button>
                );
              })}

              {/* Something Else Chip */}
              <button
                onClick={handleSomethingElseClick}
                className={`
                  flex gap-[8px] items-center justify-start px-[14px] py-[12px] rounded-[8px] w-full text-left
                  transition-all duration-200 cursor-pointer
                  ${
                    showCustomInput
                      ? "bg-[#ce3197] border-2 border-[#ce3197]"
                      : "bg-white border-2 border-[#d3d3dc] hover:border-[#ce3197]"
                  }
                `}
              >
                <MessageSquare
                  className={`size-[18px] shrink-0 ${showCustomInput ? "text-white" : "text-[#717488]"}`}
                />
                <p
                  className={`
                  font-medium leading-[21px] text-[14px]
                  ${showCustomInput ? "text-white" : "text-[#04092c]"}
                `}
                >
                  Something else...
                </p>
              </button>

              {/* Custom Input Text Box */}
              {showCustomInput && (
                <div className="w-full flex flex-col gap-[8px]">
                  <textarea
                    value={customQuestion}
                    onChange={(e) => setCustomQuestion(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask your own question..."
                    className="w-full px-[14px] py-[12px] rounded-[8px] border-2 border-[#d3d3dc]
                      font-normal text-[14px] leading-[21px] text-[#04092c]
                      resize-none focus:outline-none focus:border-[#ce3197] transition-colors duration-200"
                    rows={3}
                  />
                  <button
                    onClick={handleSubmit}
                    disabled={!customQuestion.trim()}
                    className={`
                      flex items-center justify-center gap-[6px] w-full py-[10px] rounded-[8px] transition-all duration-200 cursor-pointer
                      font-medium text-[14px] leading-[21px]
                      ${
                        customQuestion.trim()
                          ? "bg-[#ce3197] text-white hover:bg-[#b82a85]"
                          : "bg-[#efeff6] text-[#a0a2b3]"
                      }
                    `}
                  >
                    Submit
                  </button>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
