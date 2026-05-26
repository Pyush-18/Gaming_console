import { AnimatePresence, motion } from "motion/react";
import { Minus, Plus, ShoppingBag, X } from "lucide-react";
import { useStore } from "@/store/useStore";

export default function CartDrawer() {
  const { cartOpen, closeCart, items, removeItem, setQty } = useStore();
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <AnimatePresence>
      {cartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 z-70 bg-background/70 backdrop-blur-sm"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed right-0 top-0 z-71 flex h-full w-full max-w-md flex-col border-l border-border bg-surface"
          >
            <div className="flex items-center justify-between border-b border-border p-6">
              <div className="flex items-center gap-3">
                <ShoppingBag className="h-4 w-4 text-primary" />
                <span className="font-mono text-xs uppercase tracking-[0.2em]">Your Bag</span>
                <span className="font-mono text-xs text-muted-foreground">({items.length})</span>
              </div>
              <button onClick={closeCart} className="h-9 w-9 rounded-full border border-border flex items-center justify-center hover:border-primary transition-colors">
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
                  <div className="font-display text-3xl italic text-muted-foreground">Empty.</div>
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Add something special</p>
                </div>
              ) : (
                <ul className="space-y-4">
                  <AnimatePresence initial={false}>
                    {items.map((i) => (
                      <motion.li
                        key={i.id}
                        layout
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="flex gap-4 rounded-2xl border border-border bg-background/40 p-3"
                      >
                        <img src={i.image} alt={i.name} className="h-24 w-24 rounded-xl object-cover" />
                        <div className="flex flex-1 flex-col">
                          <div className="flex items-start justify-between">
                            <div>
                              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{i.category}</p>
                              <p className="font-display text-lg italic">{i.name}</p>
                            </div>
                            <button onClick={() => removeItem(i.id)} className="text-muted-foreground hover:text-primary">
                              <X className="h-4 w-4" />
                            </button>
                          </div>
                          <div className="mt-auto flex items-center justify-between">
                            <div className="flex items-center gap-2 rounded-full border border-border">
                              <button onClick={() => setQty(i.id, i.qty - 1)} className="p-1.5 hover:text-primary"><Minus className="h-3 w-3" /></button>
                              <span className="w-6 text-center font-mono text-xs">{i.qty}</span>
                              <button onClick={() => setQty(i.id, i.qty + 1)} className="p-1.5 hover:text-primary"><Plus className="h-3 w-3" /></button>
                            </div>
                            <span className="font-mono text-sm text-primary">${i.price * i.qty}</span>
                          </div>
                        </div>
                      </motion.li>
                    ))}
                  </AnimatePresence>
                </ul>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-border p-6">
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Subtotal</span>
                  <motion.span key={total} initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="font-display text-2xl italic">${total}</motion.span>
                </div>
                <button className="w-full rounded-full bg-primary py-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-transform hover:scale-[1.02]">
                  Checkout →
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
