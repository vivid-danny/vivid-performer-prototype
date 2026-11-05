function Tab() {
  return (
    <div
      className="content-stretch flex flex-col items-center justify-center relative shrink-0"
      data-name="<Tab> 01"
    >
      <div className="content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[12px] relative shrink-0">
        <p className="font-bold leading-[25px] not-italic relative shrink-0 text-[#04092c] text-[20px] text-nowrap">
          Tickets
        </p>
      </div>
      <div
        className="absolute bg-[#ce3197] bottom-0 h-[2px] left-0 right-0 rounded-[1px]"
        data-name="Line"
      />
    </div>
  );
}

function Tab1() {
  return (
    <div
      className="content-stretch flex flex-col items-center justify-center relative shrink-0"
      data-name="<Tab> 02"
    >
      <div className="content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[12px] relative shrink-0">
        <p className="font-normal leading-[25px] not-italic relative shrink-0 text-[#717488] text-[20px] text-nowrap">
          Parking
        </p>
      </div>
    </div>
  );
}

interface TabCollectionProps {
  /** Draws the collection's own bottom hairline. Off when the
   *  surrounding header already carries a border (V2 layout). */
  bordered?: boolean;
}

export function TabCollection({
  bordered = true,
}: TabCollectionProps = {}) {
  return (
    <div
      className="content-stretch flex items-center overflow-clip relative shrink-0 w-full"
      data-name="<Tab Collection>"
    >
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <div className="basis-0 content-stretch flex grow h-full items-center min-h-px min-w-px relative shrink-0">
          {bordered && (
            <div
              aria-hidden="true"
              className="absolute border-[#d3d3dc] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
            />
          )}
          <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px overflow-clip relative shrink-0">
            <Tab />
            <Tab1 />
          </div>
        </div>
      </div>
    </div>
  );
}
