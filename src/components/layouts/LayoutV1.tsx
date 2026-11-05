import { type ReactNode } from "react";
import { Header } from "../PerformerHeader";
import { TabCollection } from "../TicketTabs";
import {
  ImageContainer,
  Stats,
  TrustBannerA,
} from "../RightSidebar";
import { SeoContent } from "../SeoContent";

interface LayoutV1Props {
  children: ReactNode;
}

/**
 * V1 — gradient hero + 1200px two-column shell with a 340px right
 * sidebar. The sidebar's `-mt-48` pull into the hero is paired with
 * the `max-w-[1200px] pr-[340px]` reservation inside PerformerHeader.
 */
export function LayoutV1({ children }: LayoutV1Props) {
  return (
    <>
      <Header />

      <div className="content-stretch flex items-start pb-[48px] pt-0 px-0 relative shrink-0 w-full">
        <div className="w-full flex justify-center px-[40px]">
          <div className="relative w-full max-w-[1200px]">

            <div className="flex flex-row w-full gap-16 pt-8">
              {/* Main Content */}
              <div className="flex-1 min-w-0" data-name="content">
                <div className="size-full">
                  <div className="content-stretch flex items-start py-0 relative w-full">
                    <div
                      className="basis-0 content-stretch flex flex-col gap-[32px] grow items-start min-h-[900px] min-w-px relative shrink-0"
                      data-name="container"
                    >
                      <TabCollection />
                      {children}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Sidebar */}
              <div
                className="w-[340px] shrink-0 flex flex-col gap-[32px] -mt-48 items-start"
                data-name="rightCol"
              >
                <ImageContainer />
                <Stats />
                <div
                  className="bg-[#efeff6] h-px shrink-0 w-full"
                  data-name="divider"
                />
                <TrustBannerA />
              </div>
            </div>

            <SeoContent />
          </div>
        </div>
      </div>
    </>
  );
}
