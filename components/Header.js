"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = ["Home", "Services", "Projects", "Blog", "Pages"];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute inset-x-0 top-0 z-30 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#" className="flex items-center gap-2 text-lg font-bold">
          <span className="grid h-7 w-6 place-items-center bg-brand text-xs">M</span> MODERA
        </a>
        <nav className="hidden items-center gap-8 text-xs font-medium uppercase md:flex">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-brand">{l}</a>
          ))}
        </nav>
        <a href="#contact" className="btn hidden md:inline-flex">Get Template</a>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-4 bg-navyDark px-5 py-5 text-sm uppercase md:hidden">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}>{l}</a>
          ))}
        </nav>
      )}
    </header>
  );
}
