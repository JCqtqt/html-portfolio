import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import Portrait from "../components/Portrait";
import { profile, stack } from "../data/profile";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import Marquee from "../components/Marquee";
import HeroCircuit from "../components/HeroCircuit";
import { skills } from "../data/resume";

const itSkills = [...new Set(skills.flatMap((g) => g.items))];

// The big hero name, typed out letter by letter with a blinking cursor.
// Every letter is laid out from the start (just invisible), so nothing jumps.
const NAME_LINES = ["Joshua Carlo", "Famularcano"];
const TOTAL = NAME_LINES.join("").length;

function TypedName() {
  const reduce =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [count, setCount] = useState(reduce ? TOTAL : 0);

  useEffect(() => {
    if (count >= TOTAL) return;
    const t = setTimeout(() => setCount((c) => c + 1), count === 0 ? 450 : 85);
    return () => clearTimeout(t);
  }, [count]);

  const cursor = (
    <span className="relative inline-block w-0 align-baseline" aria-hidden="true">
      <span className="type-cursor absolute bottom-[0.06em] left-[0.04em] h-[0.78em] w-[0.09em] rounded-full bg-[#0A0A0A] dark:bg-white" />
    </span>
  );

  let index = 0;
  return (
    <h1
      aria-label={profile.name}
      className="rise mt-6 font-display font-extrabold uppercase leading-[0.9] tracking-tight text-[#0A0A0A] dark:text-accent"
      style={{ fontSize: "clamp(2.75rem, 8.6vw, 7.75rem)" }}
    >
      {NAME_LINES.map((line, li) => (
        <span key={line} className="block whitespace-nowrap" aria-hidden="true">
          {li === 0 && count === 0 && cursor}
          {line.split("").map((ch) => {
            const i = index++;
            return (
              <span key={i}>
                <span className={i < count ? "" : "opacity-0"}>{ch}</span>
                {i === count - 1 && cursor}
              </span>
            );
          })}
        </span>
      ))}
    </h1>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero — yellow spotlight (black in dark mode) */}
      <section className="relative mb-24 overflow-hidden bg-accent text-[#0A0A0A] dark:border-b dark:border-line dark:bg-[#0A0A0A] dark:text-white">
        <HeroCircuit />
        <div className="container-x relative pb-20 pt-12 md:pt-16">
          <p className="rise flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#0A0A0A]/70 dark:text-white/60">
            <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-600 dark:bg-emerald-400" /> {profile.role} · Open to new projects
          </p>

          <TypedName />

          <div className="mt-12 grid items-center gap-10 md:grid-cols-[1.4fr_1fr]">
            <div className="rise [animation-delay:120ms]">
              <p className="max-w-xl text-xl leading-relaxed text-[#0A0A0A]/75 dark:text-white/70">
                I build <span className="font-semibold text-[#0A0A0A] dark:text-white">web apps that real businesses use every day</span>,
                and keep the networks and systems behind them running. Most recently: the inventory system and
                birthday club for The Cup of Faith Coffee Shop.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/work" className="btn-dark">
                  See my work <FiArrowRight />
                </Link>
                <Link
                  to="/contact"
                  className="btn border-2 border-[#0A0A0A] text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-accent dark:border-white/30 dark:text-white dark:hover:border-accent dark:hover:bg-transparent dark:hover:text-accent"
                >
                  Get in touch
                </Link>
              </div>
            </div>
            <div className="rise relative mx-auto w-full max-w-xs [animation-delay:200ms] md:ml-auto md:mr-0">
              <div className="absolute -inset-3 -z-0 rotate-3 rounded-[2rem] bg-[#0A0A0A] dark:border-2 dark:border-accent dark:bg-transparent" />
              <div className="relative">
                <Portrait className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-xl" />
              </div>
            </div>
          </div>
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
        <div className="grid grid-cols-1 gap-6">
          <div className="rise min-w-0 overflow-hidden rounded-3xl bg-band py-12 text-white">
            <div className="px-6 sm:px-12">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">Toolbox</p>
              <h2 className="mt-2 text-3xl font-bold sm:text-4xl">What I work with</h2>
            </div>
            <div className="mt-8 px-2 sm:px-6">
              <Marquee items={stack} />
            </div>
          </div>

          <div className="rise min-w-0 overflow-hidden rounded-3xl bg-band py-12 text-white [animation-delay:120ms]">
            <div className="px-6 sm:px-12">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">IT &amp; networking</p>
              <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Technical skills</h2>
            </div>
            <div className="mt-8 flex flex-col gap-3 px-2 sm:px-6">
              <Marquee items={itSkills.slice(0, Math.ceil(itSkills.length / 2))} reverse />
              <Marquee items={itSkills.slice(Math.ceil(itSkills.length / 2))} />
            </div>
          </div>
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
