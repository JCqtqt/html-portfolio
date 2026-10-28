import { FiArrowUpRight, FiCheck } from "react-icons/fi";
import { projects } from "../data/projects";
import PageBanner from "../components/PageBanner";

export default function Work() {
  return (
    <>
      <PageBanner
        eyebrow="// 02 · Work"
        title="Real tools, built for a real coffee shop."
        text="Live projects that The Cup of Faith team and their customers use day to day."
        code="$ ls ./projects  →  2 live"
      />

      <div className="container-x flex flex-col gap-24">
        {projects.map((p, i) => (
          <section key={p.slug} id={p.slug} className="scroll-mt-24">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
              <div className="lg:sticky lg:top-24 lg:self-start">
                <p className="eyebrow">
                  0{i + 1} · {p.client}
                </p>
                <h2 className="mt-3 text-3xl font-bold">{p.title}</h2>
                <p className="mt-4 leading-relaxed text-muted">{p.summary}</p>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li key={t} className="chip">{t}</li>
                  ))}
                </ul>

                <h3 className="mt-8 text-sm font-semibold uppercase tracking-wider text-ink">
                  What it does
                </h3>
                <ul className="mt-3 flex flex-col gap-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <FiCheck className="mt-0.5 shrink-0 text-ink" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a href={p.url} target="_blank" rel="noreferrer" className="btn-dark mt-8">
                  Visit live site <FiArrowUpRight />
                </a>
              </div>

              <div className="flex flex-col gap-6">
                {p.shots.map((s) => (
                  <figure key={s.alt} className="overflow-hidden rounded-2xl border border-line bg-card shadow-sm">
                    <div className="flex items-center gap-1.5 border-b border-line bg-paper px-4 py-2.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-line" />
                      <span className="h-2.5 w-2.5 rounded-full bg-line" />
                      <span className="h-2.5 w-2.5 rounded-full bg-line" />
                    </div>
                    <img src={s.src} alt={s.alt} loading="lazy" className="w-full" />
                    <figcaption className="border-t border-line px-4 py-3 text-xs text-muted">{s.alt}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
