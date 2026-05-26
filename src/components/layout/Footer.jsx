import { motion } from "motion/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-background pt-24 pb-10">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="relative mx-auto max-w-400 px-6 md:px-10">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <h2 className="font-display text-5xl italic md:text-7xl">
              Made for<br />
              <span className="text-primary">the bold.</span>
            </h2>
            <p className="mt-6 max-w-md text-muted-foreground">
              A new kind of commerce — where craft, code and cinema meet. Nova is a vision for what shopping should feel like in 2026.
            </p>
          </div>
          {[
            { title: "Shop", links: ["New", "Bestsellers", "Sale", "Gift cards"] },
            { title: "Company", links: ["About", "Journal", "Careers", "Press"] },
          ].map((col) => (
            <div key={col.title}>
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">{col.title}</p>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-foreground/80 hover:text-primary transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-6 border-t border-border pt-8 md:flex-row md:items-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            © 2026 Nova Studio — All rights reserved
          </span>
          <div className="flex items-center gap-3">
            {[FaInstagram, FaTwitter, FaYoutube].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ y: -3 }}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border hover:border-primary hover:shadow-glow transition-all"
              >
                <Icon className="h-4 w-4" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
