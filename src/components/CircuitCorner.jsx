// Small circuit-board corner pieces for page banners: black on yellow, yellow on black in dark mode.
// "tr" sits in the top-right corner, "bl" in the bottom-left. Hidden below 1280px so text stays clear.
const trace = { fill: "none", stroke: "currentColor", strokeWidth: 3, strokeLinecap: "round", strokeLinejoin: "round", opacity: 0.45 };
const mono = { fill: "currentColor", opacity: 0.45, fontFamily: "ui-monospace, monospace", fontSize: 14, fontWeight: 600 };

export default function CircuitCorner({ at = "tr", code = "" }) {
  const pos = at === "tr" ? "right-0 top-0" : "bottom-0 left-0";
  return (
    <svg
      className={`pointer-events-none absolute hidden h-[220px] w-[340px] text-[#0A0A0A] dark:text-accent xl:block ${pos}`}
      viewBox="0 0 340 220"
      aria-hidden="true"
    >
      {at === "tr" ? (
        <>
          <g {...trace}>
            <path d="M340 70 H250 L220 100 H170 L150 120 V150" />
            <path d="M340 130 H290 L270 150 V200" />
          </g>
          <circle cx="250" cy="70" r="8" fill="none" stroke="currentColor" strokeWidth="3" opacity=".7" />
          <g fill="currentColor" opacity=".7">
            <circle cx="150" cy="150" r="6" /><circle cx="270" cy="200" r="6" />
          </g>
          {code && <text x="326" y="38" textAnchor="end" {...mono}>{code}</text>}
        </>
      ) : (
        <>
          <g {...trace}>
            <path d="M0 120 H60 L90 90 H140 L160 70 V40" />
            <path d="M0 180 H110 L140 210 H220" />
          </g>
          <circle cx="90" cy="90" r="8" fill="none" stroke="currentColor" strokeWidth="3" opacity=".7" />
          <g fill="currentColor" opacity=".7">
            <circle cx="160" cy="40" r="6" /><circle cx="220" cy="210" r="6" />
          </g>
        </>
      )}
    </svg>
  );
}
