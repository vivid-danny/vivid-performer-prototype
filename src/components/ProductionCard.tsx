import { EventData } from '../data/events';

interface ProductionCardProps {
  event: EventData;
  isRecommended?: boolean;
  recommendationReason?: string | null;
}

export function ProductionCard({ event, isRecommended = false, recommendationReason }: ProductionCardProps) {
  return (
    <div 
      className={`
        relative rounded-[4px] shrink-0 w-full transition-all duration-300
        ${isRecommended ? 'bg-[#fef9fd]' : 'bg-white'}
      `}
      data-name="<Production Card>"
    >
      <div
        aria-hidden="true"
        className={`
          absolute border-solid inset-0 pointer-events-none rounded-[4px]
          ${isRecommended ? 'border border-[#ce3197]/50' : 'border border-[#efeff6]'}
        `}
      />
      
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pl-[16px] pr-[24px] relative w-full py-[12px]">
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="container">
            <div className="flex flex-row items-center self-stretch">
              {/* Date Info */}
              <div className="content-stretch flex flex-col h-full items-center justify-center pb-0 pl-0 pr-[16px] pt-[2px] relative shrink-0" data-name="dateInfoGroup">
                <div aria-hidden="true" className="absolute border-[#efeff6] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
                
                {/* Weekday */}
                <div className="content-stretch flex items-center justify-center min-w-[48px] relative shrink-0 w-full" data-name="weekdayContainer">
                  <div className="basis-0 flex flex-col font-bold grow justify-center leading-0 min-h-px min-w-px not-italic relative shrink-0 text-[#474b5e] text-[12px] text-center tracking-[1.2px] uppercase">
                    <p className="leading-[15px]">{event.dayOfWeek}</p>
                  </div>
                </div>

                {/* Date */}
                <div className="content-stretch flex font-bold gap-[2px] items-center justify-center leading-[21px] min-w-[48px] not-italic relative shrink-0 text-[#ce3197] text-[14px] text-nowrap w-full" data-name="dateGroup">
                  <p className="relative shrink-0">{event.month}</p>
                  <p className="relative shrink-0">{event.day}</p>
                </div>

                {/* Time */}
                <div className="content-stretch flex items-center justify-center min-w-[48px] relative shrink-0 w-full" data-name="timeContainer">
                  <div className="basis-0 flex flex-col font-normal grow justify-center leading-0 min-h-px min-w-px not-italic relative shrink-0 text-[#474b5e] text-[12px] text-center">
                    <p className="leading-[18px]">{event.time}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Event Info */}
            <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="eventInfoGroup">
              {/* Badges Row */}
              {(isRecommended || event.badges.length > 0) && (
                <div className="content-stretch flex gap-[8px] items-center pb-[4px] pt-0 px-0 relative shrink-0 w-full flex-wrap" data-name="badgeRow">
                  {isRecommended && (
                    <div
                      className="flex items-center gap-1 rounded-full bg-[#fbe5f3] font-medium leading-[18px] text-[12px] text-nowrap px-2"
                      data-name="Production Listing Badges"
                    >
                      <p className="relative shrink-0 text-[#ce3197] uppercase tracking-[0.5px]">Best Match</p>
                    </div>
                  )}
                  {event.badges.map((badge, index) => (
                    <div
                      key={index}
                      className={`
                        content-stretch flex items-center relative rounded-[100px] shrink-0
                        ${badge.type === 'deals' ? 'bg-[#dafafb]' : 'bg-[#fbe5f3]'}
                      `}
                      data-name="Production Listing Badges"
                    >
                      <div className="content-stretch flex font-medium gap-[2px] items-center justify-center leading-[18px] not-italic px-[4px] py-0 relative rounded-[100px] shrink-0 text-[12px] text-nowrap" data-name="<Badge>">
                        {badge.emoji && <p className="relative shrink-0 text-[#086e88]">{badge.emoji}</p>}
                        {badge.text && (
                          <p className={`relative shrink-0 ${badge.type === 'deals' ? 'text-[#086e88]' : 'text-[#8f1564]'}`}>
                            {badge.text}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Artist Name */}
              <p className="font-medium leading-[21px] not-italic relative shrink-0 text-[#04092c] text-[14px] w-full">
                {event.artist}
              </p>

              {/* Location */}
              <div className="content-center flex flex-wrap font-normal gap-[2px] items-center leading-[21px] not-italic relative shrink-0 text-[14px] text-nowrap w-full" data-name="location">
                <p className="relative shrink-0 text-[#474b5e]">{event.venue}</p>
                <p className="relative shrink-0 text-[#a0a2b3]">•</p>
                <p className="relative shrink-0 text-[#474b5e]">{event.city}, {event.state}</p>
              </div>

              {/* Recommendation Reason */}
              {isRecommended && recommendationReason && (
                <div className="mt-[8px] bg-[#fef2f9] px-[10px] py-[6px] rounded-[4px] w-full">
                  <p className="font-normal leading-[18px] text-[#717488] text-[12px]">
                    {recommendationReason}
                  </p>
                </div>
              )}
            </div>

            {/* CTA Button */}
            <div className="content-stretch flex gap-[8px] items-start justify-end relative shrink-0" data-name="ctaGroup">
              <div className="bg-white content-stretch flex gap-[4px] items-center justify-center min-h-[32px] px-[12px] py-[4px] relative rounded-[4px] shrink-0 cursor-pointer hover:bg-[#fef9fd] transition-colors" data-name="<Button>">
                <div aria-hidden="true" className="absolute border border-[#ce3197] border-solid inset-0 pointer-events-none rounded-[4px]" />
                <p className="font-normal leading-[21px] not-italic relative shrink-0 text-[#ce3197] text-[14px] text-nowrap">From ${event.getInPrice}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
