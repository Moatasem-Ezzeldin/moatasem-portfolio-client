import { memo } from "react";

const Tooltip = ({ tooltip }) => {
  if (!tooltip) return null;

  return (
    <div
        className="fixed z-50 px-2 py-1 rounded-md bg-surface border border-border shadow-md text-xs text-subtitle
        whitespace-nowrap transition-all duration-300 pointer-events-none ease-in-out"
        style={{
            top: tooltip?.y,
            ...(tooltip?.rtl
                ? { right: tooltip?.x }
                : { left: tooltip?.x }),
            transform: tooltip
                ? "translateY(-50%)"
                : "translateY(-100%)",
            opacity: tooltip ? 1 : 0,
        }}
    >
        {tooltip?.text}
    </div>
  );
};

export default memo(Tooltip);