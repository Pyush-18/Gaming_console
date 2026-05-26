import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";

const reviews = [
  { name: "Aria Chen", role: "Architect, Tokyo", text: "The most considered objects I've owned in a decade. The Aurum lives on my desk like a small monument.", avatar: "https://i.pravatar.cc/100?img=47" },
  { name: "Mateo Reyes", role: "Director, Mexico City", text: "Nova doesn't sell clothes, it sells confidence. Every detail is felt before it's seen.", avatar: "https://i.pravatar.cc/100?img=68" },
  { name: "Sasha Kim", role: "Curator, Berlin", text: "I waited six months for the Vector Jacket. It was worth every day. Cinema-grade craftsmanship.", avatar: "https://i.pravatar.cc/100?img=32" },
  { name: "Iris Laurent", role: "Photographer, Paris", text: "There is a quietness to these pieces — they enter the room with you, not before you.", avatar: "https://i.pravatar.cc/100?img=45" },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative mx-auto max-w-400">
        <div className="mb-12 px-6 md:px-10">
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-primary">— 05 / Voices</p>
          <h2 className="font-display text-5xl italic leading-[0.95] md:text-7xl">
            From people who <em className="text-primary">know</em>.
          </h2>
        </div>

        <motion.div
          drag="x"
          dragConstraints={{ left: -1400, right: 0 }}
          className="flex cursor-grab gap-6 px-6 md:px-10 active:cursor-grabbing"
        >
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex w-[90vw] shrink-0 flex-col gap-6 rounded-3xl border border-border bg-surface/60 p-8 backdrop-blur-xl md:w-112.5"
            >
              <Quote className="absolute right-6 top-6 h-12 w-12 text-primary/20" />
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="h-3.5 w-3.5 fill-primary text-primary" />
                ))}
              </div>
              <p className="font-display text-2xl italic leading-snug">"{r.text}"</p>
              <div className="mt-auto flex items-center gap-3 border-t border-border pt-4">
                <img src={r.avatar} alt={r.name} className="h-10 w-10 rounded-full object-cover" />
                <div>
                  <p className="text-sm">{r.name}</p>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{r.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
