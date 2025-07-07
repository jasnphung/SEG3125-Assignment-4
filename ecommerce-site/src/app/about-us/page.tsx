export default function AboutUsPage() {
  return (
    <main className="container py-5" style={{ maxWidth: "800px" }}>
      <h1 className="mb-4">About Closet Click</h1>

      <p>
        At Closet Click, we believe fashion should be stylish, affordable, and
        accessible to everyone. Our mission is to offer a curated selection of
        clothing that inspires confidence and self-expression.
      </p>

      <h2 className="h5 mt-5 mb-3">Our Story</h2>
      <p>
        Born from a love of modern fashion and community-driven design, Closet
        Click started as a student-run project with a big vision: making
        trend-forward clothing available without compromise.
      </p>

      <h2 className="h5 mt-5 mb-3">Our Values</h2>
      <ul className="list-unstyled">
        <li> - Quality craftsmanship</li>
        <li> - Sustainable and ethical sourcing</li>
        <li> - Customer-first communication</li>
      </ul>

      <h2 className="h5 mt-5 mb-3">Let's Connect!</h2>
      <p>
        Have ideas or feedback? Fill out our <a href="/survey">survey</a>, we're always listening!
      </p>
    </main>
  );
}
