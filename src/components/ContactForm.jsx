import { useState } from "react";
import { FiSend, FiCheckCircle } from "react-icons/fi";
import { profile } from "../data/profile";

// Sends messages to your inbox through FormSubmit (free, no account needed).
// The very first message triggers an activation email from FormSubmit —
// click the link in it once, and every message after that arrives normally.
const ENDPOINT = `https://formsubmit.co/ajax/${profile.email}`;

const field =
  "w-full rounded-xl border border-line bg-paper px-4 py-3 text-ink placeholder:text-muted/70 outline-none transition focus:border-ink/40 focus:ring-4 focus:ring-accent/25";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (e.target._honey.value) return; // spam bot filled the hidden field
    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...form,
          _subject: `Portfolio message from ${form.name}`,
          _replyto: form.email,
          _template: "table",
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || data.success === "false" || data.success === false) throw new Error();
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center self-start rounded-3xl border border-line bg-card p-10 text-center">
        <FiCheckCircle size={36} className="text-emerald-500" />
        <h2 className="mt-4 text-2xl font-bold">Message sent!</h2>
        <p className="mt-2 text-muted">Thanks for reaching out. I&apos;ll get back to you soon.</p>
        <button onClick={() => setStatus("idle")} className="btn-ghost mt-6">
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-5 self-start rounded-3xl border border-line bg-card p-6 sm:p-8">
      <h2 className="text-2xl font-bold">Send me a message</h2>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-medium">
          Name
          <input name="name" required value={form.name} onChange={update} placeholder="Juan Dela Cruz" className={field} autoComplete="name" />
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium">
          Email
          <input name="email" type="email" required value={form.email} onChange={update} placeholder="you@email.com" className={field} autoComplete="email" />
        </label>
      </div>

      <label className="flex flex-col gap-2 text-sm font-medium">
        Message
        <textarea name="message" required rows={6} value={form.message} onChange={update} placeholder="Tell me about your project or opening…" className={`${field} resize-y`} />
      </label>

      {/* Hidden from people; bots that fill it get ignored. */}
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" />

      {status === "error" && (
        <p className="rounded-xl bg-red-500/10 px-4 py-3 text-sm text-red-600 dark:text-red-400">
          Sorry, the message couldn&apos;t be sent. Please email me directly at{" "}
          <a href={`mailto:${profile.email}`} className="font-semibold underline">{profile.email}</a>.
        </p>
      )}

      <button type="submit" disabled={status === "sending"} className="btn-dark justify-center self-start disabled:opacity-60">
        {status === "sending" ? "Sending…" : (<>Send message <FiSend /></>)}
      </button>
    </form>
  );
}
