import { DecisionChipId } from '../components/DecisionChips';
import type { FollowUpChip } from './decisionTree';

export interface EventData {
  id: string;
  dayOfWeek: string;
  month: string;
  day: number;
  time: string;
  artist: string;
  venue: string;
  city: string;
  state: string;
  badges: {
    type: 'deals' | 'limited' | 'none';
    text?: string;
    emoji?: string;
  }[];
  // Ranking attributes
  price: number; // Average price (used for ranking)
  getInPrice: number; // Cheapest available ticket (displayed on CTA)
  availability: number; // Tickets remaining (0-100)
  demand: number; // Demand score (0-100)
  salesVelocity: number; // How fast tickets are selling (0-100)
  isWeekend: boolean;
  isWeeknight: boolean; // Mon-Thu
}

export const eventsData: EventData[] = [
  // Near Chicago section (2 shows)
  // #1 — Sat Nov 8 (weekend)
  {
    id: 'sat-nov-8',
    dayOfWeek: 'SAT',
    month: 'Nov',
    day: 8,
    time: '7:30PM',
    artist: 'The Wizard of Oz at Sphere',
    venue: 'United Center',
    city: 'Chicago',
    state: 'IL',
    badges: [
      { type: 'deals', text: 'Deals Available', emoji: '💰' },
      { type: 'limited', text: '99 Tickets Left', emoji: '🔥' },
    ],
    price: 150,
    getInPrice: 59,
    availability: 45,
    demand: 95,
    salesVelocity: 88,
    isWeekend: true,
    isWeeknight: false,
  },
  // #2 — Sun Nov 9 (weekend)
  {
    id: 'sun-nov-9',
    dayOfWeek: 'SUN',
    month: 'Nov',
    day: 9,
    time: '7:00PM',
    artist: 'The Wizard of Oz at Sphere',
    venue: 'United Center',
    city: 'Chicago',
    state: 'IL',
    badges: [
      { type: 'deals', text: 'Deals Available', emoji: '💰' },
    ],
    price: 135,
    getInPrice: 55,
    availability: 65,
    demand: 82,
    salesVelocity: 75,
    isWeekend: true,
    isWeeknight: false,
  },

  // All tour dates section
  // #3 — Sat Nov 8 (weekend, tour)
  {
    id: 'sat-nov-8-tour',
    dayOfWeek: 'SAT',
    month: 'Nov',
    day: 8,
    time: '7:30PM',
    artist: 'The Wizard of Oz at Sphere',
    venue: 'United Center',
    city: 'Chicago',
    state: 'IL',
    badges: [],
    price: 150,
    getInPrice: 79,
    availability: 45,
    demand: 95,
    salesVelocity: 88,
    isWeekend: true,
    isWeeknight: false,
  },
  // #4 — Sun Nov 9 (weekend, tour)
  {
    id: 'sun-nov-9-tour',
    dayOfWeek: 'SUN',
    month: 'Nov',
    day: 9,
    time: '7:00PM',
    artist: 'The Wizard of Oz at Sphere',
    venue: 'United Center',
    city: 'Chicago',
    state: 'IL',
    badges: [
      { type: 'limited', text: '99 Tickets Left', emoji: '🔥' },
    ],
    price: 140,
    getInPrice: 72,
    availability: 35,
    demand: 92,
    salesVelocity: 95,
    isWeekend: true,
    isWeeknight: false,
  },
  // #5 — Mon Nov 10 (weeknight)
  {
    id: 'mon-nov-10',
    dayOfWeek: 'MON',
    month: 'Nov',
    day: 10,
    time: '7:30PM',
    artist: 'The Wizard of Oz at Sphere',
    venue: 'United Center',
    city: 'Chicago',
    state: 'IL',
    badges: [
      { type: 'deals', text: 'Deals Available', emoji: '💰' },
    ],
    price: 115,
    getInPrice: 45,
    availability: 78,
    demand: 68,
    salesVelocity: 55,
    isWeekend: false,
    isWeeknight: true,
  },
  // #6 — Tue Nov 11 (weeknight)
  {
    id: 'tue-nov-11',
    dayOfWeek: 'TUE',
    month: 'Nov',
    day: 11,
    time: '7:30PM',
    artist: 'The Wizard of Oz at Sphere',
    venue: 'United Center',
    city: 'Chicago',
    state: 'IL',
    badges: [
      { type: 'deals', text: 'Deals Available', emoji: '💰' },
    ],
    price: 110,
    getInPrice: 42,
    availability: 85,
    demand: 62,
    salesVelocity: 48,
    isWeekend: false,
    isWeeknight: true,
  },
  // #7 — Wed Nov 12 (weeknight)
  {
    id: 'wed-nov-12',
    dayOfWeek: 'WED',
    month: 'Nov',
    day: 12,
    time: '7:00PM',
    artist: 'The Wizard of Oz at Sphere',
    venue: 'United Center',
    city: 'Chicago',
    state: 'IL',
    badges: [],
    price: 145,
    getInPrice: 69,
    availability: 52,
    demand: 75,
    salesVelocity: 70,
    isWeekend: false,
    isWeeknight: true,
  },
  // #8 — Thu Nov 13 (weeknight)
  {
    id: 'thu-nov-13',
    dayOfWeek: 'THU',
    month: 'Nov',
    day: 13,
    time: '7:00PM',
    artist: 'The Wizard of Oz at Sphere',
    venue: 'United Center',
    city: 'Chicago',
    state: 'IL',
    badges: [],
    price: 155,
    getInPrice: 75,
    availability: 60,
    demand: 80,
    salesVelocity: 65,
    isWeekend: false,
    isWeeknight: true,
  },
  // #9 — Fri Nov 21 (weekend)
  {
    id: 'fri-nov-21',
    dayOfWeek: 'FRI',
    month: 'Nov',
    day: 21,
    time: '8:00PM',
    artist: 'The Wizard of Oz at Sphere',
    venue: 'Madison Square Garden',
    city: 'New York',
    state: 'NY',
    badges: [
      { type: 'limited', text: '45 Tickets Left', emoji: '🔥' },
    ],
    price: 195,
    getInPrice: 115,
    availability: 22,
    demand: 98,
    salesVelocity: 92,
    isWeekend: true,
    isWeeknight: false,
  },
  // #10 — Sat Nov 22 (weekend)
  {
    id: 'sat-nov-22',
    dayOfWeek: 'SAT',
    month: 'Nov',
    day: 22,
    time: '8:00PM',
    artist: 'The Wizard of Oz at Sphere',
    venue: 'Madison Square Garden',
    city: 'New York',
    state: 'NY',
    badges: [
      { type: 'limited', text: '12 Tickets Left', emoji: '🔥' },
    ],
    price: 210,
    getInPrice: 139,
    availability: 8,
    demand: 99,
    salesVelocity: 98,
    isWeekend: true,
    isWeeknight: false,
  },
  // #11 — Mon Nov 24 (weeknight)
  {
    id: 'mon-nov-24',
    dayOfWeek: 'MON',
    month: 'Nov',
    day: 24,
    time: '7:00PM',
    artist: 'The Wizard of Oz at Sphere',
    venue: 'TD Garden',
    city: 'Boston',
    state: 'MA',
    badges: [
      { type: 'deals', text: 'Deals Available', emoji: '💰' },
    ],
    price: 105,
    getInPrice: 39,
    availability: 68,
    demand: 71,
    salesVelocity: 58,
    isWeekend: false,
    isWeeknight: true,
  },
  // #12 — Wed Nov 26 (weeknight)
  {
    id: 'wed-nov-26',
    dayOfWeek: 'WED',
    month: 'Nov',
    day: 26,
    time: '7:30PM',
    artist: 'The Wizard of Oz at Sphere',
    venue: 'Wells Fargo Center',
    city: 'Philadelphia',
    state: 'PA',
    badges: [],
    price: 112,
    getInPrice: 55,
    availability: 55,
    demand: 76,
    salesVelocity: 64,
    isWeekend: false,
    isWeeknight: true,
  },
  // #13 — Fri Nov 28 (weekend)
  {
    id: 'fri-nov-28',
    dayOfWeek: 'FRI',
    month: 'Nov',
    day: 28,
    time: '8:00PM',
    artist: 'The Wizard of Oz at Sphere',
    venue: 'Capital One Arena',
    city: 'Washington',
    state: 'DC',
    badges: [
      { type: 'deals', text: 'Deals Available', emoji: '💰' },
    ],
    price: 125,
    getInPrice: 49,
    availability: 61,
    demand: 96,
    salesVelocity: 72,
    isWeekend: true,
    isWeeknight: false,
  },
  // #14 — Sat Nov 29 (weekend)
  {
    id: 'sat-nov-29',
    dayOfWeek: 'SAT',
    month: 'Nov',
    day: 29,
    time: '7:30PM',
    artist: 'The Wizard of Oz at Sphere',
    venue: 'State Farm Arena',
    city: 'Atlanta',
    state: 'GA',
    badges: [
      { type: 'limited', text: '67 Tickets Left', emoji: '🔥' },
    ],
    price: 158,
    getInPrice: 89,
    availability: 38,
    demand: 97,
    salesVelocity: 85,
    isWeekend: true,
    isWeeknight: false,
  },
  // #15 — Tue Dec 2 (weeknight)
  {
    id: 'tue-dec-2',
    dayOfWeek: 'TUE',
    month: 'Dec',
    day: 2,
    time: '7:00PM',
    artist: 'The Wizard of Oz at Sphere',
    venue: 'Amalie Arena',
    city: 'Tampa',
    state: 'FL',
    badges: [
      { type: 'deals', text: 'Deals Available', emoji: '💰' },
    ],
    price: 108,
    getInPrice: 38,
    availability: 72,
    demand: 66,
    salesVelocity: 52,
    isWeekend: false,
    isWeeknight: true,
  },
  // #16 — Thu Dec 4 (weeknight)
  {
    id: 'thu-dec-4',
    dayOfWeek: 'THU',
    month: 'Dec',
    day: 4,
    time: '7:30PM',
    artist: 'The Wizard of Oz at Sphere',
    venue: 'Kaseya Center',
    city: 'Miami',
    state: 'FL',
    badges: [],
    price: 165,
    getInPrice: 85,
    availability: 48,
    demand: 72,
    salesVelocity: 99,
    isWeekend: false,
    isWeeknight: true,
  },
  // #17 — Sat Dec 6 (weekend)
  {
    id: 'sat-dec-6',
    dayOfWeek: 'SAT',
    month: 'Dec',
    day: 6,
    time: '8:00PM',
    artist: 'The Wizard of Oz at Sphere',
    venue: 'Smoothie King Center',
    city: 'New Orleans',
    state: 'LA',
    badges: [
      { type: 'limited', text: '34 Tickets Left', emoji: '🔥' },
    ],
    price: 172,
    getInPrice: 95,
    availability: 26,
    demand: 96,
    salesVelocity: 89,
    isWeekend: true,
    isWeeknight: false,
  },
  // #18 — Mon Dec 8 (weeknight)
  {
    id: 'mon-dec-8',
    dayOfWeek: 'MON',
    month: 'Dec',
    day: 8,
    time: '7:00PM',
    artist: 'The Wizard of Oz at Sphere',
    venue: 'Toyota Center',
    city: 'Houston',
    state: 'TX',
    badges: [
      { type: 'deals', text: 'Deals Available', emoji: '💰' },
    ],
    price: 102,
    getInPrice: 35,
    availability: 76,
    demand: 69,
    salesVelocity: 56,
    isWeekend: false,
    isWeeknight: true,
  },
  // #19 — Wed Dec 10 (weeknight)
  {
    id: 'wed-dec-10',
    dayOfWeek: 'WED',
    month: 'Dec',
    day: 10,
    time: '7:30PM',
    artist: 'The Wizard of Oz at Sphere',
    venue: 'American Airlines Center',
    city: 'Dallas',
    state: 'TX',
    badges: [],
    price: 148,
    getInPrice: 79,
    availability: 15,
    demand: 79,
    salesVelocity: 97,
    isWeekend: false,
    isWeeknight: true,
  },
  // #20 — Fri Dec 12 (weekend)
  {
    id: 'fri-dec-12',
    dayOfWeek: 'FRI',
    month: 'Dec',
    day: 12,
    time: '8:00PM',
    artist: 'The Wizard of Oz at Sphere',
    venue: 'Ball Arena',
    city: 'Denver',
    state: 'CO',
    badges: [
      { type: 'limited', text: '56 Tickets Left', emoji: '🔥' },
    ],
    price: 162,
    getInPrice: 89,
    availability: 42,
    demand: 86,
    salesVelocity: 80,
    isWeekend: true,
    isWeeknight: false,
  },
  // #21 — Sun Dec 14 (weekend)
  {
    id: 'sun-dec-14',
    dayOfWeek: 'SUN',
    month: 'Dec',
    day: 14,
    time: '6:00PM',
    artist: 'The Wizard of Oz at Sphere',
    venue: 'Footprint Center',
    city: 'Phoenix',
    state: 'AZ',
    badges: [
      { type: 'deals', text: 'Deals Available', emoji: '💰' },
    ],
    price: 120,
    getInPrice: 45,
    availability: 70,
    demand: 91,
    salesVelocity: 62,
    isWeekend: true,
    isWeeknight: false,
  },
  // #22 — Fri Dec 19 (weekend)
  {
    id: 'fri-dec-19',
    dayOfWeek: 'FRI',
    month: 'Dec',
    day: 19,
    time: '7:30PM',
    artist: 'The Wizard of Oz at Sphere',
    venue: 'Crypto.com Arena',
    city: 'Los Angeles',
    state: 'CA',
    badges: [
      { type: 'limited', text: '28 Tickets Left', emoji: '🔥' },
    ],
    price: 225,
    getInPrice: 145,
    availability: 18,
    demand: 97,
    salesVelocity: 94,
    isWeekend: true,
    isWeeknight: false,
  },
  // #23 — Sat Dec 20 (weekend)
  {
    id: 'sat-dec-20',
    dayOfWeek: 'SAT',
    month: 'Dec',
    day: 20,
    time: '7:30PM',
    artist: 'The Wizard of Oz at Sphere',
    venue: 'Crypto.com Arena',
    city: 'Los Angeles',
    state: 'CA',
    badges: [
      { type: 'limited', text: '15 Tickets Left', emoji: '🔥' },
    ],
    price: 230,
    getInPrice: 155,
    availability: 12,
    demand: 98,
    salesVelocity: 96,
    isWeekend: true,
    isWeeknight: false,
  },
  // #24 — Mon Dec 22 (weeknight)
  {
    id: 'mon-dec-22',
    dayOfWeek: 'MON',
    month: 'Dec',
    day: 22,
    time: '8:00PM',
    artist: 'The Wizard of Oz at Sphere',
    venue: 'Chase Center',
    city: 'San Francisco',
    state: 'CA',
    badges: [
      { type: 'limited', text: '41 Tickets Left', emoji: '🔥' },
    ],
    price: 205,
    getInPrice: 119,
    availability: 30,
    demand: 94,
    salesVelocity: 88,
    isWeekend: false,
    isWeeknight: true,
  },
  // #25 — Tue Dec 23 (weeknight)
  {
    id: 'tue-dec-23',
    dayOfWeek: 'TUE',
    month: 'Dec',
    day: 23,
    time: '7:30PM',
    artist: 'The Wizard of Oz at Sphere',
    venue: 'Golden 1 Center',
    city: 'Sacramento',
    state: 'CA',
    badges: [],
    price: 152,
    getInPrice: 72,
    availability: 64,
    demand: 78,
    salesVelocity: 66,
    isWeekend: false,
    isWeeknight: true,
  },
  // #26 — Fri Dec 26 (weekend)
  {
    id: 'fri-dec-26',
    dayOfWeek: 'FRI',
    month: 'Dec',
    day: 26,
    time: '7:00PM',
    artist: 'The Wizard of Oz at Sphere',
    venue: 'Moda Center',
    city: 'Portland',
    state: 'OR',
    badges: [
      { type: 'deals', text: 'Deals Available', emoji: '💰' },
    ],
    price: 125,
    getInPrice: 49,
    availability: 74,
    demand: 70,
    salesVelocity: 54,
    isWeekend: true,
    isWeeknight: false,
  },
  // #27 — Sat Dec 27 (weekend)
  {
    id: 'sat-dec-27',
    dayOfWeek: 'SAT',
    month: 'Dec',
    day: 27,
    time: '7:30PM',
    artist: 'The Wizard of Oz at Sphere',
    venue: 'Climate Pledge Arena',
    city: 'Seattle',
    state: 'WA',
    badges: [],
    price: 168,
    getInPrice: 89,
    availability: 50,
    demand: 85,
    salesVelocity: 74,
    isWeekend: true,
    isWeeknight: false,
  },
  // #28 — Mon Dec 29 (weeknight)
  {
    id: 'mon-dec-29',
    dayOfWeek: 'MON',
    month: 'Dec',
    day: 29,
    time: '8:00PM',
    artist: 'The Wizard of Oz at Sphere',
    venue: 'T-Mobile Arena',
    city: 'Las Vegas',
    state: 'NV',
    badges: [
      { type: 'limited', text: '52 Tickets Left', emoji: '🔥' },
    ],
    price: 188,
    getInPrice: 99,
    availability: 36,
    demand: 91,
    salesVelocity: 84,
    isWeekend: false,
    isWeeknight: true,
  },
];

// Ranking logic for each chip type
export function rankEvents(events: EventData[], chipId: DecisionChipId | null): EventData[] {
  if (!chipId) {
    return events; // Return original order if no chip selected
  }

  const rankedEvents = [...events];

  switch (chipId) {
    case 'best-deal':
      // Balance of price and demand - lower price + higher demand = better value
      rankedEvents.sort((a, b) => {
        const aValue = (100 - a.price / 2) + a.demand / 2;
        const bValue = (100 - b.price / 2) + b.demand / 2;
        return bValue - aValue;
      });
      break;

    case 'biggest-crowd':
      rankedEvents.sort((a, b) => b.demand - a.demand);
      break;

    case 'selling-fast':
      rankedEvents.sort((a, b) => b.salesVelocity - a.salesVelocity);
      break;

    case 'best-weekend':
      rankedEvents.sort((a, b) => {
        if (a.isWeekend && !b.isWeekend) return -1;
        if (!a.isWeekend && b.isWeekend) return 1;
        return b.demand - a.demand;
      });
      break;

    case 'safest-bet':
      rankedEvents.sort((a, b) => b.availability - a.availability);
      break;

    case 'almost-gone':
      rankedEvents.sort((a, b) => a.availability - b.availability);
      break;
  }

  return rankedEvents;
}

// Get explanation text for why an event is recommended
export function getRecommendationReason(event: EventData, chipId: DecisionChipId, rank: number, maxRank: number = 3): string | null {
  if (rank >= maxRank) return null;

  switch (chipId) {
    case 'best-deal':
      if (rank === 0) return 'Great seats at a competitive price with high demand';
      if (rank === 1) return 'Excellent value for this popular show';
      return 'Good balance of price and popularity';

    case 'biggest-crowd':
      if (rank === 0) return 'Highest anticipated show - electric atmosphere expected';
      if (rank === 1) return 'Very high demand - great energy likely';
      return 'Popular show with strong crowd energy';

    case 'selling-fast':
      if (rank === 0) return 'Tickets moving fastest - secure yours now';
      if (rank === 1) return 'High sales velocity - selling quickly';
      return 'Strong ticket sales - act soon';

    case 'best-weekend':
      if (event.isWeekend) {
        if (rank === 0) return 'Best weekend option - perfect for your schedule';
        return 'Great weekend show option';
      }
      return null;

    case 'safest-bet':
      if (rank === 0) return 'Most availability - plenty of seat options';
      if (rank === 1) return 'Good availability for seat selection';
      return 'Comfortable inventory levels';

    case 'almost-gone':
      if (rank === 0) return `Only ${event.availability}% remaining - act fast`;
      if (rank === 1) return 'Limited availability - selling out soon';
      return 'Low inventory - secure tickets now';
  }

  return null;
}

// Rank + filter events with an optional follow-up refinement
export function rankAndFilterEvents(
  events: EventData[],
  chipId: DecisionChipId | null,
  followUp?: FollowUpChip | null,
): EventData[] {
  // 1. Apply follow-up filter if present
  let filtered = events;
  if (followUp?.filter) {
    filtered = events.filter(followUp.filter);
  }

  // 2. Base ranking by chip
  let ranked = rankEvents(filtered, chipId);

  // 3. Apply sortBoost as primary re-sort if present (overrides base ranking)
  if (followUp?.sortBoost) {
    const boost = followUp.sortBoost;
    ranked = [...ranked].sort((a, b) => boost(b) - boost(a));
  }

  return ranked;
}

// Compose a compound recommendation reason (base + follow-up context)
export function getCompoundRecommendationReason(
  event: EventData,
  chipId: DecisionChipId,
  rank: number,
  followUp?: FollowUpChip | null,
  maxRank: number = 3,
): string | null {
  const base = getRecommendationReason(event, chipId, rank, maxRank);
  if (!base) return null;
  if (!followUp) return base;
  const punctuated = base.endsWith('.') || base.endsWith('!') || base.endsWith('?') ? base : `${base}.`;
  return `${punctuated} ${followUp.description}`;
}