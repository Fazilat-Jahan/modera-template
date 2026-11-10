import { img } from "./data";
import { Building, Clock } from "lucide-react";

const logos = ["Estate", "Homes", "Real Estate", "Realty", "Roofing"];

export default function About() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
      <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
        <p className="tag h-fit">About Modera</p>
        <div>
          <h2 className="text-3xl font-bold uppercase leading-tight md:text-4xl">
            We build innovative spaces <span className="text-navy/30">that combine durability, design, and long-term value.</span>
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[[Building, "Quality construction", "Built with premium materials and expert craftsmanship, ensuring durability, safety, and long-lasting reliable performance."],
              [Clock, "On-time delivery", "We complete every project on schedule while maintaining the highest standards of quality, efficiency, and precision."]].map(([Icon, t, d]) => (
              <div key={t}>
                <p className="flex items-center gap-2 text-xs font-bold uppercase"><Icon size={16} className="text-brand" /> {t}</p>
                <p className="mt-2 text-xs leading-relaxed text-navy/70">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-4 md:grid-rows-2">
        <img src={img.team} alt="Construction team shaking hands" className="h-80 w-full object-cover md:col-span-2 md:row-span-2 md:h-full" />
        <div className="bg-navy p-6 text-white"><p className="text-4xl font-bold">130+</p><p className="mt-6 text-xs uppercase">Projects completed successfully</p></div>
        <div className="bg-soft p-6"><p className="text-4xl font-bold">99%</p><p className="mt-6 text-xs uppercase">Satisfied clients worldwide</p></div>
        <div className="bg-brand p-6 text-white"><p className="text-xs font-semibold uppercase">Expert engineers on projects</p><p className="mt-6 text-4xl font-bold">120+</p></div>
        <img src={img.tower} alt="Modern building" className="h-48 w-full object-cover md:h-full" />
      </div>

      <div className="mt-14 text-center">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-brand">Empowering <span className="text-navy">industry leaders</span></p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-10 text-navy/80">
          {logos.map((l) => <span key={l} className="text-sm font-bold uppercase tracking-wider">{l}</span>)}
        </div>
      </div>
    </section>
  );
}
