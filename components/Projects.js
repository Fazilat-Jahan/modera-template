import { ArrowUpRight } from "lucide-react";
import { projects } from "./data";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
      <div className="text-center">
        <p className="tag justify-center">Our Projects</p>
        <h2 className="h2 mx-auto max-w-md">Exceptional work, proven results</h2>
      </div>
      <div className="mt-14 space-y-8">
        {projects.map((p, i) => (
          <article key={p.t} className={`grid items-center gap-6 bg-soft md:grid-cols-2 ${i === 1 ? "md:[&>img]:order-first" : ""}`}>
            <div className="p-6 md:p-12">
              <h3 className="text-xl font-bold uppercase">{p.t}</h3>
              <p className="mt-3 max-w-xs text-xs leading-relaxed text-navy/70">{p.d}</p>
              <a href="#" className="btn mt-6">View project <ArrowUpRight size={14} /></a>
            </div>
            <img src={p.img} alt={p.t} className="h-64 w-full object-cover md:h-80" />
          </article>
        ))}
      </div>
    </section>
  );
}
