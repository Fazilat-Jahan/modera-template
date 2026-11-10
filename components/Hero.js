import { img } from "./data";
import { Star } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[640px] items-end overflow-hidden text-white md:min-h-[720px]">
      <img src={img.hero} alt="Excavator at a construction site" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-navyDark/90 via-navyDark/40 to-navyDark/30" />
      <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-5 pb-14 pt-40 md:grid-cols-[1.3fr_1fr] md:px-8">
        <div>
          <h1 className="max-w-xl text-4xl font-bold uppercase leading-[1.05] md:text-6xl">
            Building strong foundations for modern living
          </h1>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-6 md:max-w-xl">
            <p className="max-w-xs text-sm text-white/80">
              We build functional, aesthetic spaces for offices, retail, and businesses.
            </p>
          </div>
          <div className="mt-6 flex items-center gap-6">
            <a href="#contact" className="btn">Get in touch</a>
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold">4.9</span>
              <div>
                <div className="flex text-brand">{[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}</div>
                <p className="text-[11px] text-white/80">850+ happy clients</p>
              </div>
            </div>
          </div>
        </div>
        <div className="self-end justify-self-start md:justify-self-end">
          <div className="w-60 bg-brand p-5">
            <p className="text-5xl font-bold">35+</p>
            <p className="mt-3 text-xs font-semibold uppercase">Years of experience</p>
            <p className="mt-1 text-[11px] text-white/90">Delivering quality construction with proven industry expertise.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
