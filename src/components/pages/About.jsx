import StoryScroll from "@/components/sections/StoryScroll";
import { motion } from "motion/react";



export function About() {
  return (
    <div className="pt-32">
      <div className="mx-auto max-w-400 px-6 md:px-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-primary">— Studio</p>
          <h1 className="max-w-4xl font-display text-6xl italic leading-[0.95] md:text-8xl">
            A small studio with <em className="text-primary">large</em> opinions.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            Nova was started in 2022 by a group of architects, photographers, and pattern-makers obsessed with making fewer, better things. We are based between Tokyo, Lisbon and Mexico City.
          </p>
        </motion.div>
      </div>
      <StoryScroll />
    </div>
  );
}
