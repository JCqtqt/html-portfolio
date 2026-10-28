import { FiGithub, FiLinkedin, FiFacebook, FiInstagram, FiMail } from "react-icons/fi";
import { profile } from "../data/profile";

const icons = { github: FiGithub, linkedin: FiLinkedin, facebook: FiFacebook, instagram: FiInstagram };
const labels = { github: "GitHub", linkedin: "LinkedIn", facebook: "Facebook", instagram: "Instagram" };

export default function Socials({ size = 18, withLabels = false }) {
  const items = Object.entries(profile.links).filter(([, url]) => url);
  if (profile.email) items.unshift(["email", `mailto:${profile.email}`]);

  return (
    <ul className={withLabels ? "flex flex-col gap-3" : "flex items-center gap-2"}>
      {items.map(([key, url]) => {
        const Icon = key === "email" ? FiMail : icons[key];
        const label = key === "email" ? profile.email : labels[key];
        return (
          <li key={key}>
            <a
              href={url}
              target={key === "email" ? undefined : "_blank"}
              rel="noreferrer"
              aria-label={label}
              className={
                withLabels
                  ? "flex items-center gap-3 rounded-2xl border border-line bg-card px-5 py-4 font-medium transition hover:border-ink/40"
                  : "grid h-9 w-9 place-items-center rounded-full border border-line bg-card text-muted transition hover:border-ink/40 hover:text-ink"
              }
            >
              <Icon size={size} />
              {withLabels && <span>{label}</span>}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
