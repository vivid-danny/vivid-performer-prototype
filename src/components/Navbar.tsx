import svgPaths from "../imports/svg-fksusjrh5n";

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-medium leading-[18px] not-italic relative shrink-0 text-[12px] text-nowrap text-white">
        100 million sold, 100% Buyer Guarantee. Learn More.
      </p>
    </div>
  );
}

function GlobalBanner() {
  return (
    <div
      className="bg-[#04092c] relative shrink-0 w-full"
      data-name="Global Banner"
    >
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[444px] py-[12px] relative w-full">
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function LabelOnly() {
  return (
    <div
      className="absolute inset-[0_3.86%_0_17.05%]"
      data-name="Label Only"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 148 43"
      >
        <g id="Label Only">
          <path
            d={svgPaths.p9255580}
            fill="var(--fill-0, #04092C)"
            id="wordmark"
          />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute bottom-1/4 left-[24.33%] right-[24.33%] top-1/4">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 32 28"
      >
        <g id="Group 2">
          <path
            d={svgPaths.pf94cb00}
            fill="var(--fill-0, #0983B6)"
            id="Path"
          />
          <path
            d={svgPaths.p1adf2c00}
            fill="var(--fill-0, #0951B6)"
            id="Path_2"
          />
          <path
            d={svgPaths.p3205f500}
            fill="var(--fill-0, #13BDC3)"
            id="Path_3"
          />
          <path
            d={svgPaths.p6f6dd00}
            fill="var(--fill-0, #CE3197)"
            id="Path_4"
          />
        </g>
      </svg>
    </div>
  );
}

function Brandmark() {
  return (
    <div
      className="absolute inset-[-12%_67.27%_-16%_0]"
      data-name="Brandmark"
    >
      <Group />
    </div>
  );
}

function MarkLabel() {
  return (
    <div
      className="h-[42.273px] relative shrink-0 w-[186px]"
      data-name="Mark+Label"
    >
      <LabelOnly />
      <Brandmark />
    </div>
  );
}

function Container() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full"
      data-name="container"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g id="container">
          <path
            d={svgPaths.p28e7ba80}
            fill="var(--fill-0, #04092C)"
            id="search"
          />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div
      className="content-stretch flex flex-col items-center justify-center p-[3px] relative shrink-0 size-[20px]"
      data-name="Icon"
    >
      <Container />
    </div>
  );
}

function Frame() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0"
      data-name="Frame"
    >
      <Icon />
      <p className="font-normal leading-[24px] not-italic relative shrink-0 text-[#717488] text-[16px] text-nowrap">{`Search by artist, team, or venue `}</p>
    </div>
  );
}

function SearchBar() {
  return (
    <div
      className="bg-[#f6f6fb] content-stretch flex flex-col items-start justify-center px-[16px] py-[10px] relative rounded-[100px] shrink-0 w-[343px]"
      data-name="Search Bar"
    >
      <Frame />
    </div>
  );
}

function LogoSearchBox() {
  return (
    <div
      className="content-stretch flex gap-[40px] items-center justify-center relative shrink-0"
      data-name="Logo + Search Box"
    >
      <MarkLabel />
      <SearchBar />
    </div>
  );
}

function NavItem({ text }: { text: string }) {
  return (
    <div
      className="content-stretch flex gap-[4px] items-center justify-center px-[12px] py-[6px] relative shrink-0"
      data-name="Nav Item"
    >
      <p className="font-medium leading-[24px] not-italic relative shrink-0 text-[#04092c] text-[16px] text-nowrap">
        {text}
      </p>
    </div>
  );
}

function Container1() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="container"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g id="container">
          <path
            d={svgPaths.p11f97300}
            fill="var(--fill-0, #04092C)"
            id="user"
          />
        </g>
      </svg>
    </div>
  );
}

function AppNavUser() {
  return (
    <div
      className="content-stretch flex items-center justify-center p-[3px] relative shrink-0 size-[20px]"
      data-name="App Nav/User"
    >
      <Container1 />
    </div>
  );
}

function Navigation() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center relative shrink-0"
      data-name="Navigation"
    >
      <NavItem text="Trending" />
      <NavItem text="Sports" />
      <NavItem text="Concerts" />
      <NavItem text="Theater & Comedy" />
      <div
        className="content-stretch flex gap-[4px] items-center justify-center px-[12px] py-[6px] relative shrink-0"
        data-name="Nav Item"
      >
        <AppNavUser />
      </div>
    </div>
  );
}

function Headers() {
  return (
    <div
      className="bg-white relative shrink-0 w-full"
      data-name="Headers"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#d3d3dc] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[28px] py-[16px] relative w-full">
          <LogoSearchBox />
          <Navigation />
        </div>
      </div>
    </div>
  );
}

export function Navbar() {
  return (
    <div
      className="content-stretch flex flex-col items-start shrink-0 sticky top-0 w-full z-50"
      data-name="<navbar>"
    >
      <GlobalBanner />
      <Headers />
    </div>
  );
}
