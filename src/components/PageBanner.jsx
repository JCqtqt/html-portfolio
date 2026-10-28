import CircuitCorner from "./CircuitCorner";

// Yellow banner at the top of each inner page (black with yellow text in dark mode).
export function Banner({ code, children, className = "" }) {
  return (
    <section className={`relative overflow-hidden bg-accent text-[#0A0A0A] dark:border-b dark:border-line dark:bg-[#0A0A0A] dark:text-white ${className}`}>
      <CircuitCorner at="tr" code={code} />
      <CircuitCorner at="bl" />
      <div className="container-x relative">{children}</div>
    </section>
  );
}

export const bannerEyebrow = "text-xs font-semibold uppercase tracking-[0.18em] text-[#0A0A0A]/70 dark:text-white/60";
export const bannerTitle = "font-display font-extrabold leading-[1.02] tracking-tight text-[#0A0A0A] dark:text-accent";
export const bannerText = "text-lg leading-relaxed text-[#0A0A0A]/75 dark:text-white/70";
export const bannerOutline =
  "btn border-2 border-[#0A0A0A] text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-accent dark:border-white/30 dark:text-white dark:hover:border-accent dark:hover:bg-transparent dark:hover:text-accent";

export default function PageBanner({ eyebrow, title, text, code }) {
  return (
    <Banner code={code} className="mb-16">
      <div className="max-w-3xl pb-16 pt-14 md:pb-20 md:pt-20">
        <p className={`rise ${bannerEyebrow}`}>{eyebrow}</p>
        <h1 className={`rise mt-4 text-4xl sm:text-5xl lg:text-6xl ${bannerTitle}`}>{title}</h1>
        {text && <p className={`rise mt-5 max-w-2xl ${bannerText}`}>{text}</p>}
      </div>
    </Banner>
  );
}
