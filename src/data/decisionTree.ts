import {
  DollarSign,
  TrendingUp,
  MapPin,
  Moon,
  Ticket,
  Calendar,
  Flame,
  Building2,
  ArrowDownNarrowWide,
  ArrowUpNarrowWide,
} from "lucide-react";
import type { EventData } from "./events";
import type { DecisionChipId } from "../components/DecisionChips";

export type FollowUpChipId = string;

export interface FollowUpChip {
  id: FollowUpChipId;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  filter?: (event: EventData) => boolean;
  sortBoost?: (event: EventData) => number;
  description: string;
}

// Shared follow-up filters reused across branches
const underOneFifty: FollowUpChip = {
  id: "under-150",
  label: "Under $150",
  icon: DollarSign,
  filter: (e) => e.price < 150,
  description: "Filtered to under $150.",
};

const nearChicago: FollowUpChip = {
  id: "near-chicago",
  label: "Near Chicago",
  icon: MapPin,
  filter: (e) => e.city === "Chicago",
  description: "Filtered to Chicago shows.",
};

// Decision tree: maps each level-0 chip to its follow-up options
export const decisionTree: Record<string, FollowUpChip[]> = {
  "best-deal": [
    underOneFifty,
    {
      id: "under-120",
      label: "Under $120",
      icon: DollarSign,
      filter: (e) => e.price < 120,
      description: "Filtered to under $120.",
    },
    {
      id: "high-demand",
      label: "High demand",
      icon: TrendingUp,
      filter: (e) => e.demand >= 85,
      description: "Filtered to high-demand shows.",
    },
    {
      id: "weeknight-deals",
      label: "Weeknight deals",
      icon: Moon,
      filter: (e) => e.isWeeknight,
      description: "Filtered to weeknight shows.",
    },
    {
      id: "good-availability",
      label: "Good availability",
      icon: Ticket,
      filter: (e) => e.availability >= 60,
      description: "Filtered to shows with good availability.",
    },
    nearChicago,
  ],
  "biggest-crowd": [
    {
      id: "weekend-shows",
      label: "Weekend shows",
      icon: Calendar,
      filter: (e) => e.isWeekend,
      description: "Filtered to weekend shows.",
    },
    {
      id: "almost-sold-out",
      label: "Almost sold out",
      icon: Flame,
      filter: (e) => e.availability < 40,
      description: "Filtered to nearly sold-out shows.",
    },
    {
      id: "major-city",
      label: "Major city",
      icon: Building2,
      filter: (e) =>
        e.city === "New York" ||
        e.city === "Los Angeles" ||
        e.city === "Chicago",
      description: "Filtered to major cities (NY, LA, Chicago).",
    },
  ],
  "selling-fast": [
    underOneFifty,
    {
      id: "this-weekend",
      label: "This weekend",
      icon: Calendar,
      filter: (e) => e.isWeekend,
      description: "Filtered to weekend shows.",
    },
    {
      id: "under-50-left",
      label: "Under 50 left",
      icon: Flame,
      filter: (e) => e.availability < 35,
      description: "Filtered to shows with under 50 tickets left.",
    },
  ],
  "best-weekend": [
    {
      id: "under-150",
      label: "Under $150",
      icon: DollarSign,
      filter: (e) => e.price < 150 && e.isWeekend,
      description: "Filtered to weekend shows under $150.",
    },
    {
      id: "biggest-crowd-boost",
      label: "Biggest crowd",
      icon: TrendingUp,
      filter: (e) => e.isWeekend,
      sortBoost: (e) => e.demand,
      description: "Weekend shows boosted by crowd demand.",
    },
    {
      id: "near-chicago",
      label: "Near Chicago",
      icon: MapPin,
      filter: (e) => e.city === "Chicago" && e.isWeekend,
      description: "Filtered to Chicago weekend shows.",
    },
  ],
};

export const chipRecommendedCounts: Record<DecisionChipId, number> = {
  "best-deal":      4, // room for one more solid value pick
  "biggest-crowd":  2, // only the most hyped — specificity = impact
  "selling-fast":   2, // urgency works better with fewer
  "best-weekend":   7, // broadest category, max flexibility
  "safest-bet":     6, // more options = more confidence in reliability message
  "almost-gone":    2, // scarcity — few results feels authentic
};

export function getRecommendedCount(chipId: DecisionChipId): number {
  return chipRecommendedCounts[chipId] ?? 3;
}

export const followUpRecommendedCounts: Record<string, number> = {
  "under-150":           4,
  "under-120":           2,
  "high-demand":         3,
  "weeknight-deals":     4,
  "good-availability":   5,
  "near-chicago":        3,
  "weekend-shows":       4,
  "almost-sold-out":     2,
  "major-city":          4,
  "this-weekend":        4,
  "under-50-left":       2,
  "biggest-crowd-boost": 6,
};

export function getFollowUpRecommendedCount(followUpId: string): number {
  return followUpRecommendedCounts[followUpId] ?? 3;
}

// Keyword → chip mapping for "Something else..." free-text input
const keywordChipMap: { keywords: string[]; chipId: DecisionChipId }[] = [
  {
    keywords: ["value", "worth", "bang for buck", "deal", "cheap", "affordable", "budget", "low price", "inexpensive"],
    chipId: "best-deal",
  },
  {
    keywords: [
      "crowd",
      "energy",
      "atmosphere",
      "vibe",
      "hype",
      "popular",
      "big",
    ],
    chipId: "biggest-crowd",
  },
  {
    keywords: ["fast", "selling", "hurry", "quick", "soon", "running out"],
    chipId: "selling-fast",
  },
  {
    keywords: ["weekend", "saturday", "sunday", "friday"],
    chipId: "best-weekend",
  },
];

export function matchTextToChip(text: string): DecisionChipId {
  const lower = text.toLowerCase();
  for (const entry of keywordChipMap) {
    for (const kw of entry.keywords) {
      if (lower.includes(kw)) return entry.chipId;
    }
  }
  return "best-deal"; // default fallback
}

// Canned streaming responses keyed by matched chip
export const streamingResponses: Record<DecisionChipId, string> = {
  "best-deal":
    "Great question! I looked at pricing trends and demand signals across all 28 shows. Let me rank these by overall value for you.",
  "biggest-crowd":
    "Looking for the electric atmosphere? I'll rank by demand and popularity so you can find the most hyped shows.",
  "selling-fast":
    "Good thinking to act fast! I'll sort by sales velocity so you know which tickets to grab before they're gone.",
  "best-weekend":
    "Weekend plans coming up! Let me pull out the Friday through Sunday shows and rank them for you.",
  "safest-bet":
    "Looking for plenty of options? I'll sort by availability so you have the widest seat selection to choose from.",
  "almost-gone":
    "These are the ones disappearing fast! Let me sort by lowest availability so you can see what's nearly sold out.",
};
