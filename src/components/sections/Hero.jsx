import { lazy, Suspense } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

const HeroCanvas = lazy(() => import("@/components/three/HeroCanvas"));

const headline = ["Beyond", "the", "ordinary."];

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden pt-24">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0">
        <Suspense fallback={<div className="h-full w-full" />}>
          <HeroCanvas />
        </Suspense>
      </div>

      {/* radial mask vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,var(--color-background)_85%)]" />

      <div className="relative mx-auto flex min-h-[calc(100vh-6rem)] max-w-400 flex-col justify-between px-6 py-12 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
        >
          <span className="h-px w-10 bg-primary" />
          <span>Drop 04 — Spring 2026</span>
        </motion.div>

        <div className="flex flex-col gap-10">
          <h1 className="font-display text-[clamp(64px,12vw,180px)] font-medium italic leading-[0.92] tracking-[-0.04em] text-balance">
            {headline.map((w, i) => (
              <motion.span
                key={i}
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 + i * 0.12, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="mr-4 inline-block"
              >
                {w === "ordinary." ? <em className="text-primary not-italic">{w}</em> : w}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="max-w-xl text-base text-muted-foreground md:text-lg"
          >
            A cinematic shopping experience built around objects worth obsessing over.
            Crafted in small batches. Worn by the few who notice everything.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-wrap items-center gap-4"
          >
            <MagneticButton className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground shadow-glow">
              Explore Drop
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </MagneticButton>
            <MagneticButton className="inline-flex items-center gap-3 rounded-full border border-border px-7 py-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-foreground hover:border-primary">
              Watch Film
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="mt-12 flex items-center justify-between"
        >
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Scroll
          </div>
          <div className="hidden gap-12 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground md:flex">
            <div><span className="block text-2xl font-display italic text-foreground">128</span>Pieces</div>
            <div><span className="block text-2xl font-display italic text-foreground">42</span>Countries</div>
            <div><span className="block text-2xl font-display italic text-foreground">9.8</span>Rating</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
