"use client";
import { useState } from "react";

export default function SurveyPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    rating: "",
    feedback: "",
    recommend: false,
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("Survey submitted:", form);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <main className="container mt-5 text-center">
        <h2>Thank you for your feedback! 💬</h2>
        <p>We appreciate you helping Closet Click improve.</p>
      </main>
    );
  }

  return (
    <main className="container mt-5" style={{ maxWidth: "600px" }}>
      <h1 className="mb-4 text-center">Help Us Improve 📝</h1>
      <p className="text-center mb-4">
        We'd love your feedback about your shopping experience at Closet Click.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">
            How would you rate your experience?
            <input
              type="number"
              className="form-control mt-1"
              name="rating"
              min="1"
              max="5"
              value={form.rating}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div className="mb-3">
          <label className="form-label">
            What did you like or dislike?
            <textarea
              className="form-control mt-1"
              name="feedback"
              rows={4}
              value={form.feedback}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div className="form-check mb-4">
          <input
            className="form-check-input"
            type="checkbox"
            name="recommend"
            id="recommend"
            checked={form.recommend}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="recommend">
            Would you recommend Closet Click to a friend?
          </label>
        </div>

        <button type="submit" className="btn btn-dark w-100">
          Submit Feedback
        </button>
      </form>
    </main>
  );
}
