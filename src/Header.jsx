import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "./images/josh-logo-bw.png";
import ThemeToggle from "./components/ThemeToggle";

const nav = [
  { to: "/", label: "Home", end: true },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);

  const linkClass = ({ isActive }) =>
    `rounded-full px-4 py-2 text-sm font-medium transition ${
      isActive ? "bg-ink text-paper" : "text-muted hover:text-ink"
    }`;

  return (
    <header className="sticky top-0 z-30 border-b border-line/70 bg-paper/80 backdrop-blur-md">
      <div className="container-x flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3" aria-label="Home">
          <img src={Logo} alt="Josh." className="h-10 w-10 rounded-[9px] dark:ring-1 dark:ring-line" />
          <span className="hidden font-display text-sm font-bold sm:inline">Josh Famularcano</span>
        </Link>

        <div className="flex items-center gap-2">
        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <NavLink key={n.to} to={n.to} end={n.end} className={linkClass}>
              {n.label}
            </NavLink>
          ))}
        </nav>
        <ThemeToggle />

        <button
          onClick={() => setOpen(!open)}
          className="rounded-full p-2 text-ink md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
        </div>
      </div>

      {open && (
        <nav className="container-x flex flex-col gap-1 pb-4 md:hidden">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.end}
              className={({ isActive }) =>
                `rounded-xl px-4 py-3 text-base font-medium ${
                  isActive ? "bg-ink text-paper" : "text-ink hover:bg-card"
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
