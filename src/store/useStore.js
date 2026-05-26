import { create } from "zustand";



export const useStore = create((set) => ({
  cartOpen: false,
  items: [],
  wishlist: [],
  openCart: () => set({ cartOpen: true }),
  closeCart: () => set({ cartOpen: false }),
  addItem: (p) =>
    set((s) => {
      const existing = s.items.find((i) => i.id === p.id);
      if (existing)
        return {
          items: s.items.map((i) => (i.id === p.id ? { ...i, qty: i.qty + 1 } : i)),
          cartOpen: true,
        };
      return { items: [...s.items, { ...p, qty: 1 }], cartOpen: true };
    }),
  removeItem: (id) => set((s) => ({ items: s.items.filter((i) => i.id !== id) })),
  setQty: (id, qty) =>
    set((s) => ({
      items: s.items.map((i) => (i.id === id ? { ...i, qty: Math.max(1, qty) } : i)),
    })),
  toggleWish: (id) =>
    set((s) => ({
      wishlist: s.wishlist.includes(id)
        ? s.wishlist.filter((w) => w !== id)
        : [...s.wishlist, id],
    })),
}));

export const PRODUCTS = [
  { id: "p1", name: "Eclipse Hoodie", category: "Apparel", price: 240, originalPrice: 320, image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80", badge: "SALE" },
  { id: "p2", name: "Halo Sneaker", category: "Footwear", price: 480, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80", badge: "NEW" },
  { id: "p3", name: "Obsidian Watch", category: "Accessories", price: 1290, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80", badge: "HOT" },
  { id: "p4", name: "Vector Jacket", category: "Outerwear", price: 760, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80" },
  { id: "p5", name: "Prism Bag", category: "Accessories", price: 590, image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80", badge: "NEW" },
  { id: "p6", name: "Carbon Tee", category: "Apparel", price: 120, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80" },
  { id: "p7", name: "Aurora Glasses", category: "Eyewear", price: 340, image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80" },
  { id: "p8", name: "Mono Cap", category: "Accessories", price: 95, image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&q=80" },
];
