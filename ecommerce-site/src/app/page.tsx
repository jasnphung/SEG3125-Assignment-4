// src/app/page.tsx
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1>Welcome to Closet Click</h1>
        <p>Your one-stop shop for stylish, affordable fashion.</p>
        <Link href="/shop" className={`${styles.ctaBtn} ${styles.primary}`}>
          Shop Now
        </Link>
      </section>

      <section className={styles.features}>
        <h2>What’s New</h2>
        <ul>
          <li>🔥 Summer Sale: Up to 40% off selected items</li>
          <li>🧢 New Arrivals: Fresh styles for every vibe</li>
          <li>🚚 Free Shipping on orders over $50</li>
        </ul>
      </section>
    </main>
  );
}
