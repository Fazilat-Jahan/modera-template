"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { img } from "./data";

const items = [
  { q: "The team was reliable, professional, and attentive to every detail from start to finish. They kept us informed and delivered exactly as promised. Our new home looks beautiful and feels incredibly comfortable.", n: "Lexi A.", r: "Homeowner" },
  { q: "From planning to handover, communication was clear and the schedule never slipped. Our new office exceeded what we imagined.", n: "Daniel R.", r: "Business owner" },
];

export default function Testimonials() {
  const [i, setI] = useState(0);
  const t = items[i];
  const go = (d) => setI((i + d + items.length) % items.length);
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
      <div className="flex items-end justify-between">
        <div>
          <p className="tag">Testimonials</p>
          <h2 className="h2 max-w-sm">Excellence through client experience</h2>
        </div>
        <div className="flex gap-2">
          <button onClick={() => go(-1)} aria-label="Previous" className="grid h-8 w-8 place-items-center bg-soft hover:bg-brand hover:text-white"><ChevronLeft size={16} /></button>
          <button onClick={() => go(1)} aria-label="Next" className="grid h-8 w-8 place-items-center bg-navy text-white hover:bg-brand"><ChevronRight size={16} /></button>
        </div>
      </div>
      <div className="mt-10 grid overflow-hidden bg-soft md:grid-cols-[1.4fr_1fr]">
        <img src={img.testi} alt="Completed home with pool" className="h-64 w-full object-cover md:h-full" />
        <div className="relative p-8">
          <div className="flex text-brand">{[...Array(5)].map((_, k) => <Star key={k} size={12} fill="currentColor" />)}</div>
          <p className="mt-4 text-sm font-medium leading-relaxed">“ {t.q} ”</p>
          <div className="mt-6 flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-navy text-xs text-white">{t.n[0]}</span>
            <div><p className="text-xs font-bold">{t.n}</p><p className="text-[11px] text-navy/60">{t.r}</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}
