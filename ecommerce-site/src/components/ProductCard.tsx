"use client";

import React, { useState } from "react";

type Product = {
  id: number;
  name: string;
  category: string;
  size: string;
  colour: string;
  price: number;
  image: string;
};

export default function ProductCard({
  product,
  onAdd,
}: {
  product: Product;
  onAdd: () => void;
}) {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAdd();
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="card h-100 text-center shadow-sm">
      <div style={{ fontSize: "4rem", padding: "1rem" }}>{product.image}</div>
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="text-muted mb-1">
          {product.colour} • {product.size}
        </p>
        <p className="fw-bold">${product.price.toFixed(2)}</p>
        <button className="btn btn-outline-primary w-100" onClick={handleAdd} disabled={added}>
          {added ? "✔ Added!" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}