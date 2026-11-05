import { Flame, Heart } from "lucide-react";
import imgPerformerPhoto from "../assets/wiz-of-oz.png";
import { TabCollection } from "./TicketTabs";

function UrgencyBanner() {
  return (
    <div
      className="bg-[#fbe5f3] content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[12px] py-[4px] relative rounded-[1000px] shrink-0"
      data-name="Urgency Banners"
    >
      <Flame
        className="shrink-0 text-[#8f1564]"
        size={17}
        strokeWidth={2}
      />
      <p className="font-medium leading-[21px] not-italic relative shrink-0 text-[#8f1564] text-[14px] text-nowrap">
        10,302 fans recently purchased
      </p>
    </div>
  );
}

function TitleGroup() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] items-start not-italic overflow-clip relative shrink-0 w-full"
      data-name="titleGroup"
    >
      <p className="font-black leading-[40px] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[#04092c] text-[32px] w-min">
        The Wizard of Oz at Sphere Tickets
      </p>
      <p className="font-normal leading-[30px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#04092c] text-[24px] text-nowrap">
        Live at Sphere
      </p>
      <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-full">
        <UrgencyBanner />
      </div>
    </div>
  );
}

function FavoriteButton() {
  return (
    <button
      className="absolute content-stretch flex items-center right-[7px] top-[7px]"
      data-name="Favorite Button"
      type="button"
      aria-label="Add to favorites"
    >
      <div className="bg-white border border-[#ce3197] border-solid content-stretch flex items-center justify-center min-h-[32px] min-w-[32px] p-[4px] relative rounded-[4px] shrink-0">
        <Heart
          className="text-[#ce3197]"
          size={14}
          strokeWidth={2}
        />
      </div>
    </button>
  );
}

function ImageContainer() {
  return (
    <div
      className="border border-[#efeff6] border-solid content-stretch flex flex-col items-start relative rounded-[8px] shrink-0"
      data-name="imageContainer"
    >
      <div
        className="h-[160px] overflow-clip relative rounded-[inherit] shrink-0 w-[284px]"
        data-name="Image Component"
      >
        <img
          alt="The Wizard of Oz at Sphere"
          className="absolute max-w-none object-cover size-full"
          src={imgPerformerPhoto}
        />
      </div>
      <FavoriteButton />
    </div>
  );
}

export function PerformerHeaderV2() {
  return (
    <div
      className="bg-white border-[#efeff6] border-[0px_0px_1px] border-solid content-stretch flex flex-col gap-[8px] items-center justify-center pb-0 pt-[32px] relative shrink-0 w-full"
      data-name="header"
    >
      <div
        className="content-stretch flex gap-[32px] items-center max-w-[1024px] relative shrink-0 w-full"
        data-name="header"
      >
        <div
          className="basis-0 content-stretch flex flex-col gap-[32px] grow items-start min-w-px overflow-clip relative shrink-0"
          data-name="textColumn"
        >
          <TitleGroup />
        </div>
        <ImageContainer />
      </div>

      <div className="max-w-[1024px] relative shrink-0 w-full">
        <TabCollection bordered={false} />
      </div>
    </div>
  );
}
