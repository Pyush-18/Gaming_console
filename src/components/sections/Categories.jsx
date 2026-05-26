import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const cats = [
  { name: "Outerwear", count: 24, img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=1200&q=80", span: "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto" },
  { name: "Footwear", count: 18, img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&q=80", span: "aspect-square" },
  { name: "Accessories", count: 36, img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900&q=80", span: "aspect-square" },
  { name: "Eyewear", count: 12, img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=900&q=80", span: "aspect-square" },
  { name: "Studio Series", count: 8, img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=900&q=80", span: "aspect-square" },
];

export default function Categories() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-400 px-6 md:px-10">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-primary">— 01 / Categories</p>
            <h2 className="font-display text-5xl italic leading-[0.95] md:text-7xl">Shop the world.</h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            Six curated collections spanning everyday objects and rare editions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:grid-rows-2">
          {cats.map((c, i) => (
            <motion.a
              href="#"
              key={c.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.08, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className={`group relative overflow-hidden rounded-3xl border border-border bg-surface ${c.span}`}
            >
              <motion.img
                src={c.img}
                alt={c.name}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent" />
              <div className="relative flex h-full flex-col justify-between p-6 md:p-8">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{c.count} pieces</span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/40 backdrop-blur transition-all duration-500 group-hover:rotate-45 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
                <div className="overflow-hidden">
                  <h3 className="font-display text-3xl italic md:text-5xl transition-transform duration-700 group-hover:translate-y-0">
                    {c.name}
                  </h3>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
