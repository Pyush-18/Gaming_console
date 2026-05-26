const items = ["Premium Materials", "Free Worldwide Shipping", "Lifetime Repair", "Handcrafted Daily", "Carbon Neutral", "Studio Editions"];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="relative border-y border-border bg-background/40 py-6 overflow-hidden">
      <div className="marquee flex whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="mx-8 inline-flex items-center gap-8 font-display text-3xl italic text-foreground/90 md:text-5xl">
            {t}
            <span className="text-primary">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
