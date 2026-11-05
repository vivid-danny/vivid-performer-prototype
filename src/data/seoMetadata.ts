export interface DealEntry {
  section: string;
  row: string;
  price: number;
  dealScore: number;
  dealLabel: string; // "Fantastic" | "Excellent"
}

export interface SeoMetadata {
  artist: string;
  lowestPrice: number;
  averagePrice: number;
  topDeals: DealEntry[];
  faqs: Array<{ question: string; answer: string }>;
  isLegit: {
    trustedFans: string;
    guaranteePoints: string[];
  };
  rewards: {
    hasRewards: boolean;
    perks: string[];
  };
  buyerGuarantee: string[];
  allInPricing: boolean;
  customerSupport: string[];
  whyVividSeats: string[];
  dealScoreExplained: string[];
}

export const seoMetadata: SeoMetadata = {
  artist: "The Wizard of Oz at Sphere",
  lowestPrice: 63,
  averagePrice: 508,

  // Sample/illustrative deal score data for The Wizard of Oz at Sphere
  topDeals: [
    { section: "Floor 2", row: "5", price: 895, dealScore: 10.0, dealLabel: "Fantastic" },
    { section: "Lower Level 102", row: "3", price: 687, dealScore: 9.9, dealLabel: "Excellent" },
    { section: "Lower Level 108", row: "7", price: 524, dealScore: 9.8, dealLabel: "Excellent" },
    { section: "Club Level 201", row: "2", price: 412, dealScore: 9.8, dealLabel: "Excellent" },
    { section: "Upper Level 301", row: "4", price: 287, dealScore: 9.7, dealLabel: "Excellent" },
  ],

  faqs: [
    {
      question: "How much are The Wizard of Oz at Sphere tickets?",
      answer:
        "The Wizard of Oz at Sphere ticket prices vary by venue, seat location, and demand. On Vivid Seats, tickets start as low as $63, with an average price of $508. Prices are all-in, so what you see is what you pay — no surprise fees at checkout.",
    },
    {
      question: "Where can I buy The Wizard of Oz at Sphere tickets?",
      answer:
        "You can buy The Wizard of Oz at Sphere tickets right here on Vivid Seats. With over 100 million tickets sold, Vivid Seats is one of the most trusted ticket marketplaces in the US. Browse all available tour dates, compare seat options, and check out securely in minutes.",
    },
    {
      question: "Will The Wizard of Oz at Sphere tour this year?",
      answer:
        "Yes! The Wizard of Oz at Sphere is actively touring, with dates available across North America and beyond. Visit Vivid Seats to see all upcoming The Wizard of Oz at Sphere tour dates and find the show nearest to you.",
    },
    {
      question: "When do The Wizard of Oz at Sphere tickets go on sale?",
      answer:
        "On-sale dates vary by venue and tour announcement. Vivid Seats typically has tickets available shortly after they go on sale — and often before. Check the tour dates listing above for current availability, and set up alerts to be notified when new dates are announced.",
    },
    {
      question: "Which cities show the highest ticket demand for The Wizard of Oz at Sphere?",
      answer:
        "Demand for The Wizard of Oz at Sphere tickets is highest in major metro areas including New York, Los Angeles, Chicago, and Toronto. These shows tend to sell out quickly, and prices reflect the high competition for seats. Act early to lock in the best available options.",
    },
    {
      question: "How long is an The Wizard of Oz at Sphere show?",
      answer:
        "A typical The Wizard of Oz at Sphere concert runs approximately 90 minutes to 2 hours, including any opening acts. Show length can vary slightly by venue and setlist. Plan to arrive early — doors typically open about an hour before the show.",
    },
    {
      question: "Can I buy parking passes for The Wizard of Oz at Sphere shows?",
      answer:
        "Parking availability depends on the venue. Many Vivid Seats listings include parking pass options at or near the venue. Check the individual event listing for parking details, or search for parking passes separately on Vivid Seats.",
    },
    {
      question: "What time do doors open for The Wizard of Oz at Sphere shows?",
      answer:
        "Doors typically open 60–90 minutes before the listed show time, but this varies by venue. We recommend checking the venue's website or your ticket confirmation for specific door times. Arriving early ensures you have time to find your seats and enjoy any opening acts.",
    },
    {
      question: "Can I buy floor or suite tickets for The Wizard of Oz at Sphere?",
      answer:
        "Yes! Vivid Seats offers a wide range of ticket types for The Wizard of Oz at Sphere shows, including floor, pit, lower bowl, club level, upper deck, and suite options. Use the seat map and filters on the event listing page to find exactly the experience you're looking for.",
    },
    {
      question: "Is Vivid Seats legit for The Wizard of Oz at Sphere tickets?",
      answer:
        "Absolutely. Vivid Seats has been in business since 2001 and has sold over 100 million tickets to fans across the country. We are a publicly traded company (NASDAQ: SEAT) and consistently receive high ratings from customers. Every purchase comes with our 100% Buyer Guarantee.",
    },
    {
      question: "Are tickets guaranteed on Vivid Seats?",
      answer:
        "Absolutely. Every The Wizard of Oz at Sphere ticket sold on Vivid Seats comes with our 100% Buyer Guarantee, which ensures your transaction will be secure, your tickets will be delivered before your event, and your tickets will be valid and authentic — or your money back. Our mission is to make buying The Wizard of Oz at Sphere tickets stress-free, so you can focus on enjoying your event.",
    },
    {
      question: "Are fees included in the price I see on Vivid Seats?",
      answer:
        "Yes. Vivid Seats uses all-in pricing, so the price you see on each listing already includes all service fees and delivery charges. There are no surprise fees at checkout — the price listed is the price you pay.",
    },
    {
      question: "Will my group be seated together?",
      answer:
        "When you purchase multiple tickets in a single order on Vivid Seats, your seats will be in the same row or adjacent section, as specified in the listing. We recommend reviewing the listing details before purchasing to confirm seating arrangements meet your needs.",
    },
    {
      question: "What happens if my event is canceled or postponed?",
      answer:
        "If an The Wizard of Oz at Sphere show is canceled, you will receive a full refund to your original payment method. If a show is postponed, your tickets will remain valid for the new date. Vivid Seats will notify you via email of any changes and provide instructions for refund requests if applicable.",
    },
    {
      question: "Does Vivid Seats have a rewards program?",
      answer:
        "Yes! Vivid Seats offers a leading ticket loyalty program: Vivid Seats Rewards. Fans earn credit on every purchase, which can be redeemed for future tickets. The more events you attend, the more perks you can unlock.",
    },
  ],

  isLegit: {
    trustedFans: "100 million",
    guaranteePoints: [
      "Your transaction will be secure.",
      "Your tickets will be delivered before your event.",
      "Your tickets will be valid and authentic or your money back.",
    ],
  },

  rewards: {
    hasRewards: true,
    perks: [
      "A free 11th ticket after 10 purchases",
      "Birthday rewards",
      "Seat upgrades and VIP parties",
      "Exclusive experiences like on-field passes to your favorite team",
    ],
  },

  buyerGuarantee: [
    "Your transaction will be secure.",
    "Your tickets will be delivered before your event.",
    "Your tickets will be valid and authentic or your money back.",
  ],

  allInPricing: true,

  customerSupport: [
    "24/7 customer support via phone and live chat",
    "Dedicated fan support team",
    "Order tracking and email notifications",
  ],

  whyVividSeats: [
    "Over 100 million tickets sold since 2001",
    "100% Buyer Guarantee on every purchase",
    "All-in pricing — no hidden fees",
    "Industry-leading rewards program",
    "Publicly traded company (NASDAQ: SEAT)",
  ],

  dealScoreExplained: [
    "Deal Score analyzes price trends, fan demand, and available seating so you get the best bang for your buck on The Wizard of Oz at Sphere tickets.",
    "Scores range from 1–10, with higher scores representing better value relative to comparable seats.",
    "A 'Fantastic' score (10.0) means the listing is priced significantly below market rate for its section and row.",
    "An 'Excellent' score (9.5–9.9) means the listing offers strong value compared to similar available tickets.",
  ],
};
