import ProductGrid from "@/components/sections/ProductGrid";
import { motion } from "motion/react";



export function Shop() {
  return (
    <div className="pt-32">
      <div className="mx-auto max-w-400 px-6 md:px-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-primary">— Catalogue</p>
          <h1 className="font-display text-6xl italic md:text-8xl">All objects.</h1>
        </motion.div>
      </div>
      <ProductGrid />
    </div>
  );
}
