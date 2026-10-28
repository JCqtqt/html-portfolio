import Light from "../images/josh-portrait-light.webp";
import Dark from "../images/josh-portrait-dark.webp";
import { profile } from "../data/profile";

// Shows the casual photo in light mode and the formal portrait in dark mode.
export default function Portrait({ className = "" }) {
  return (
    <>
      <img src={Light} alt={profile.name} className={`${className} dark:hidden`} />
      <img src={Dark} alt={profile.name} className={`${className} hidden object-top dark:block`} />
    </>
  );
}
