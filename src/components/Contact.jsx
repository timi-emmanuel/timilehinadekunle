import { useState } from "react";
import { motion } from "framer-motion";
import {
  PaperPlaneTilt,
  EnvelopeSimple,
  Phone,
  MapPin,
  Copy,
  Check,
  GithubLogo,
  LinkedinLogo,
  TwitterLogo,
  ChatCenteredDots,
  Sparkle,
  ArrowSquareOut
} from "@phosphor-icons/react";
import { fadeUpVariant as itemVariants, staggerContainerVariant as containerVariants } from "../utils/animations";

const suggestions = [
  "Sportsbook / Dashboard UI",
  "FinTech & Escrow Platform",
  "Next.js / React Web App",
  "Vue 3 Cashier / Real-Time System",
  "Supabase / PostgreSQL Architecture",
  "Contract / Full-Time Role",
];

const Contact = () => {
  const [subject, setSubject] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const email = "adekemmanuel17@gmail.com";
  const phone = "+2349038360630";
  const displayPhone = "+234 903 836 0630";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <section
      id="contact"
      className="relative text-black dark:text-white py-20 sm:py-28 px-4 sm:px-6 lg:px-12 xl:px-20 bg-neo-bgContact dark:bg-neo-darkBg neo-contact-dots transition-colors duration-200 border-t-2 border-black dark:border-zinc-800"
    >
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-12 text-left">
          <div className="flex items-center gap-2 mb-3">
            <span className="neo-badge bg-black text-white dark:bg-white dark:text-black">
              05 / INITIATE
            </span>
            <span className="neo-badge bg-neo-yellow text-black">
              <ChatCenteredDots size={14} weight="bold" />
              LET'S COLLABORATE
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight leading-none text-black dark:text-white">
            GET IN{" "}
            <span className="bg-neo-pink text-white px-2 border-2 border-black shadow-neo-sm inline-block rotate-[1deg]">
              TOUCH_
            </span>
          </h2>
          <p className="font-sans text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
            Have a project in mind, need a full-stack developer for your team, or want to discuss enterprise architecture? Drop me a message!
          </p>
        </div>

        {/* 2-Column Contact Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (5 cols): Direct Info Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="lg:col-span-5 flex flex-col gap-4 text-left transform-gpu"
          >
            {/* Email Card */}
            <div className="neo-box bg-white dark:bg-neo-darkCard p-5">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 bg-neo-yellow text-black border-2 border-black shadow-neo-sm">
                    <EnvelopeSimple size={16} weight="bold" />
                  </span>
                  <span className="font-mono text-xs font-bold text-zinc-500 uppercase">
                    Direct Email
                  </span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1 bg-zinc-100 dark:bg-neo-darkSurface hover:bg-neo-yellow hover:text-black border-2 border-black px-2 py-0.5 text-[11px] font-mono font-bold transition-all"
                  title="Copy email"
                >
                  {copiedEmail ? (
                    <>
                      <Check size={12} weight="bold" />
                      <span>COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy size={12} weight="bold" />
                      <span>COPY</span>
                    </>
                  )}
                </button>
              </div>
              <a
                href={`mailto:${email}`}
                className="font-mono font-bold text-sm sm:text-base text-black dark:text-white hover:underline block break-all"
              >
                {email}
              </a>
            </div>

            {/* Phone / WhatsApp Card */}
            <div className="neo-box bg-white dark:bg-neo-darkCard p-5">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 bg-neo-lime text-black border-2 border-black shadow-neo-sm">
                    <Phone size={16} weight="bold" />
                  </span>
                  <span className="font-mono text-xs font-bold text-zinc-500 uppercase">
                    Phone & WhatsApp
                  </span>
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="flex items-center gap-1 bg-zinc-100 dark:bg-neo-darkSurface hover:bg-neo-lime hover:text-black border-2 border-black px-2 py-0.5 text-[11px] font-mono font-bold transition-all"
                  title="Copy phone"
                >
                  {copiedPhone ? (
                    <>
                      <Check size={12} weight="bold" />
                      <span>COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy size={12} weight="bold" />
                      <span>COPY</span>
                    </>
                  )}
                </button>
              </div>
              <a
                href={`tel:${phone}`}
                className="font-mono font-bold text-sm sm:text-base text-black dark:text-white hover:underline block"
              >
                {displayPhone}
              </a>
            </div>

            {/* Location & Availability Card */}
            <div className="neo-box bg-white dark:bg-neo-darkCard p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="p-1.5 bg-neo-blue text-black border-2 border-black shadow-neo-sm">
                  <MapPin size={16} weight="bold" />
                </span>
                <span className="font-mono text-xs font-bold text-zinc-500 uppercase">
                  Location & Timezone
                </span>
              </div>
              <div className="font-display font-black text-base text-black dark:text-white">
                Lagos, Nigeria (WAT / UTC+1)
              </div>
              <p className="font-sans text-xs text-zinc-600 dark:text-zinc-400 mt-1">
                Available for local on-site discussions & international remote contracts.
              </p>
            </div>

            {/* Social Grid */}
            <div className="grid grid-cols-3 gap-3">
              <a
                href="https://github.com/timi-emmanuel"
                target="_blank"
                rel="noopener noreferrer"
                className="neo-box bg-white dark:bg-neo-darkCard p-3 flex flex-col items-center justify-center gap-1 hover:bg-neo-yellow hover:text-black dark:hover:bg-neo-yellow dark:hover:text-black transition-all"
              >
                <GithubLogo size={20} weight="bold" />
                <span className="font-mono text-[10px] font-bold">GITHUB</span>
              </a>

              <a
                href="https://www.linkedin.com/in/oluwatimilehin-adekunle-aa76a1271/"
                target="_blank"
                rel="noopener noreferrer"
                className="neo-box bg-white dark:bg-neo-darkCard p-3 flex flex-col items-center justify-center gap-1 hover:bg-neo-blue hover:text-black dark:hover:bg-neo-blue dark:hover:text-black transition-all"
              >
                <LinkedinLogo size={20} weight="bold" />
                <span className="font-mono text-[10px] font-bold">LINKEDIN</span>
              </a>

              <a
                href="https://x.com/TimiTech10"
                target="_blank"
                rel="noopener noreferrer"
                className="neo-box bg-white dark:bg-neo-darkCard p-3 flex flex-col items-center justify-center gap-1 hover:bg-neo-pink hover:text-white dark:hover:bg-neo-pink dark:hover:text-white transition-all"
              >
                <TwitterLogo size={20} weight="bold" />
                <span className="font-mono text-[10px] font-bold">TWITTER/X</span>
              </a>
            </div>

          </motion.div>

          {/* Right Column (7 cols): Interactive Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="lg:col-span-7 transform-gpu"
          >
            <form
              action="https://formsubmit.co/adekemmanuel17@gmail.com"
              method="POST"
              className="neo-box-lg bg-white dark:bg-neo-darkCard p-6 sm:p-8 space-y-4 text-left"
            >
              {/* FormSubmit Configuration */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value={`New Portfolio Message: ${subject || "General Inquiry"}`} />

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-mono text-xs font-bold text-zinc-600 dark:text-zinc-400 block mb-1 uppercase">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="e.g. Sarah Connor"
                    required
                    className="neo-input"
                  />
                </div>

                <div>
                  <label className="font-mono text-xs font-bold text-zinc-600 dark:text-zinc-400 block mb-1 uppercase">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="e.g. sarah@company.com"
                    required
                    className="neo-input"
                  />
                </div>
              </div>

              {/* Subject Field & Topic Selection Pills */}
              <div>
                <label className="font-mono text-xs font-bold text-zinc-600 dark:text-zinc-400 block mb-1 uppercase">
                  Project Topic / Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Select a suggestion below or type your subject"
                  required
                  className="neo-input mb-2"
                />

                {/* Suggestion Chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {suggestions.map((s, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSubject(s)}
                      className={`text-[11px] font-mono font-bold px-2.5 py-1 border border-black transition-all cursor-pointer ${
                        subject === s
                          ? "bg-neo-yellow text-black shadow-neo-sm"
                          : "bg-zinc-100 dark:bg-neo-darkSurface text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                      }`}
                    >
                      + {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message Area */}
              <div>
                <label className="font-mono text-xs font-bold text-zinc-600 dark:text-zinc-400 block mb-1 uppercase">
                  Message Details *
                </label>
                <textarea
                  name="message"
                  placeholder="Tell me about your project scope, timeline, and requirements..."
                  rows="4"
                  required
                  className="neo-input resize-none"
                ></textarea>
              </div>

              {/* Submit Action */}
              <button
                type="submit"
                className="neo-btn-primary w-full text-base py-3 mt-2 cursor-pointer shadow-neo hover:shadow-neo-md"
              >
                <PaperPlaneTilt size={18} weight="bold" />
                <span>SEND MESSAGE DIRECTLY</span>
              </button>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;

