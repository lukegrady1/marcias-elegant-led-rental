"use client";

import { useState } from "react";
import Button from "./Button";
import { company } from "@/lib/content";

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const empty: FormState = { name: "", email: "", phone: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(empty);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // No backend submit by design — show a thank-you state locally.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="flex flex-col justify-center rounded-card border border-accent/40 bg-ink-elevated p-8"
      >
        <h2 className="font-display text-2xl uppercase tracking-tight text-body-ondark">
          Thank you{form.name ? `, ${form.name}` : ""}!
        </h2>
        <p className="mt-3 text-body-muted">
          We&apos;ve received your details. For the fastest response, please call
          us:
        </p>
        <a
          href={company.phoneHref}
          className="mt-4 font-display text-3xl text-accent-light hover:underline"
        >
          {company.phoneDisplay}
        </a>
        <button
          type="button"
          onClick={() => {
            setForm(empty);
            setSubmitted(false);
          }}
          className="mt-6 self-start rounded-btn border border-hairline px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-body-ondark transition-colors hover:border-accent hover:text-accent-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-card border border-hairline bg-ink-elevated p-6"
    >
      <h2 className="font-display text-2xl uppercase tracking-tight text-body-ondark">
        Send a <span className="text-accent-light">message</span>
      </h2>
      <div className="mt-6 space-y-5">
        <Field
          id="name"
          label="Name"
          type="text"
          value={form.name}
          onChange={handleChange}
          required
        />
        <Field
          id="email"
          label="Email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <Field
          id="phone"
          label="Phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
        />
        <div>
          <label
            htmlFor="message"
            className="block text-xs font-semibold uppercase tracking-widest text-body-muted"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            value={form.message}
            onChange={handleChange}
            className="mt-2 w-full rounded-btn border border-hairline bg-ink px-4 py-3 text-body-ondark placeholder:text-body-muted focus-visible:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            placeholder="Tell us about your event, date and headcount."
          />
        </div>
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-btn bg-accent px-7 py-3.5 font-sans text-sm font-semibold uppercase tracking-wide text-white transition-colors duration-200 hover:bg-accent-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
        >
          Send message
        </button>
        <Button href={company.phoneHref} variant="ghost">
          Or call {company.phoneDisplay}
        </Button>
      </div>
      <p className="mt-4 text-xs text-body-muted">
        This form does not transmit data; for now it confirms locally and shows
        our phone number. [confirm — wire to a real handler before launch.]
      </p>
    </form>
  );
}

interface FieldProps {
  id: string;
  label: string;
  type: string;
  value: string;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Field({ id, label, type, value, required, onChange }: FieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-xs font-semibold uppercase tracking-widest text-body-muted"
      >
        {label}
        {required && <span className="text-accent"> *</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        required={required}
        onChange={onChange}
        className="mt-2 w-full rounded-btn border border-hairline bg-ink px-4 py-3 text-body-ondark placeholder:text-body-muted focus-visible:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      />
    </div>
  );
}
