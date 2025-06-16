import React from "react";

// Gauge semicircular SVG component
export default function Gauge({ value = 0, max = 100, label = "", goal = "", currency = "$", colorFrom = "#fbdd41", colorTo = "#e39523" }) {
  // Clamp value
  const percent = Math.max(0, Math.min(1, value / max));
  const angle = percent * 180;
  const radius = 60;
  const stroke = 16;
  const cx = 75;
  const cy = 75;
  const r = radius;
  const startAngle = 180;
  const endAngle = 0;
  // Arc math
  const polarToCartesian = (cx, cy, r, angle) => {
    const a = (angle - 90) * Math.PI / 180.0;
    return {
      x: cx + (r * Math.cos(a)),
      y: cy + (r * Math.sin(a))
    };
  };
  const describeArc = (x, y, r, startAngle, endAngle) => {
    const start = polarToCartesian(x, y, r, endAngle);
    const end = polarToCartesian(x, y, r, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    return [
      "M", start.x, start.y,
      "A", r, r, 0, largeArcFlag, 0, end.x, end.y
    ].join(" ");
  };
  // Progress arc
  const arcPath = describeArc(cx, cy, r, 180, 180 - angle);
  // Background arc
  const bgArcPath = describeArc(cx, cy, r, 180, 0);
  return (
    <div className="flex flex-col items-center justify-center">
      <svg width="150" height="90" viewBox="0 0 150 90">
        {/* Background arc */}
        <path d={bgArcPath} fill="none" stroke="#ecf6f5" strokeWidth={stroke} />
        {/* Progress arc */}
        <path d={arcPath} fill="none" stroke={`url(#gauge-gradient)`} strokeWidth={stroke} strokeLinecap="round" />
        <defs>
          <linearGradient id="gauge-gradient" x1="0" y1="0" x2="150" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={colorFrom} />
            <stop offset="100%" stopColor={colorTo} />
          </linearGradient>
        </defs>
        {/* Value text */}
        <text x="75" y="60" textAnchor="middle" fontSize="1.6rem" fontWeight="bold" fill="#1c4145">{currency}{value}</text>
      </svg>
      <div className="text-[#1c4145] text-sm font-medium -mt-2">{label}</div>
      {goal && <div className="text-xs text-[#1c4145] opacity-70">Progresso até {goal}</div>}
    </div>
  );
}
