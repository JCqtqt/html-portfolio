import { Link } from "react-router-dom";
import { profile } from "../data/profile";
import Socials from "./Socials";
import Logo from "../images/josh-logo-bw.png";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line">
      <div className="container-x flex flex-col items-start justify-between gap-6 py-10 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <img src={Logo} alt="" className="h-10 w-10 rounded-[9px] dark:ring-1 dark:ring-line" />
          <div>
            <p className="font-display font-bold">{profile.name}</p>
            <p className="text-sm text-muted">
              © {new Date().getFullYear()} · {profile.role}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-6">
          <Link to="/contact" className="text-sm font-medium text-ink underline decoration-accent decoration-2 underline-offset-4">
            Let&apos;s work together
          </Link>
          <Socials />
        </div>
      </div>
    </footer>
  );
}
