"use client";

import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/ProductCard";

type Product = {
  id: number;
  name: string;
  category: string;
  size: string;
  colour: string;
  price: number;
  image: string;
};

const PRODUCTS: Product[] = [
  { id: 1, name: "T-Shirt", category: "Tops", size: "M", colour: "Black", price: 25, image: "👕" },
  { id: 2, name: "Jeans", category: "Bottoms", size: "L", colour: "Blue", price: 50, image: "👖" },
  { id: 3, name: "Jacket", category: "Tops", size: "M", colour: "Red", price: 40, image: "🧥" },
  { id: 4, name: "Shorts", category: "Bottoms", size: "S", colour: "Beige", price: 30, image: "🩳" },
  { id: 5, name: "Cap", category: "Accessories", size: "M", colour: "Blue", price: 15, image: "🧢" },
  { id: 6, name: "Dress", category: "Dresses", size: "S", colour: "Red", price: 60, image: "👗" },
  { id: 7, name: "Heels", category: "Shoes", size: "7", colour: "Red", price: 80, image: "👠" },
  { id: 8, name: "Boots", category: "Shoes", size: "9", colour: "Brown", price: 100, image: "👢" },
  { id: 9, name: "Scarf", category: "Accessories", size: "One Size", colour: "White", price: 20, image: "🧣" },
  { id: 10, name: "Gloves", category: "Accessories", size: "M", colour: "Black", price: 18, image: "🧤" },
  { id: 11, name: "Socks", category: "Accessories", size: "L", colour: "White", price: 8, image: "🧦" },
  { id: 12, name: "Coat", category: "Tops", size: "L", colour: "Grey", price: 110, image: "🧥" },
  { id: 13, name: "Sneakers", category: "Shoes", size: "10", colour: "White", price: 70, image: "👟" },
  { id: 14, name: "Sun Hat", category: "Accessories", size: "One Size", colour: "Beige", price: 22, image: "👒" },
  { id: 15, name: "Shorts", category: "Bottoms", size: "M", colour: "Blue", price: 28, image: "🩳" },
  { id: 16, name: "Jacket", category: "Tops", size: "L", colour: "Grey", price: 42, image: "🧥" },
  { id: 17, name: "T-Shirt", category: "Tops", size: "S", colour: "White", price: 20, image: "👕" },
  { id: 18, name: "Jeans", category: "Bottoms", size: "M", colour: "Green", price: 55, image: "👖" },
  { id: 19, name: "Flip-Flops", category: "Shoes", size: "8", colour: "Black", price: 18, image: "🩴" },
  { id: 20, name: "Cap", category: "Accessories", size: "One Size", colour: "Brown", price: 16, image: "🧢" },
];

const CATEGORIES = ["Tops", "Bottoms", "Accessories", "Shoes", "Dresses"];
const SIZES = ["S", "M", "L", "7", "9", "10", "One Size"];
const COLOURS = ["Black", "Blue", "Red", "Beige", "Brown", "White", "Grey"];

export default function ShopPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [size, setSize] = useState("");
  const [colour, setColour] = useState("");

  const { addToCart } = useCart();

  const filteredProducts = PRODUCTS.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (!category || p.category === category) &&
    (!size || p.size === size) &&
    (!colour || p.colour === colour)
  );

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">🛍️ Shop Clothing</h2>

      <div className="row mb-4">
        <div className="col-md-3">
          <label className="form-label">Search</label>
          <input
            type="text"
            className="form-control"
            placeholder="Search products by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Search products by name"
          />
        </div>
        <div className="col-md-3">
          <label className="form-label">Category</label>
          <select
            className="form-select"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            <option value="">All</option>
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-3">
          <label className="form-label">Size</label>
          <select
            className="form-select"
            onChange={(e) => setSize(e.target.value)}
            value={size}
          >
            <option value="">All</option>
            {SIZES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-3">
          <label className="form-label">Colour</label>
          <select
            className="form-select"
            onChange={(e) => setColour(e.target.value)}
            value={colour}
          >
            <option value="">All</option>
            {COLOURS.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="row">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="col-md-3 mb-4" key={product.id}>
              <ProductCard product={product} onAdd={() => addToCart(product)} />
            </div>
          ))
        ) : (
          <p>No products match your filters.</p>
        )}
      </div>
    </div>
  );
}