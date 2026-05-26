import { Link, NavLink } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Menu, ShoppingBag, User, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useStore } from "@/store/useStore";

const links = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { openCart, items } = useStore();
  const count = items.reduce((n, i) => n + i.qty, 0);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-xl bg-background/70 border-b border-border shadow-[0_1px_0_0_var(--glow)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-400 items-center justify-between px-6 py-4 md:px-10">
          <Link to="/" className="font-display text-2xl italic tracking-tight">
            IITIANCRAFT<span className="text-primary">.</span>
          </Link>

          <nav className="hidden items-center gap-10 md:flex">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `group relative font-mono text-xs uppercase tracking-[0.2em] transition-colors hover:text-foreground ${
                    isActive ? "text-primary" : "text-foreground/80"
                  }`
                }
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-primary transition-transform duration-500 group-hover:origin-left group-hover:scale-x-100" />
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button className="hidden h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-primary md:flex">
              <User className="h-4 w-4" />
            </button>
            <button
              onClick={openCart}
              className="relative flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-primary"
              aria-label="Cart"
            >
              <ShoppingBag className="h-4 w-4" />
              <AnimatePresence>
                {count > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 20 }}
                    className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 font-mono text-[10px] font-semibold text-primary-foreground"
                  >
                    {count}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
            <button
              onClick={() => setOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border md:hidden"
              aria-label="Menu"
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-60 bg-background md:hidden"
          >
            <div className="flex items-center justify-between p-6">
              <span className="font-display text-2xl italic">Nova<span className="text-primary">.</span></span>
              <button onClick={() => setOpen(false)} className="h-10 w-10 rounded-full border border-border flex items-center justify-center">
                <X className="h-4 w-4" />
              </button>
            </div>
            <nav className="flex flex-col gap-6 px-8 pt-12">
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="font-display text-5xl italic"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
