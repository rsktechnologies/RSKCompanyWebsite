"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";

const CONTACT_EMAIL = "rsktechgroup@gmail.com";

type FormStatus = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full rounded-xl border border-[rgb(51,51,153)]/20 bg-white/70 px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 outline-none transition-all focus:border-[rgb(51,51,153)]/50 focus:ring-2 focus:ring-[rgb(51,51,153)]/15 disabled:opacity-60";

const labelClass =
  "mb-1.5 block text-xs font-semibold uppercase tracking-wider text-neutral-600";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const isSubmitting = status === "submitting";

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);

    const firstName = String(data.get("firstName") ?? "").trim();
    const lastName  = String(data.get("lastName")  ?? "").trim();
    const email     = String(data.get("email")     ?? "").trim();
    const company   = String(data.get("company")   ?? "").trim();
    const service   = String(data.get("service")   ?? "").trim();
    const message   = String(data.get("message")   ?? "").trim();

    const endpoint = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT;

    try {
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: data,
        });
        if (!res.ok) throw new Error("Server error");
      } else {
        // Fallback: open mail client
        const subject = encodeURIComponent(`Contact from ${firstName} ${lastName}`);
        const body = encodeURIComponent(
          `Name: ${firstName} ${lastName}\nEmail: ${email}\nCompany: ${company}\nService: ${service}\n\n${message}`
        );
        window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage(
        `Something went wrong. Please email us directly at ${CONTACT_EMAIL}.`
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">

      {/* Name row */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className={labelClass}>First name</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            disabled={isSubmitting}
            placeholder="Ronald"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="lastName" className={labelClass}>Last name</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            disabled={isSubmitting}
            placeholder="Kato"
            className={inputClass}
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className={labelClass}>Email address</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          disabled={isSubmitting}
          placeholder="you@company.com"
          className={inputClass}
        />
      </div>

      {/* Company */}
      <div>
        <label htmlFor="company" className={labelClass}>Company / Organisation</label>
        <input
          id="company"
          name="company"
          type="text"
          disabled={isSubmitting}
          placeholder="Acme Corp (optional)"
          className={inputClass}
        />
      </div>

      {/* Service */}
      <div>
        <label htmlFor="service" className={labelClass}>What are you looking for?</label>
        <select
          id="service"
          name="service"
          disabled={isSubmitting}
          className={inputClass}
        >
          <option value="">Select a service…</option>
          <option>Web Development</option>
          <option>App Development</option>
          <option>MVP / Startup Acceleration</option>
          <option>Cloud & DevOps</option>
          <option>Cyber Security</option>
          <option>UI / UX Design</option>
          <option>Other / General enquiry</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelClass}>Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          disabled={isSubmitting}
          placeholder="Tell us about your project, timeline, and budget if you have one in mind…"
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[rgb(51,51,153)] text-sm font-semibold text-white shadow-[0_18px_45px_-22px_rgba(51,51,153,0.95)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[rgb(41,41,128)] hover:shadow-[0_22px_55px_-24px_rgba(51,51,153,1)] disabled:translate-y-0 disabled:opacity-60 sm:w-auto sm:px-8"
      >
        <Send size={15} />
        {isSubmitting ? "Sending…" : "Send message"}
      </button>

      {/* Success */}
      {status === "success" && (
        <p
          role="status"
          className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800"
        >
          {process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT
            ? "Thanks — your message was sent. We'll reply within 24 hours."
            : "Thanks — your email app should open with your message ready to send."}
        </p>
      )}

      {/* Error */}
      {status === "error" && (
        <p role="alert" className="text-sm text-red-600">
          {errorMessage}
        </p>
      )}
    </form>
  );
}
