import { lazy, Suspense, useState } from "react";
import { motion } from "motion/react";
import { Star, Truck, RotateCcw, Shield } from "lucide-react";
import { useStore } from "@/store/useStore";
import MagneticButton from "../ui/MagneticButton";

const ProductViewer3D = lazy(() => import("@/components/three/ProductViewer3D"));

const colors = [
  { name: "Lime", hex: "#c8ff00" },
  { name: "Gold", hex: "#e8c87a" },
  { name: "Pearl", hex: "#f2f2f2" },
];
const sizes = ["XS", "S", "M", "L", "XL"];

export default function ProductSpotlight() {
  const [color, setColor] = useState(colors[0]);
  const [size, setSize] = useState("M");
  const addItem = useStore((s) => s.addItem);

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-400 px-6 md:px-10">
        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-primary">— 03 / Featured Object</p>
        <h2 className="mb-16 font-display text-5xl italic leading-[0.95] md:text-7xl">
          The <em className="text-primary">Aurum</em>.
        </h2>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-square overflow-hidden rounded-3xl border border-border bg-linear-to-br from-surface to-background"
          >
            <Suspense fallback={<div className="h-full w-full shimmer" />}>
              <ProductViewer3D color={color.hex} />
            </Suspense>
            <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-2 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Drag to rotate</span>
            </div>
            <div className="absolute right-6 bottom-6 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              View in 3D
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Limited Edition · Studio Series</p>
            <h3 className="font-display text-5xl italic md:text-6xl">Aurum Pendant</h3>

            <div className="flex items-center gap-3">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <span className="font-mono text-xs text-muted-foreground">4.9 · 218 reviews</span>
            </div>

            <div className="flex items-baseline gap-3">
              <span className="font-display text-4xl italic text-primary">$1,290</span>
              <span className="font-mono text-sm text-muted-foreground line-through">$1,580</span>
            </div>

            <p className="max-w-md text-muted-foreground">
              Hand-finished octahedron in solid brass with vapor-deposited finishes. Each piece is engraved with its own number, made to outlast trends.
            </p>

            <div>
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Finish — {color.name}</p>
              <div className="flex gap-3">
                {colors.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setColor(c)}
                    className={`h-10 w-10 rounded-full border-2 transition-all ${
                      color.name === c.name ? "border-primary scale-110" : "border-border"
                    }`}
                    style={{ background: c.hex }}
                    aria-label={c.name}
                  />
                ))}
              </div>
            </div>

            <div>
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Size — {size}</p>
              <div className="flex flex-wrap gap-2">
                {sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`min-w-12 rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-widest transition-all ${
                      size === s ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-foreground"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <MagneticButton
              onClick={() =>
                addItem({
                  id: "aurum",
                  name: "Aurum Pendant",
                  category: "Jewelry",
                  price: 1290,
                  originalPrice: 1580,
                  image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80",
                })
              }
              className="mt-2 w-full rounded-full bg-primary py-5 font-mono text-xs font-semibold uppercase tracking-[0.3em] text-primary-foreground shadow-glow md:w-auto md:px-12"
            >
              Add to bag — ${1290}
            </MagneticButton>

            <div className="mt-4 grid grid-cols-3 gap-4 border-t border-border pt-6">
              {[
                { Icon: Truck, label: "Free shipping" },
                { Icon: RotateCcw, label: "30-day returns" },
                { Icon: Shield, label: "Lifetime repair" },
              ].map(({ Icon, label }) => (
                <div key={label} className="flex flex-col items-start gap-2">
                  <Icon className="h-5 w-5 text-primary" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
