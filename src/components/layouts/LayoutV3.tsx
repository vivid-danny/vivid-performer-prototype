import { type ReactNode } from "react";
import { PerformerHeaderV3 } from "../PerformerHeaderV3";
import { TabCollection } from "../TicketTabs";
import { SeoContent } from "../SeoContent";

interface LayoutV3Props {
  children: ReactNode;
}

/**
 * V3 — short gradient header with an inline performer image, above a
 * single centered 1024px column. The header centers on the same
 * `max-w-[1024px]` so title, tabs and cards share one left edge
 * regardless of scrollbar width. Tabs live in the column (V1
 * behavior), not in the header (V2 behavior).
 */
export function LayoutV3({ children }: LayoutV3Props) {
  return (
    <>
      <PerformerHeaderV3 />

      <div className="content-stretch flex items-start pb-[48px] pt-0 px-0 relative shrink-0 w-full">
        <div className="w-full flex justify-center">
          <div className="relative w-full max-w-[1024px]">

            <div
              className="content-stretch flex flex-col gap-[32px] items-start min-h-[900px] pt-[32px] relative w-full"
              data-name="container"
            >
              <TabCollection />
              {children}
            </div>

            <SeoContent />
          </div>
        </div>
      </div>
    </>
  );
}
