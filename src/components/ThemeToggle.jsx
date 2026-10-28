import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains("dark"));

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch (e) {
      /* storage unavailable — theme still switches for this visit */
    }
  };

  return (
    <button
      onClick={toggle}
      className="grid h-9 w-9 place-items-center rounded-full border border-line bg-card text-ink transition hover:border-ink/40"
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      title={dark ? "Light mode" : "Dark mode"}
    >
      {dark ? <FiSun size={17} /> : <FiMoon size={17} />}
    </button>
  );
}
