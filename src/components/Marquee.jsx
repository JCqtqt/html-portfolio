// An endless, auto-scrolling row of pills. Pauses on hover; shows a plain
// wrapped list for visitors who turn off animations in their device settings.
export default function Marquee({ items, reverse = false, speed = 4 }) {
  // Repeat short lists so one copy is always wider than the screen (no gaps).
  let row = items;
  while (row.length < 14) row = row.concat(items);
  const duration = `${Math.max(row.length * speed, 20)}s`;
  const pill = "shrink-0 whitespace-nowrap rounded-full border border-accent/50 bg-accent/10 px-4 py-2 text-sm font-semibold text-accent transition hover:bg-accent hover:text-[#0A0A0A]";

  return (
    <div className="marquee-mask group overflow-hidden">
      <ul
        className={`marquee-track flex w-max gap-3 ${reverse ? "marquee-reverse" : ""}`}
        style={{ animationDuration: duration }}
      >
        {row.map((s, i) => (
          <li key={i} className={i < items.length ? pill : `${pill} marquee-dup`} aria-hidden={i >= items.length || undefined}>
            {s}
          </li>
        ))}
        {row.map((s, i) => (
          <li key={`dup-${i}`} className={`${pill} marquee-dup`} aria-hidden="true">{s}</li>
        ))}
      </ul>
    </div>
  );
}
