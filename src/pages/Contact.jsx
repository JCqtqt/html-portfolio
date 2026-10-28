import { profile } from "../data/profile";
import Socials from "../components/Socials";
import ContactForm from "../components/ContactForm";
import PageBanner from "../components/PageBanner";

export default function Contact() {
  return (
    <>
      <PageBanner
        eyebrow="// 04 · Contact"
        title="Let's build something useful."
        text="Have a project, a job opening or just a question? Send me a message here, or reach me on any of these."
        code="$ ping josh  →  reply < 24h"
      />
      <section className="container-x grid gap-12 lg:grid-cols-[1fr_1.3fr]">
        <div className="rise">
          <p className="eyebrow">Find me on</p>
          <div className="mt-5 max-w-md">
            <Socials size={20} withLabels />
          </div>
        </div>

        {profile.email && <ContactForm />}
      </section>
    </>
  );
}
