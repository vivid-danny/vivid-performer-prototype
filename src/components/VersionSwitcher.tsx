import { motion } from "motion/react";

export type LayoutVersion = 1 | 2 | 3;

interface VersionSwitcherProps {
  value: LayoutVersion;
  onChange: (version: LayoutVersion) => void;
}

const versions: { id: LayoutVersion; label: string }[] = [
  { id: 1, label: "V1" },
  { id: 2, label: "V2" },
  { id: 3, label: "V3" },
];

export function VersionSwitcher({
  value,
  onChange,
}: VersionSwitcherProps) {
  return (
    <div
      className="bg-white border border-[#d3d3dc] border-solid fixed bottom-[24px] content-stretch flex gap-[2px] items-center p-[4px] right-[24px] rounded-[100px] shadow-[0_4px_16px_rgba(4,9,44,0.12)] z-[100]"
      data-name="versionSwitcher"
      role="group"
      aria-label="Layout version"
    >
      {versions.map((version) => {
        const isActive = value === version.id;
        return (
          <button
            key={version.id}
            type="button"
            onClick={() => onChange(version.id)}
            aria-pressed={isActive}
            className="cursor-pointer min-w-[52px] px-[16px] py-[8px] relative rounded-[100px]"
          >
            {isActive && (
              <motion.div
                layoutId="version-switcher-pill"
                className="absolute bg-[#ce3197] inset-0 rounded-[100px]"
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 32,
                }}
              />
            )}
            <span
              className={`font-medium leading-[21px] not-italic relative text-[14px] text-nowrap transition-colors duration-200 ${
                isActive ? "text-white" : "text-[#717488]"
              }`}
            >
              {version.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
