import { Heart } from "lucide-react";
import imgPerformerPhoto from "../assets/wiz-of-oz.png";
import imgPolygons from "../assets/header-polygons.svg";

function BgHeader() {
  return (
    <div
      className="absolute content-stretch flex inset-0 items-center"
      data-name="<bgHeader>"
    >
      <div
        className="basis-0 content-stretch flex grow h-full items-center min-w-px overflow-clip px-[80px] py-[48px] relative shrink-0"
        data-name="container"
        style={{
          backgroundImage:
            "linear-gradient(83.9197deg, rgb(20, 55, 138) 0%, rgb(41, 33, 110) 16.827%, rgb(58, 31, 106) 81.264%, rgb(146, 19, 140) 100%)",
        }}
      >
        <div
          className="absolute aspect-[265.048/184] bottom-0 right-[-68px] top-0"
          data-name="polygons"
        >
          <img
            alt=""
            aria-hidden="true"
            className="absolute block inset-0 max-w-none size-full"
            src={imgPolygons}
          />
        </div>
      </div>
    </div>
  );
}

function TitleGroup() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] items-start not-italic overflow-clip relative shrink-0 text-white w-full"
      data-name="titleGroup"
    >
      <p className="font-black leading-[40px] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[32px] w-min">
        The Wizard of Oz at Sphere Tickets
      </p>
      <p className="font-normal leading-[30px] overflow-ellipsis overflow-hidden relative shrink-0 text-[24px] text-nowrap">
        Live at Sphere
      </p>
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
        <Heart className="text-[#ce3197]" size={14} strokeWidth={2} />
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

export function PerformerHeaderV3() {
  return (
    <div
      className="content-stretch flex items-center justify-center py-[32px] relative shrink-0 w-full"
      data-name="header"
    >
      <BgHeader />

      <div
        className="basis-0 content-stretch flex gap-[32px] grow items-center max-w-[1024px] min-w-px relative shrink-0"
        data-name="container"
      >
        <div
          className="basis-0 content-stretch flex flex-col gap-[32px] grow items-start min-w-px overflow-clip relative shrink-0"
          data-name="textColumn"
        >
          <TitleGroup />
        </div>
        <ImageContainer />
      </div>
    </div>
  );
}
