import svgPaths from "../imports/svg-fksusjrh5n";
import imgPerformerPhoto from "../assets/wiz-of-oz.png";

function ImageComponent() {
  return (
    <div
      className="h-[340px] relative shrink-0 w-[340px]"
      data-name="Image Component"
    >
      <img
        alt="Wizard of Oz at Sphere"
        className="absolute max-w-none object-cover size-full"
        src={imgPerformerPhoto}
      />
    </div>
  );
}

export function ImageContainer() {
  return (
    <div
      className="relative rounded-[8px] shrink-0 size-[340px]"
      data-name="imageContainer"
    >
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <ImageComponent />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[8px]"
      />
    </div>
  );
}

function MicrophoneStand() {
  return (
    <div
      className="relative shrink-0 size-[20px]"
      data-name="microphone-stand"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g clipPath="url(#clip0_1_7656)" id="microphone-stand">
          <path
            d={svgPaths.p2e562780}
            fill="var(--fill-0, #717488)"
            id="Primary"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_7656">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div
      className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[24px]"
      data-name="icon"
    >
      <MicrophoneStand />
    </div>
  );
}

function Content1() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0"
      data-name="content"
    >
      <p className="-webkit-box font-normal leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#04092c] text-[16px] text-nowrap">
        <span>{`34 Tour Dates `}</span>
        <span className="text-[#a0a2b3]">•</span>
        <span>{` 30 Cities`}</span>
      </p>
    </div>
  );
}

function UrgencyMessages() {
  return (
    <div
      className="content-stretch flex items-center relative rounded-[8px] shrink-0"
      data-name="Urgency Messages"
    >
      <Content1 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-[340px]">
      <Icon1 />
      <UrgencyMessages />
    </div>
  );
}

function User() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full"
      data-name="user"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="user">
          <path
            d={svgPaths.p3fa07c00}
            fill="var(--fill-0, #717488)"
            id="Primary"
          />
        </g>
      </svg>
    </div>
  );
}

function Icon2() {
  return (
    <div
      className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[24px]"
      data-name="icon"
    >
      <User />
    </div>
  );
}

function Message() {
  return (
    <div
      className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative rounded-[8px] shrink-0"
      data-name="message"
    >
      <p className="-webkit-box basis-0 font-normal grow leading-[24px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#04092c] text-[16px]">
        343 Fans shopping tickets now
      </p>
    </div>
  );
}

function FanUrgency() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full"
      data-name="fanUrgency"
    >
      <Icon2 />
      <Message />
    </div>
  );
}

export function Stats() {
  return (
    <div
      className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full"
      data-name="stats"
    >
      <Frame6 />
      <FanUrgency />
    </div>
  );
}

function Title() {
  return (
    <div
      className="content-stretch flex flex-col gap-[2px] items-start justify-center not-italic overflow-clip relative shrink-0 w-full"
      data-name="title"
    >
      <p className="font-bold leading-[25px] relative shrink-0 text-[#04092c] text-[20px] text-nowrap">
        Experience it live.
      </p>
      <p className="font-normal leading-[21px] min-w-full relative shrink-0 text-[#717488] text-[14px] w-min">
        100 million sold, 100% Buyer Guarantee.
      </p>
    </div>
  );
}

function Container18() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="container"
    >
      <div className="absolute inset-[0_0_-2.78%_0]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 26 27"
        >
          <g id="container">
            <path
              clipRule="evenodd"
              d={svgPaths.p16273cf0}
              fill="var(--fill-0, #13BDC3)"
              fillRule="evenodd"
              id="shield-check"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function TicketGuarantee() {
  return (
    <div
      className="content-stretch flex items-center justify-center p-[3px] relative shrink-0 size-[32px]"
      data-name="Ticket/Guarantee"
    >
      <Container18 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center justify-center relative rounded-[8px] shrink-0 w-full">
      <TicketGuarantee />
      <p className="basis-0 font-normal grow leading-[21px] min-h-px min-w-px not-italic relative shrink-0 text-[#04092c] text-[14px]">
        Tickets guaranteed to be valid and on time.
      </p>
    </div>
  );
}

function Container19() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full"
      data-name="container"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 26 26"
      >
        <g id="container">
          <path
            clipRule="evenodd"
            d={svgPaths.p1d56bb00}
            fillRule="evenodd"
            id="Heart Filled"
            stroke="var(--stroke-0, #277CF4)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
}

function InteractionFavorite() {
  return (
    <div
      className="content-stretch flex flex-col items-center justify-center p-[3px] relative shrink-0 size-[32px]"
      data-name="Interaction/Favorite"
    >
      <Container19 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center justify-center relative rounded-[8px] shrink-0 w-full">
      <InteractionFavorite />
      <p className="basis-0 font-normal grow leading-[21px] min-h-px min-w-px not-italic relative shrink-0 text-[#04092c] text-[14px]">
        Loved and trusted by over 30 million fans.
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div
      className="absolute inset-[5.56%_0_7.88%_0]"
      data-name="Frame"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 26 23"
      >
        <g id="Frame">
          <path
            d={svgPaths.p600c900}
            fill="var(--fill-0, #0983B6)"
            id="Path"
          />
          <path
            d={svgPaths.p235a6a00}
            fill="var(--fill-0, #0951B6)"
            id="Path_2"
          />
          <path
            d={svgPaths.p27e68b00}
            fill="var(--fill-0, #13BDC3)"
            id="Path_3"
          />
          <path
            d={svgPaths.p58d800}
            fill="var(--fill-0, #CE3197)"
            id="Path_4"
          />
        </g>
      </svg>
    </div>
  );
}

function Container20() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="container"
    >
      <Frame1 />
    </div>
  );
}

function AppNavRewardsColored() {
  return (
    <div
      className="content-stretch flex items-start p-[3px] relative shrink-0 size-[32px]"
      data-name="App Nav/Rewards Colored"
    >
      <Container20 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center justify-center relative rounded-[8px] shrink-0 w-full">
      <AppNavRewardsColored />
      <p className="basis-0 font-normal grow leading-[21px] min-h-px min-w-px not-italic relative shrink-0 text-[#04092c] text-[14px]">
        The only ticket rewards program around.
      </p>
    </div>
  );
}

function TrustBanner() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] items-start justify-center overflow-clip relative shrink-0 w-full"
      data-name="trustBanner"
    >
      <Frame5 />
      <Frame4 />
      <Frame3 />
    </div>
  );
}

export function TrustBannerA() {
  return (
    <div
      className="content-stretch flex flex-col gap-[16px] items-start relative rounded-[8px] shrink-0 w-full"
      data-name="Trust Banner A"
    >
      <Title />
      <TrustBanner />
    </div>
  );
}
