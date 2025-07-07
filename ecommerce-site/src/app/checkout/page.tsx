"use client";

import React, { useState } from "react";
import { useCart } from "@/context/CartContext";

const steps = ["Personal Info", "Shipping Address", "Payment Info", "Confirmation"];

function StepperDots({ currentStep }: { currentStep: number }) {
  return (
    <div style={{ maxWidth: 600, margin: "0 auto 10px auto" }}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 10 }}>
        {steps.map((label, index) => (
          <React.Fragment key={label}>
            <div
              style={{
                width: 20,
                height: 20,
                borderRadius: "50%",
                backgroundColor: index === currentStep ? "#0d6efd" : "#ccc",
                transition: "background-color 0.3s ease",
                cursor: "pointer",
              }}
              title={label}
            />
            {index < steps.length - 1 && (
              <div
                style={{
                  flex: 1,
                  height: 3,
                  backgroundColor: index < currentStep ? "#0d6efd" : "#ccc",
                  transition: "background-color 0.3s ease",
                  margin: "0 8px",
                }}
              />
            )}
          </React.Fragment>
        ))}
      </div>
      <div style={{ textAlign: "center", fontWeight: "bold", color: "#0d6efd" }}>
        Step {currentStep + 1} of {steps.length}: {steps[currentStep]}
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");

  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [ccv, setCcv] = useState("");

  const totalSteps = steps.length;

  const handleNext = () => {
    if (step < totalSteps - 1) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    clearCart();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="container py-5">
        <h2 className="mb-4">Checkout</h2>
        <div className="alert alert-success">Thank you for your purchase!</div>
      </div>
    );
  }

  return (
    <div className="container py-5" style={{ maxWidth: 600 }}>
      <h2 className="mb-4 text-center">Checkout</h2>

      <StepperDots currentStep={step} />

      <form onSubmit={handleSubmit}>
        {step === 0 && (
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Phone</label>
              <input
                type="tel"
                className="form-control"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="123-456-7890"
              />
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="row g-3">
            <div className="col-12">
              <label className="form-label">Street Address</label>
              <input
                type="text"
                className="form-control"
                required
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                placeholder="Street address"
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">City</label>
              <input
                type="text"
                className="form-control"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="City"
              />
            </div>
            <div className="col-md-3">
              <label className="form-label">Province</label>
              <input
                type="text"
                className="form-control"
                required
                value={province}
                onChange={(e) => setProvince(e.target.value)}
                placeholder="Province"
              />
            </div>
            <div className="col-md-3">
              <label className="form-label">ZIP Code</label>
              <input
                type="text"
                className="form-control"
                required
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                placeholder="ZIP"
              />
            </div>
            <div className="col-12">
              <label className="form-label">Country</label>
              <input
                type="text"
                className="form-control"
                required
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                placeholder="Country"
              />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="row g-3">
            <div className="col-12">
              <label className="form-label">Card Number</label>
              <input
                type="text"
                className="form-control"
                placeholder="Card Number"
                required
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Expiration Date</label>
              <input
                type="text"
                className="form-control"
                placeholder="MM/YY"
                required
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">CCV</label>
              <input
                type="text"
                className="form-control"
                placeholder="123"
                required
                value={ccv}
                onChange={(e) => setCcv(e.target.value)}
              />
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="mb-3">
            <h5>Please confirm your order details:</h5>
            <p>
              <strong>Name:</strong> {name}
            </p>
            <p>
              <strong>Email:</strong> {email}
            </p>
            <p>
              <strong>Phone:</strong> {phone}
            </p>
            <p>
              <strong>Address:</strong> {street}, {city}, {province}, {zip}, {country}
            </p>
            <p>
              <strong>Card Number:</strong> **** **** **** {cardNumber.slice(-4)}
            </p>
            <p>
              <strong>Items in Cart:</strong> {cart.length}
            </p>
          </div>
        )}

        <div className="d-flex justify-content-between mt-4">
          {step > 0 && (
            <button type="button" className="btn btn-secondary" onClick={handleBack}>
              Back
            </button>
          )}
          {step < totalSteps - 1 && (
            <button
              type="button"
              className="btn btn-primary ms-auto"
              onClick={handleNext}
              disabled={
                (step === 0 && (!name || !email || !phone)) ||
                (step === 1 && (!street || !city || !province || !zip || !country)) ||
                (step === 2 && (!cardNumber || !expiry || !ccv))
              }
            >
              Next
            </button>
          )}
          {step === totalSteps - 1 && (
            <button type="submit" className="btn btn-success ms-auto">
              Place Order
            </button>
          )}
        </div>
      </form>
    </div>
  );
}