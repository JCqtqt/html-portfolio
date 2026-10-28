import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

export default function ProjectCard({ project }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-line bg-card transition hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(14,19,32,0.25)]">
      <Link to={`/work#${project.slug}`} className="block overflow-hidden bg-[#1B2A6B]">
        <img
          src={project.cover}
          alt={`${project.title} preview`}
          loading="lazy"
          className="aspect-video w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <p className="eyebrow">{project.client}</p>
        <h3 className="text-xl font-bold">{project.title}</h3>
        <p className="text-sm leading-relaxed text-muted">{project.summary}</p>
        <div className="mt-auto flex items-center gap-4 pt-3">
          <Link to={`/work#${project.slug}`} className="text-sm font-semibold underline decoration-accent decoration-2 underline-offset-4">
            Details
          </Link>
          <a href={project.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm font-semibold text-muted hover:text-ink">
            Live site <FiArrowUpRight />
          </a>
        </div>
      </div>
    </article>
  );
}
