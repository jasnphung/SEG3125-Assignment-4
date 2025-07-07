// src/app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main className="container text-center py-5">
      <section
        className="p-5 rounded-4 text-center"
        style={{ background: "linear-gradient(to right, #fcb69f, #ffecd2)" }}
      >
        <h1 className="display-4 mb-3">Welcome to Closet Click</h1>
        <p className="lead">
          Your one-stop shop for stylish, affordable fashion.
        </p>
        <Link href="/shop" className="btn btn-dark mt-3 px-4 py-2">
          Shop Now
        </Link>
      </section>

      <section className="mt-5">
        <h2 className="h4 mb-4">What&apos;s New</h2>
        <ul
          className="p-4 rounded-4 list-unstyled text-start mx-auto"
          style={{ maxWidth: "400px", background: "linear-gradient(to right, #fcb69f, #ffecd2)" }}
        >
          <li>
            🔥 <strong>Summer Sale:</strong> Up to 40% off selected items
          </li>
          <li>
            🧢 <strong>New Arrivals:</strong> Fresh styles for every vibe
          </li>
          <li>
            🚚 <strong>Free Shipping:</strong> On orders over $50
          </li>
        </ul>
      </section>
    </main>
  );
}
