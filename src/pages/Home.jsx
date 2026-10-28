import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import Portrait from "../images/josh-portrait.webp";
import { profile, stack } from "../data/profile";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="container-x grid items-center gap-12 pb-20 pt-14 md:grid-cols-[1.25fr_1fr] md:pt-24">
        <div className="rise">
          <p className="eyebrow flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500" /> Open to new projects
          </p>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl">
            Hi, I&apos;m {profile.short}. I build{" "}
            <span className="relative whitespace-nowrap">
              <span className="relative z-10">web apps</span>
              <span className="absolute inset-x-0 bottom-1 -z-0 h-3 bg-accent/60 sm:h-4" />
            </span>{" "}
            that real businesses use every day.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            I&apos;m {profile.name}, a web developer with a degree in Information Technology.
            Most recently I built the inventory system and birthday club for The Cup of Faith
            Coffee Shop.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/work" className="btn-dark">
              See my work <FiArrowRight />
            </Link>
            <Link to="/contact" className="btn-ghost">
              Get in touch
            </Link>
          </div>
        </div>

        <div className="rise relative mx-auto w-full max-w-sm [animation-delay:120ms]">
          <div className="absolute -inset-3 -z-10 rotate-3 rounded-[2rem] bg-accent/25" />
          <img
            src={Portrait}
            alt={profile.name}
            className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-xl"
          />
        </div>
      </section>

      {/* Selected work */}
      <section className="container-x">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Things I&apos;ve built</h2>
          </div>
          <Link to="/work" className="hidden items-center gap-1 text-sm font-semibold sm:inline-flex">
            All work <FiArrowRight />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      {/* Stack */}
      <section className="container-x mt-24">
        <div className="rounded-3xl bg-ink px-6 py-12 text-white sm:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">Toolbox</p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">What I work with</h2>
          <ul className="mt-8 flex flex-wrap gap-3">
            {stack.map((s) => (
              <li key={s} className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white/90">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x mt-24 text-center">
        <h2 className="mx-auto max-w-2xl text-3xl font-bold sm:text-4xl">
          Need a website or a tool for your business?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted">
          I&apos;d love to hear what you&apos;re working on.
        </p>
        <Link to="/contact" className="btn-dark mt-8">
          Let&apos;s talk <FiArrowRight />
        </Link>
      </section>
    </>
  );
}
