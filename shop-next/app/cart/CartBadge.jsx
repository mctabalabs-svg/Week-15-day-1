"use client";
import { useCart } from "@/app/cart/CartContext";

export default function CartBadge() {
  const { state } = useCart();
  const count = state.items.reduce((sum, item) => sum + item.quantity, 0);
  return <span>Cart ({count})</span>;
}
