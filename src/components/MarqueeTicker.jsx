import {
  Lightning,
  ShieldCheck,
  RocketLaunch,
  Cpu,
  GraduationCap,
  Sparkle,
  TerminalWindow,
  CurrencyCircleDollar
} from "@phosphor-icons/react";

const tickerItems = [
  { icon: Lightning, text: "SPORTSBOOK BACK OFFICE (SBE)", bg: "bg-neo-yellow", color: "text-black" },
  { icon: ShieldCheck, text: "SUPABASE (POSTGRESQL, RLS, AUTH)", bg: "bg-neo-lime", color: "text-black" },
  { icon: RocketLaunch, text: "100K+ PREMATCH EVENTS SERVED", bg: "bg-neo-pink", color: "text-white" },
  { icon: Cpu, text: "REACT • NEXT.JS • VUE 3 • TYPESCRIPT", bg: "bg-neo-blue", color: "text-black" },
  { icon: CurrencyCircleDollar, text: "FINTECH ESCROW & ORDERING SAAS", bg: "bg-neo-yellow", color: "text-black" },
  { icon: GraduationCap, text: "B.ENG MECH ENG (4.65/5.00 GPA)", bg: "bg-neo-lime", color: "text-black" },
  { icon: TerminalWindow, text: "SWAGGER REST APIS & CASHIER ARCHITECTURE", bg: "bg-neo-purple", color: "text-black" },
  { icon: Sparkle, text: "PRODUCTION-READY CODE", bg: "bg-neo-pink", color: "text-white" },
];

const MarqueeTicker = () => {
  return (
    <div className="w-full bg-neo-yellow border-y-2 border-black overflow-hidden py-2.5 sm:py-3 shadow-neo dark:shadow-neo-dark-white relative select-none marquee-container">
      <div className="flex w-max animate-marquee marquee-content">
        {/* Double the list for infinite seamless loop */}
        {[...tickerItems, ...tickerItems].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="flex items-center gap-2 mx-3 sm:mx-5 font-mono text-xs sm:text-sm font-black tracking-wider text-black uppercase"
            >
              <span className={`p-1 border border-black ${item.bg} ${item.color} shadow-neo-sm inline-flex items-center justify-center`}>
                <Icon size={16} weight="bold" />
              </span>
              <span className="whitespace-nowrap">{item.text}</span>
              <span className="text-black font-black ml-3">/</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MarqueeTicker;
