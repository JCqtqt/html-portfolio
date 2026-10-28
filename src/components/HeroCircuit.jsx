// Circuit-board decoration behind the Home hero: black on yellow, yellow on black in dark mode.
// Two pieces pinned to the left and right edges so they keep their size on any screen.
// Shown on wide screens only, so it never crowds the text.
const base = "pointer-events-none absolute top-0 hidden h-full text-[#0A0A0A] dark:text-accent min-[1400px]:block";
const trace = { fill: "none", stroke: "currentColor", strokeWidth: 3, strokeLinecap: "round", strokeLinejoin: "round", opacity: 0.45 };
const mono = { fill: "currentColor", opacity: 0.4, fontFamily: "ui-monospace, monospace", fontSize: 15, fontWeight: 600 };

export default function HeroCircuit() {
  return (
    <>
      {/* left edge */}
      <svg className={`${base} left-0`} viewBox="0 0 820 860" preserveAspectRatio="xMinYMid meet" aria-hidden="true">
        <g {...trace}>
          <path d="M0 470 H60 L100 430 V330" />
          <path d="M0 640 H70 L110 600 V560" />
          <path d="M0 800 H150 L190 840 H330 L350 860" />
          <path d="M600 860 V830 L630 800 H760 L790 770 V760" />
        </g>
        <g fill="currentColor" opacity=".7">
          <circle cx="100" cy="330" r="7" /><circle cx="110" cy="560" r="7" /><circle cx="790" cy="760" r="7" />
        </g>
        <g fill="none" stroke="currentColor" strokeWidth="3" opacity=".7">
          <circle cx="60" cy="470" r="9" /><circle cx="190" cy="840" r="9" /><circle cx="630" cy="800" r="9" />
        </g>
        <path d="M40 90 V40 H90" fill="none" stroke="currentColor" strokeWidth="4" opacity=".8" />
        <text x="380" y="852" {...mono}>{"sys.status = 'online' ●"}</text>
      </svg>

      {/* right edge */}
      <svg className={`${base} right-0`} viewBox="900 0 540 860" preserveAspectRatio="xMaxYMid meet" aria-hidden="true">
        <g {...trace}>
          <path d="M1440 120 H1330 L1300 150 H1230 L1200 180 V250" />
          <path d="M1440 200 H1340 L1310 230 V320 L1280 350 H1230" />
          <path d="M1440 300 H1390 L1370 320 V420" />
        </g>
        <g fill="currentColor" opacity=".7">
          <circle cx="1200" cy="250" r="7" /><circle cx="1230" cy="350" r="7" /><circle cx="1370" cy="420" r="7" />
        </g>
        <circle cx="1230" cy="150" r="9" fill="none" stroke="currentColor" strokeWidth="3" opacity=".7" />
        {/* chip */}
        <g opacity=".55">
          <rect x="1270" y="560" width="96" height="96" rx="10" fill="none" stroke="currentColor" strokeWidth="3" />
          <rect x="1294" y="584" width="48" height="48" rx="4" fill="currentColor" opacity=".5" />
          {[0, 1, 2, 3].map((i) => (
            <g key={i} stroke="currentColor" strokeWidth="3">
              <path d={`M${1286 + i * 21} 560 v-14`} /><path d={`M${1286 + i * 21} 656 v14`} />
              <path d={`M1270 ${576 + i * 21} h-14`} /><path d={`M1366 ${576 + i * 21} h14`} />
            </g>
          ))}
        </g>
        <path d="M1350 820 H1400 V770" fill="none" stroke="currentColor" strokeWidth="4" opacity=".8" />
        <g {...mono}>
          <text x="1140" y="58">01001010 01001111</text>
          <text x="1140" y="80">{"</> ping 10.0.0.1 — ok"}</text>
        </g>
      </svg>
    </>
  );
}
