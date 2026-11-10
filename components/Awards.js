import { Trophy } from "lucide-react";
import { awards } from "./data";

export default function Awards() {
  return (
    <section className="bg-navy py-20 text-white">
      <div className="mx-auto max-w-7xl px-5 text-center md:px-8">
        <p className="tag justify-center">Our Awards</p>
        <h2 className="h2 mx-auto max-w-md">Awards that reflect our commitment</h2>
      </div>
      <div className="mt-12 flex gap-4 overflow-x-auto px-5 pb-2 md:justify-center md:px-8">
        {awards.map(([y, t], i) => (
          <div key={t} className={`flex min-w-[240px] items-center gap-3 border border-white/20 p-3 ${i === 4 ? "bg-brand" : ""}`}>
            <span className="grid h-9 w-9 place-items-center bg-brand"><Trophy size={16} /></span>
            <div><p className="text-[10px] text-white/70">{y}</p><p className="text-xs font-bold uppercase">{t}</p></div>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-10 max-w-md px-5 text-center">
        <p className="text-xs text-white/80">These recognitions reflect our ongoing commitment to quality, innovation, and excellence in every project we deliver.</p>
        <a href="#" className="btn mt-6">Our news</a>
      </div>
    </section>
  );
}
