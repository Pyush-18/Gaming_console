import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const panels = [
  {
    n: "01",
    title: "Materials",
    body: "Italian wool, Japanese denim, Spanish leather — sourced from the few makers who still care.",
    img: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1200&q=80",
  },
  {
    n: "02",
    title: "Craft",
    body: "Each piece passes 14 sets of hands. We name our makers on the label.",
    img: "https://images.unsplash.com/photo-1558769132-92e06d4ed1f6?w=1200&q=80",
  },
  {
    n: "03",
    title: "Forever",
    body: "Built to be repaired, re-loved, and worn until the seams remember you.",
    img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=80",
  },
];

export default function StoryScroll() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} className="relative bg-surface/30 py-32 md:py-40 overflow-hidden">
      <motion.div style={{ y }} className="pointer-events-none absolute -right-32 -top-32 h-125 w-125 rounded-full bg-primary/5 blur-3xl" />

      <div className="mx-auto max-w-400 px-6 md:px-10">
        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-primary">— 04 / Manifesto</p>
        <h2 className="mb-24 max-w-4xl font-display text-5xl italic leading-[0.95] md:text-7xl">
          Slow fashion <em className="text-primary">for fast</em> minds.
        </h2>

        <div className="space-y-32">
          {panels.map((p, i) => (
            <div key={p.n} className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-20 ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <motion.div
                initial={{ opacity: 0, x: i % 2 ? 60 : -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-4/5 overflow-hidden rounded-3xl border border-border"
              >
                <img src={p.img} alt={p.title} className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-linear-to-t from-background/40 to-transparent" />
                <span className="absolute left-6 top-6 font-mono text-xs text-foreground/80">{p.n} / 03</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              >
                <h3 className="mb-6 font-display text-6xl italic md:text-8xl">{p.title}.</h3>
                <p className="max-w-md text-lg text-muted-foreground">{p.body}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
