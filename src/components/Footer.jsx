import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GithubLogo,
  LinkedinLogo,
  EnvelopeSimple,
  CopySimple,
  Check,
} from "@phosphor-icons/react";

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("adekemmanuel17@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4 }}
      className="pane"
      id="contact"
    >
      {/* Pane Header */}
      <div className="pane-label">
        <span>06 — contact.sh</span>
        <span className="status-live font-mono text-[10px]">open to work</span>
      </div>

      <div className="p-4 sm:p-8 lg:p-10 space-y-6 text-left">
        <div className="space-y-2">
          <div className="font-mono text-xs text-accent">$ initiate_conversation --hire</div>
          <h2 className="font-mono text-xl sm:text-2xl font-semibold text-text">
            Need a reliable frontend Engineer to provide scalable, maintainable, and accessible solutions?
          </h2>
          <p className="font-sans text-sm text-muted max-w-xl leading-relaxed">
            I build web applications with a focus on performance, scalability, and accessibility. I'm open to frontend Engineer roles or contract roles. Reach out directly.
          </p>
        </div>

        {/* Action Button & Email Row with Micro-Interactions */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-2">
          <motion.a
            href="mailto:adekemmanuel17@gmail.com"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-terminal btn-terminal-primary max-w-full truncate"
          >
            <EnvelopeSimple size={15} weight="bold" className="shrink-0" />
            <span className="truncate">adekemmanuel17@gmail.com</span>
          </motion.a>

          {/* Quick Copy Action with Terminal Feedback */}
          <motion.button
            type="button"
            onClick={handleCopy}
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-terminal btn-terminal-ghost"
            title="Copy email address to clipboard"
          >
            <AnimatePresence mode="wait">
              {copied ? (
                <motion.div
                  key="copied"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.15 }}
                  className="flex items-center gap-1.5 text-live"
                >
                  <Check size={15} weight="bold" />
                  <span>[200 OK: COPIED]</span>
                </motion.div>
              ) : (
                <motion.div
                  key="copy"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="flex items-center gap-1.5"
                >
                  <CopySimple size={15} weight="bold" />
                  <span>copy email</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          <motion.a
            href="https://www.linkedin.com/in/oluwatimilehin-adekunle-aa76a1271/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-terminal btn-terminal-ghost"
          >
            <LinkedinLogo size={15} weight="bold" />
            <span>LinkedIn Profile ↗</span>
          </motion.a>

          <motion.a
            href="https://github.com/timi-emmanuel"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-terminal btn-terminal-ghost"
          >
            <GithubLogo size={15} weight="bold" />
            <span>GitHub ↗</span>
          </motion.a>
        </div>

        {/* Footer Meta Row */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-xs text-muted-2">
          <span>© 2026 timilehin.dev — built with intent, not templates</span>
          <span className="text-muted">Lagos, Nigeria • UTC+1</span>
        </div>
      </div>
    </motion.section>
  );
};

export default Footer;
