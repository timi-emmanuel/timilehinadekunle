// scripts/check-contrast.mjs
const hex = (h) => { const n = parseInt(h.replace("#", ""), 16); return [(n >> 16) & 255, (n >> 8) & 255, n & 255]; };
const lin = (c) => { c /= 255; return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4; };
const lum = ([r, g, b]) => 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
const blend = (fg, bg, a) => fg.map((v, i) => Math.round(v * a + bg[i] * (1 - a)));
const ratio = (a, b) => { const [hi, lo] = [lum(a), lum(b)].sort((x, y) => y - x); return (hi + 0.05) / (lo + 0.05); };

// Distinct text styles across the portfolio with their actual background and opacity
const pairs = [
  { name: "text-primary (on page bg)", fg: "#E5E8E3", bg: "#0A0D0B", opacity: 1 },
  { name: "text-primary (on panel)", fg: "#E5E8E3", bg: "#121613", opacity: 1 },
  { name: "text-primary (on panel-2)", fg: "#E5E8E3", bg: "#161B17", opacity: 1 },
  { name: "accent (on page bg)", fg: "#F2B84B", bg: "#0A0D0B", opacity: 1 },
  { name: "accent (on panel)", fg: "#F2B84B", bg: "#121613", opacity: 1 },
  { name: "accent (on panel-2)", fg: "#F2B84B", bg: "#161B17", opacity: 1 },
  { name: "live green (on page bg)", fg: "#4ADE80", bg: "#0A0D0B", opacity: 1 },
  { name: "text-muted (on page bg)", fg: "#A3B0A7", bg: "#0A0D0B", opacity: 1 },
  { name: "text-muted (on panel)", fg: "#A3B0A7", bg: "#121613", opacity: 1 },
  { name: "text-muted (on panel-2)", fg: "#A3B0A7", bg: "#161B17", opacity: 1 },
  { name: "text-muted-2 (on page bg)", fg: "#8FA095", bg: "#0A0D0B", opacity: 1 },
  { name: "text-muted-2 (on panel)", fg: "#8FA095", bg: "#121613", opacity: 1 },
  { name: "text-muted-2 (on panel-2)", fg: "#8FA095", bg: "#161B17", opacity: 1 },
  { name: "btn-terminal-primary text", fg: "#0A0D0B", bg: "#F2B84B", opacity: 1 },
];

let failed = false;
for (const p of pairs) {
  const bg = hex(p.bg);
  const fg = blend(hex(p.fg), bg, p.opacity ?? 1);
  const r = ratio(fg, bg);
  const pass = r >= 4.5;
  if (!pass) failed = true;
  console.log(`${r >= 7 ? "AAA " : r >= 4.5 ? "AA  " : "FAIL"} ${r.toFixed(2)}:1  ${p.name}`);
}

if (failed) {
  process.exit(1);
}
