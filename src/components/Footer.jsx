import { Link } from "react-router-dom";
import { profile } from "../data/profile";
import Socials from "./Socials";
import Logo from "../images/josh-logo-yellow.png";

export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-[#0A0A0A] text-white">
      {/* yellow circuit strip along the top edge */}
      <div className="h-1.5 bg-accent" />
      <svg className="pointer-events-none absolute right-0 top-1.5 hidden h-24 w-[420px] text-accent md:block" viewBox="0 0 420 96" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity=".5">
          <path d="M420 30 H330 L300 60 H220" /><path d="M420 70 H370 L350 90" />
        </g>
        <circle cx="220" cy="60" r="5" fill="currentColor" opacity=".8" />
        <circle cx="330" cy="30" r="7" fill="none" stroke="currentColor" strokeWidth="2.5" opacity=".8" />
      </svg>

      <div className="container-x relative flex flex-col items-start justify-between gap-6 py-10 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <img src={Logo} alt="" className="h-10 w-10 rounded-[9px]" />
          <div>
            <p className="font-display font-bold">{profile.name}</p>
            <p className="font-mono text-xs text-white/50">
              © {new Date().getFullYear()} · {profile.role} · <span className="text-accent">● online</span>
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-6">
          <Link to="/contact" className="text-sm font-semibold text-accent underline decoration-2 underline-offset-4 hover:text-white">
            Let&apos;s work together
          </Link>
          <Socials />
        </div>
      </div>
    </footer>
  );
}
