import { motion } from "motion/react";
import { Calendar, Sparkles, Ticket } from "lucide-react";

interface PerformerFiltersProps {
  isPanelOpen: boolean;
  onToggle: () => void;
}

function DateFilterChip() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] items-center justify-center px-[12px] py-[8px] relative rounded-[4px] shrink-0">
      <div
        aria-hidden="true"
        className="absolute border border-[#d3d3dc] border-solid inset-0 pointer-events-none rounded-[4px]"
      />
      <Calendar className="size-[14px] text-[#086e88] shrink-0" />
      <p className="font-normal leading-[24px] not-italic relative shrink-0 text-[#04092c] text-[16px] text-nowrap">
        Date
      </p>
    </div>
  );
}

function PriceFilterChip() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] items-center justify-center px-[12px] py-[8px] relative rounded-[4px] shrink-0">
      <div
        aria-hidden="true"
        className="absolute border border-[#d3d3dc] border-solid inset-0 pointer-events-none rounded-[4px]"
      />
      <Ticket className="size-[14px] text-[#086e88] shrink-0" />
      <p className="font-normal leading-[24px] not-italic relative shrink-0 text-[#04092c] text-[16px] text-nowrap">
        Tickets under $100
      </p>
    </div>
  );
}

export function PerformerFilters({ isPanelOpen, onToggle }: PerformerFiltersProps) {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0">
      <button
        onClick={onToggle}
        className={`flex gap-[6px] items-center justify-center px-[12px] py-[8px] relative overflow-hidden rounded-[4px] shrink-0 border transition-all duration-200 cursor-pointer ${
          isPanelOpen
            ? "bg-[#ce3197] border-[#ce3197]"
            : "bg-white border-[#d3d3dc] hover:border-[#ce3197]"
        }`}
      >
        {!isPanelOpen && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{ x: ["-100%", "150%"] }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 4,
            }}
            style={{
              width: "80%",
              background:
                "linear-gradient(45deg, transparent 0%, rgba(206,49,151,0.08) 25%, rgba(255,255,255,0.75) 50%, rgba(206,49,151,0.08) 75%, transparent 100%)",
            }}
          />
        )}
        <Sparkles className={`size-[14px] ${isPanelOpen ? "text-white" : "text-[#086e88]"}`} />
        <p className={`font-normal leading-[24px] not-italic text-[16px] text-nowrap ${
          isPanelOpen ? "text-white" : "text-[#04092c]"
        }`}>
          Find my show
        </p>
      </button>
      <PriceFilterChip />
      <DateFilterChip />
    </div>
  );
}
