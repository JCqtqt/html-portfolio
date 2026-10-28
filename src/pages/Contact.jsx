import { FiMail } from "react-icons/fi";
import { profile } from "../data/profile";
import Socials from "../components/Socials";

export default function Contact() {
  return (
    <section className="container-x pt-14 md:pt-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="eyebrow">Contact</p>
        <h1 className="mt-3 text-4xl font-extrabold leading-tight sm:text-5xl">
          Let&apos;s build something useful.
        </h1>
        <p className="mt-5 text-lg text-muted">
          Have a project, a job opening or just a question? Reach out. I&apos;ll get back to you as
          soon as I can.
        </p>
        {profile.email && (
          <a href={`mailto:${profile.email}`} className="btn-dark mt-8">
            <FiMail /> Email me
          </a>
        )}
      </div>

      <div className="mx-auto mt-12 max-w-md">
        <Socials size={20} withLabels />
      </div>
    </section>
  );
}
