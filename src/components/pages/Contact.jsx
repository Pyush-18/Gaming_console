import { motion } from "motion/react";
import { Mail, MapPin, Phone } from "lucide-react";


export function Contact() {
  return (
    <div className="pt-32 pb-32">
      <div className="mx-auto max-w-400 px-6 md:px-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-primary">— Contact</p>
          <h1 className="font-display text-6xl italic md:text-8xl">Say hello.</h1>
        </motion.div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <form className="space-y-5 rounded-3xl border border-border bg-surface/60 p-8 backdrop-blur">
            {["Name", "Email", "Subject"].map((l) => (
              <div key={l}>
                <label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{l}</label>
                <input className="w-full rounded-xl border border-border bg-background px-4 py-3 focus:border-primary focus:outline-none" />
              </div>
            ))}
            <div>
              <label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Message</label>
              <textarea rows={5} className="w-full rounded-xl border border-border bg-background px-4 py-3 focus:border-primary focus:outline-none" />
            </div>
            <button className="w-full rounded-full bg-primary py-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground hover:scale-[1.02] transition-transform">
              Send message →
            </button>
          </form>

          <div className="space-y-6">
            {[
              { Icon: MapPin, label: "Studio", value: "Calle Colima 312, Roma Nte, CDMX" },
              { Icon: Mail, label: "Email", value: "studio@nova.shop" },
              { Icon: Phone, label: "Phone", value: "+52 55 1234 5678" },
            ].map(({ Icon, label, value }) => (
              <div key={label} className="flex items-start gap-4 rounded-2xl border border-border bg-surface/40 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{label}</p>
                  <p className="mt-1 font-display text-xl italic">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
