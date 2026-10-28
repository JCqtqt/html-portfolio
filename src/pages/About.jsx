import { Link } from "react-router-dom";
import { FiArrowRight, FiAward, FiBookOpen } from "react-icons/fi";
import Portrait from "../components/Portrait";
import { profile } from "../data/profile";
import { experience, skills, certifications, education, softSkills } from "../data/resume";
import Socials from "../components/Socials";

function Block({ title, children }) {
  return (
    <div className="grid gap-6 border-t border-line py-12 lg:grid-cols-[220px_1fr]">
      <h2 className="text-sm font-semibold uppercase tracking-wider">{title}</h2>
      <div>{children}</div>
    </div>
  );
}

export default function About() {
  return (
    <>
      <section className="container-x grid gap-12 pb-16 pt-14 md:grid-cols-[1fr_1.3fr] md:pt-20">
        <div className="mx-auto w-full max-w-sm md:mx-0">
          <Portrait className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-xl" />
        </div>

        <div className="rise">
          <p className="eyebrow">About me</p>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight sm:text-5xl">{profile.name}</h1>
          <p className="mt-2 text-lg font-medium text-muted">{profile.role}</p>

          <div className="mt-8 flex flex-col gap-5 text-lg leading-relaxed text-muted">
            <p>
              I&apos;m an IT support specialist and web developer with a degree in Information
              Technology. At Cybersoft Content Services I kept users, networks and servers running:
              setting up accounts and devices, configuring switches, monitoring systems and fixing
              issues on-site and remotely.
            </p>
            <p>
              Before that I spent over six years at The Cup of Faith as a barista and cashier. I
              later built the shop&apos;s inventory system and birthday club, shaped by knowing how
              the team actually works day to day.
            </p>
          </div>

          <div className="mt-8">
            <Socials />
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#resume" onClick={(e) => { e.preventDefault(); document.getElementById("resume")?.scrollIntoView({ behavior: "smooth" }); }} className="btn-dark">
              View resume <FiArrowRight />
            </a>
            <Link to="/work" className="btn-ghost">See my work</Link>
          </div>
        </div>
      </section>

      <section id="resume" className="container-x scroll-mt-20">
        <div className="pb-4">
          <p className="eyebrow">Resume</p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Experience &amp; skills</h2>
        </div>

        <Block title="Experience">
          <ol className="flex flex-col gap-10">
            {experience.map((job) => (
              <li key={job.company} className="relative border-l-2 border-line pl-6">
                <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-ink ring-4 ring-paper" />
                <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                  <h3 className="text-xl font-bold">{job.role}</h3>
                  <p className="text-sm font-medium text-muted">{job.dates}</p>
                </div>
                <p className="mt-1 font-medium text-ink/80">
                  {job.company} · {job.place}
                </p>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {job.points.map((pt) => (
                    <li key={pt} className="flex gap-3 leading-relaxed text-muted">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Block>

        <Block title="Technical skills">
          <div className="grid gap-6 sm:grid-cols-2">
            {skills.map((s) => (
              <div key={s.group}>
                <h3 className="text-sm font-semibold text-ink">{s.group}</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {s.items.map((i) => (
                    <li key={i} className="chip">{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Block>

        <Block title="Certification & education">
          <div className="grid gap-4 md:grid-cols-2">
            {certifications.map((c) => (
              <div key={c.name} className="rounded-2xl border border-line bg-card p-6">
                <FiAward size={22} className="text-ink" />
                <h3 className="mt-4 font-bold">{c.name}</h3>
                <p className="mt-1 text-sm text-muted">{c.date}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {c.topics.map((t) => (
                    <li key={t} className="chip">{t}</li>
                  ))}
                </ul>
              </div>
            ))}
            {education.map((e) => (
              <div key={e.degree} className="rounded-2xl border border-line bg-card p-6">
                <FiBookOpen size={22} className="text-ink" />
                <h3 className="mt-4 font-bold">{e.degree}</h3>
                <p className="mt-1 text-sm text-muted">{e.school}</p>
                <p className="mt-1 text-sm text-muted">{e.dates}</p>
              </div>
            ))}
          </div>
        </Block>

        <Block title="Soft skills">
          <ul className="flex flex-wrap gap-2">
            {softSkills.map((s) => (
              <li key={s} className="chip text-sm">{s}</li>
            ))}
          </ul>
        </Block>

        <div className="mt-4 flex flex-col items-start justify-between gap-4 rounded-3xl bg-band px-6 py-8 text-white sm:flex-row sm:items-center sm:px-10">
          <p className="font-display text-xl font-bold">Want the full resume or to work together?</p>
          <Link to="/contact" className="btn bg-white text-[#0E1320] hover:bg-accent">
            Contact me <FiArrowRight />
          </Link>
        </div>
      </section>
    </>
  );
}
