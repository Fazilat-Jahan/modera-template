const u = (id, w = 1200) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const img = {
  hero: u("photo-1541888946425-d81bb19240f5", 1800),
  team: u("photo-1504307651254-35680f356dfd", 900),
  tower: u("photo-1486406146926-c627a92ad1ab", 700),
  p1: u("photo-1600585154340-be6161a56a0c"),
  p2: u("photo-1545324418-cc1a3fa10c00"),
  p3: u("photo-1511818966892-d7d671e672a2"),
  why: u("photo-1503387762-592deb58ef4e", 1800),
  testi: u("photo-1564013799919-ab600027ffc6"),
  b1: u("photo-1487958449943-2429e8be8625", 600),
  b2: u("photo-1503387837-b154d5074bd2", 600),
  b3: u("photo-1581094794329-c8112a89af12", 600),
  cta: u("photo-1590644365607-1c5a519a7a37", 1800),
  s2: u("photo-1503387762-592deb58ef4e", 600),
  s3: u("photo-1517581177682-a085bb7ffb15", 600),
};

export const services = [
  { t: "General Contracting", d: "End-to-end delivery of residential and commercial builds.", i: "HardHat" },
  { t: "Project Management", d: "Coordinating projects to ensure on-time, on-budget, high-quality results.", i: "ClipboardList", photo: img.s2 },
  { t: "Renovation Works", d: "Modernizing existing spaces with minimal disruption.", i: "Hammer" },
  { t: "Commercial Construction", d: "Offices, retail and industrial spaces built to last.", i: "Building2" },
  { t: "Consulting Services", d: "Planning, feasibility and cost optimization for your project.", i: "Gem", photo: img.s3 },
  { t: "Building Architecture", d: "Functional, modern designs tailored to your site.", i: "Ruler" },
];

export const projects = [
  { t: "Emerald Hills Residence", d: "A modern luxury residence designed with clean living spaces, smart lighting, and elegant finishes for comfort and sophistication.", img: img.p1 },
  { t: "Skyline Business Tower", d: "A modern multi-story office tower designed with energy-efficient systems, open floor plans, and practical workspace layouts.", img: img.p2 },
  { t: "Greenfield Office Building", d: "A modern office building designed with clean lines, efficient layouts, and practical workspaces for growing businesses.", img: img.p3 },
];

export const awards = [
  ["2025", "Safety Leadership Award"], ["2025", "Best Building Project"], ["2024", "Outstanding Contractor"],
  ["2024", "Client Choice Award"], ["2024", "Design Innovation Award"], ["2023", "Quality Achievement Award"],
];

export const posts = [
  ["Buildings", "April 15, 2026", "Smart Design Tips for Commercial Spaces", img.b1],
  ["Planning", "April 9, 2026", "Essential Steps for Successful Projects", img.b2],
  ["Innovation", "April 2, 2026", "Construction Trends Shaping the Future", img.b3],
];
