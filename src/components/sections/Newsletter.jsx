import { motion } from "motion/react";
import { Check, Send } from "lucide-react";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-400 px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[2.5rem] bg-primary px-8 py-20 text-primary-foreground md:px-20 md:py-32"
        >
          <div className="absolute inset-0 opacity-30 mix-blend-overlay">
            <div className="absolute -left-32 -top-32 h-100 w-100 rounded-full bg-foreground/20 blur-3xl" />
            <div className="absolute -right-32 -bottom-32 h-125 w-125 rounded-full bg-background/40 blur-3xl" />
          </div>

          <div className="relative">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] opacity-70">— 06 / Inner Circle</p>
            <h2 className="max-w-3xl font-display text-5xl italic leading-[0.9] md:text-8xl">
              First access. Always.
            </h2>
            <p className="mt-6 max-w-xl text-base md:text-lg opacity-80">
              Join 28,000 members who see drops 48 hours early, get studio invites, and never pay shipping.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email) setDone(true);
              }}
              className="mt-10 flex max-w-xl flex-col gap-3 sm:flex-row"
            >
              <div className="relative flex-1">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@studio.com"
                  className="peer w-full rounded-full border-2 border-primary-foreground/20 bg-transparent px-6 py-5 font-mono text-sm placeholder:text-primary-foreground/50 focus:border-primary-foreground focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-background px-8 py-5 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-foreground transition-transform hover:scale-105"
              >
                {done ? (
                  <>
                    <Check className="h-4 w-4 text-primary" /> You're in
                  </>
                ) : (
                  <>
                    Subscribe <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
