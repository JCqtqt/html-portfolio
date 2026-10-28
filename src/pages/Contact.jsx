import { profile } from "../data/profile";
import Socials from "../components/Socials";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <section className="container-x grid gap-12 pt-14 md:pt-20 lg:grid-cols-[1fr_1.3fr]">
      <div className="rise">
        <p className="eyebrow">Contact</p>
        <h1 className="mt-3 text-4xl font-extrabold leading-tight sm:text-5xl">
          Let&apos;s build something useful.
        </h1>
        <p className="mt-5 text-lg text-muted">
          Have a project, a job opening or just a question? Send me a message here, or reach me on
          any of these.
        </p>
        <div className="mt-8 max-w-md">
          <Socials size={20} withLabels />
        </div>
      </div>

      {profile.email && <ContactForm />}
    </section>
  );
}
