import { ArrowRight } from "lucide-react";
import { posts } from "./data";

export default function Blog() {
  return (
    <section id="blog" className="mx-auto max-w-4xl px-5 py-20 md:px-8">
      <div className="space-y-8">
        {posts.map(([cat, date, title, src]) => (
          <article key={title} className="grid items-center gap-6 sm:grid-cols-[1fr_180px]">
            <div>
              <p className="flex items-center gap-3 text-[10px]">
                <span className="bg-brand px-2 py-1 font-semibold text-white">{cat}</span>
                <span className="text-navy/60">{date}</span>
              </p>
              <h3 className="mt-3 max-w-xs text-lg font-bold uppercase leading-snug">{title}</h3>
              <a href="#" aria-label={`Read ${title}`} className="mt-4 grid h-8 w-8 place-items-center bg-soft hover:bg-brand hover:text-white"><ArrowRight size={14} /></a>
            </div>
            <img src={src} alt="" className="h-28 w-full object-cover" />
          </article>
        ))}
      </div>
    </section>
  );
}
