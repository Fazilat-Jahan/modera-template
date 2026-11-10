import * as Icons from "lucide-react";
import { services } from "./data";

export default function Services() {
  return (
    <section id="services" className="bg-navy py-20 text-white">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="text-center">
          <p className="tag justify-center">Our Services</p>
          <h2 className="h2 mx-auto max-w-xl">Quality construction solutions provided</h2>
        </div>
        <div className="mt-12 grid border-l border-t border-white/15 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = Icons[s.i];
            return (
              <article key={s.t} className="group relative flex min-h-[220px] flex-col justify-between overflow-hidden border-b border-r border-white/15 p-6">
                {s.photo && <img src={s.photo} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />}
                <span className="relative grid h-9 w-9 place-items-center bg-brand"><Icon size={18} /></span>
                <div className="relative">
                  <h3 className="text-sm font-bold uppercase">{s.t}</h3>
                  {s.photo && <p className="mt-2 text-xs text-white/80">{s.d}</p>}
                </div>
              </article>
            );
          })}
        </div>
        <p className="mt-10 text-center text-xs text-white/80">
          Discover top-tier construction services. <a href="#" className="font-semibold text-brand underline">View all services</a>
        </p>
      </div>
    </section>
  );
}
