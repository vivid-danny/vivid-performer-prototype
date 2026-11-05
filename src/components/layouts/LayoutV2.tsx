import { type ReactNode } from "react";
import { PerformerHeaderV2 } from "../PerformerHeaderV2";
import { SeoContent } from "../SeoContent";

interface LayoutV2Props {
  children: ReactNode;
}

/**
 * V2 — white header (which owns its own tab collection) above a single
 * centered 1024px column. No sidebar, no gradient hero.
 */
export function LayoutV2({ children }: LayoutV2Props) {
  return (
    <>
      <PerformerHeaderV2 />

      <div className="content-stretch flex items-start pb-[48px] pt-0 px-0 relative shrink-0 w-full">
        {/* Centered 1024px column — matches the header's own
            centering so the two stay aligned regardless of
            scrollbar width. */}
        <div className="w-full flex justify-center">
          <div className="relative w-full max-w-[1024px]">

            <div
              className="content-stretch flex flex-col gap-[32px] items-start min-h-[900px] pt-[32px] relative w-full"
              data-name="container"
            >
              {children}
            </div>

            <SeoContent />
          </div>
        </div>
      </div>
    </>
  );
}
