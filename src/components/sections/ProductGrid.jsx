import { motion } from "motion/react";
import { Heart, Plus } from "lucide-react";
import { PRODUCTS, useStore } from "@/store/useStore";

export default function ProductGrid() {
  const { addItem, toggleWish, wishlist } = useStore();

  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-400 px-6 md:px-10">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-primary">— 02 / Trending</p>
            <h2 className="font-display text-5xl italic leading-[0.95] md:text-7xl">
              Loved <em className="text-primary">this</em> week.
            </h2>
          </div>
          <a href="#" className="group inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] hover:text-primary">
            View all
            <span className="h-px w-12 bg-foreground transition-all group-hover:w-20 group-hover:bg-primary" />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.slice(0, 8).map((p, i) => {
            const wished = wishlist.includes(p.id);
            return (
              <motion.article
                key={p.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: (i % 4) * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-2xl border border-border bg-surface aspect-3/4">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-background/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                  {p.badge && (
                    <motion.span
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 400, damping: 18, delay: 0.4 }}
                      className={`absolute left-4 top-4 rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-widest ${
                        p.badge === "SALE"
                          ? "bg-foreground text-background"
                          : p.badge === "HOT"
                          ? "bg-gold text-background"
                          : "bg-primary text-primary-foreground"
                      }`}
                    >
                      {p.badge}
                    </motion.span>
                  )}

                  <motion.button
                    onClick={() => toggleWish(p.id)}
                    whileTap={{ scale: 1.4 }}
                    className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/40 backdrop-blur transition-colors hover:border-primary"
                  >
                    <Heart className={`h-4 w-4 transition-all ${wished ? "fill-primary text-primary" : ""}`} />
                  </motion.button>

                  <button
                    onClick={() => addItem(p)}
                    className="absolute inset-x-4 bottom-4 flex translate-y-[120%] items-center justify-between rounded-full bg-primary px-5 py-3 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-transform duration-500 ease-out group-hover:translate-y-0"
                  >
                    Quick add
                    <Plus className="h-4 w-4" />
                  </button>
                </div>

                <div className="mt-4 flex items-start justify-between gap-2">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{p.category}</p>
                    <h3 className="mt-1 font-display text-xl italic">{p.name}</h3>
                  </div>
                  <div className="text-right">
                    <p className="font-mono text-sm text-primary">${p.price}</p>
                    {p.originalPrice && (
                      <p className="font-mono text-[10px] text-muted-foreground line-through">${p.originalPrice}</p>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
