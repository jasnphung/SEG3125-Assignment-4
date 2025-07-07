"use client";

import React from "react";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">🛒 Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <>
          <ul className="list-group mb-3">
            {cart.map((item) => (
              <li
                key={item.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div className="d-flex align-items-center gap-3">
                  <span style={{ fontSize: "2rem" }}>{item.image}</span>
                  <div>
                    <div>{item.name}</div>
                    <div className="d-flex align-items-center mt-1">
                      <label className="me-2 mb-0">Qty:</label>
                      <input
                        type="number"
                        value={item.quantity}
                        min={1}
                        className="form-control form-control-sm"
                        style={{ width: "60px" }}
                        onChange={(e) =>
                          updateQuantity(item.id, Number(e.target.value))
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="text-end">
                  <div>${(item.price * item.quantity).toFixed(2)}</div>
                  <button
                    className="btn btn-sm btn-danger mt-2"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <h4>Total: ${total.toFixed(2)}</h4>
          <Link href="/checkout" className="btn btn-success mt-3">
            Checkout
          </Link>
        </>
      )}
    </div>
  );
}