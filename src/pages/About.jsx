import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import Portrait from "../images/josh-portrait.webp";
import { profile, stack } from "../data/profile";

export default function About() {
  return (
    <section className="container-x grid gap-12 pt-14 md:grid-cols-[1fr_1.3fr] md:pt-20">
      <div className="mx-auto w-full max-w-sm md:mx-0">
        <img src={Portrait} alt={profile.name} className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-xl" />
      </div>

      <div className="rise">
        <p className="eyebrow">About me</p>
        <h1 className="mt-3 text-4xl font-extrabold leading-tight sm:text-5xl">{profile.name}</h1>
        <p className="mt-2 text-lg font-medium text-muted">{profile.role}</p>

        <div className="mt-8 flex flex-col gap-5 text-lg leading-relaxed text-muted">
          <p>
            I earned a degree in Information Technology, and I love turning everyday business
            problems into simple, useful software.
          </p>
          <p>
            My latest work is for The Cup of Faith Coffee Shop: an inventory system that tracks
            stock across six branches, and a birthday club that signs up loyalty customers and
            sends their greetings automatically.
          </p>
          <p>
            I care about clean design, practical features and doing the work properly. I&apos;m always
            looking for the next thing to learn.
          </p>
        </div>

        <h2 className="mt-12 text-sm font-semibold uppercase tracking-wider">Tech stack</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {stack.map((s) => (
            <li key={s} className="chip text-sm">{s}</li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link to="/work" className="btn-dark">
            See my work <FiArrowRight />
          </Link>
          <Link to="/contact" className="btn-ghost">Contact me</Link>
        </div>
      </div>
    </section>
  );
}
