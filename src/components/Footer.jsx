import { motion } from "framer-motion";
import { Terminal, GithubLogo, LinkedinLogo, EnvelopeSimple, ArrowUpRight } from "@phosphor-icons/react";

const Footer = () => {
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
        <span>04 — contact.sh</span>
        <span className="status-live font-mono text-[10px]">open to work</span>
      </div>

      <div className="p-6 sm:p-10 space-y-6 text-left">
        <div className="space-y-2">
          <div className="font-mono text-xs text-accent">$ initiate_conversation --hire</div>
          <h2 className="font-mono text-xl sm:text-2xl font-semibold text-text">
            Need a reliable frontend Engineer to provide scalable, maintainable, and accessible solutions?
          </h2>
          <p className="font-sans text-sm text-muted max-w-xl leading-relaxed">
            I build web applications with a focus on performance, scalability, and accessibility. I'm open to frontend Engineer roles or contract roles. Reach out directly.
          </p>
        </div>

        {/* Action Button & Email */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="mailto:adekemmanuel17@gmail.com"
            className="btn-terminal btn-terminal-primary"
          >
            <EnvelopeSimple size={15} weight="bold" />
            <span>adekemmanuel17@gmail.com</span>
          </a>

          <a
            href="https://www.linkedin.com/in/oluwatimilehin-adekunle-aa76a1271/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-terminal btn-terminal-ghost"
          >
            <LinkedinLogo size={15} weight="bold" />
            <span>LinkedIn Profile ↗</span>
          </a>

          <a
            href="https://github.com/timi-emmanuel"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-terminal btn-terminal-ghost"
          >
            <GithubLogo size={15} weight="bold" />
            <span>GitHub ↗</span>
          </a>
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
