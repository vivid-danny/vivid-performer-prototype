function Container2() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="container"
      style={{
        backgroundImage:
          "linear-gradient(83.5731deg, rgb(20, 55, 138) 0%, rgb(129, 3, 114) 100%)",
      }}
    >
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[80px] py-[48px] size-full" />
      </div>
    </div>
  );
}

function BgHeader() {
  return (
    <div
      className="absolute content-stretch flex inset-0 items-center"
      data-name="<bgHeader>"
    >
      <Container2 />
    </div>
  );
}

function TitleGroup() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] items-start justify-center not-italic relative shrink-0 text-white w-full"
      data-name="titleGroup"
    >
      <p className="-webkit-box font-black leading-[40px] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[32px] w-min">
        The Wizard of Oz at Sphere Tickets
      </p>
    </div>
  );
}

function PerformerInfo() {
  return (
    <div
      className="grow relative shrink-0"
      data-name="performerInfo"
    >
      <div className="flex justify-center">
        <div className="flex flex-col items-start w-full max-w-[1440px] py-16 pr-[340px] relative">
          <TitleGroup />
        </div>
      </div>
    </div>
  );
}

export function Header() {
  return (
    <div
      className="content-stretch flex items-start min-h-[220px] relative shrink-0 w-full"
      data-name="header"
    >
      <BgHeader />
      <PerformerInfo />
    </div>
  );
}
