import { img } from "./data";

const cols = [
  ["About us", "Services", "Projects", "Articles", "Contact"],
  ["Styleguide", "Licenses", "Instruction", "404", "Webflow"],
];

export default function CtaFooter() {
  return (
    <>
      <section id="contact" className="relative overflow-hidden py-24 text-center text-white">
        <img src={img.cta} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-navyDark/85" />
        <div className="relative mx-auto max-w-md px-5">
          <h2 className="h2">Start building with confidence</h2>
          <p className="mt-3 text-xs text-white/80">Turn your ideas into well-crafted spaces with a partner you can trust at every stage.</p>
          <a href="mailto:info@modera.com" className="btn mt-6">Get started</a>
        </div>
      </section>

      <footer className="relative overflow-hidden bg-navyDark text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-24 pt-14 md:grid-cols-[1.3fr_1fr_1fr_1.2fr] md:px-8">
          <div>
            <p className="flex items-center gap-2 text-lg font-bold"><span className="grid h-7 w-6 place-items-center bg-brand text-xs">M</span> MODERA</p>
            <p className="mt-5 text-xs font-semibold">Subscribe to our Newsletter</p>
            <form className="mt-2 flex max-w-xs">
              <input type="email" placeholder="Your email address" aria-label="Email address" className="w-full bg-white px-3 py-2 text-xs text-navy outline-none focus-visible:ring-2 focus-visible:ring-brand" />
              <button type="button" className="bg-brand px-3 text-[10px] font-semibold uppercase">Subscribe</button>
            </form>
          </div>
          {cols.map((c, k) => (
            <ul key={k} className="space-y-2 text-xs text-white/80">
              {c.map((l) => <li key={l}><a href="#" className="hover:text-brand">{l}</a></li>)}
            </ul>
          ))}
          <div className="text-sm">
            <p className="font-semibold">INFO@MODERA.COM</p>
            <p className="mt-1">+1 123 456 7899</p>
            <div className="mt-4 flex gap-2 text-[10px]">
              {["f", "◎", "in", "X"].map((s) => <span key={s} className="grid h-6 w-6 place-items-center border border-white/30">{s}</span>)}
            </div>
          </div>
        </div>
        <p className="pb-4 text-center text-[11px] text-white/60">© 2026 Modera. All rights reserved.</p>
        <p aria-hidden className="pointer-events-none select-none text-center text-[22vw] font-bold uppercase leading-[0.7] text-white/10">Modera</p>
      </footer>
    </>
  );
}
