import { Users, Lightbulb, Truck } from "lucide-react";
import { img } from "./data";

const items = [
  [Users, "Experienced team", "Skilled professionals delivering high-quality work with precision and reliable construction expertise across every project."],
  [Lightbulb, "Innovative solutions", "Applying modern techniques and creative solutions to deliver efficient, sustainable, and high-performing construction results."],
  [Truck, "Reliable delivery", "Completing projects on time through efficient planning, communication, and well-managed construction processes."],
];

export default function Why() {
  return (
    <section className="relative overflow-hidden py-20 text-white">
      <img src={img.why} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-navy/85" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="tag">Why choose us</p>
            <h2 className="h2 max-w-md">Building trust through quality and experience</h2>
          </div>
          <a href="#contact" className="btn">Get a quote</a>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {items.map(([Icon, t, d]) => (
            <div key={t} className="bg-white p-6 text-navy">
              <span className="grid h-9 w-9 place-items-center bg-brand text-white"><Icon size={18} /></span>
              <h3 className="mt-14 text-sm font-bold uppercase">{t}</h3>
              <p className="mt-2 text-xs leading-relaxed text-navy/70">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
