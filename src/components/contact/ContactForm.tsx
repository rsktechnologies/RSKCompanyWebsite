"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";

const CONTACT_EMAIL = "rsktechgroup@gmail.com";

type FormStatus = "idle" | "submitting" | "success" | "error";

const inputClassName =
  "w-full rounded-xl border border-neutral-200 bg-white/80 px-4 py-2.5 text-neutral-900 placeholder:text-neutral-400 focus:border-[rgb(51,51,153)] focus:outline-none focus:ring-1 focus:ring-[rgb(51,51,153)] disabled:opacity-60";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const isSubmitting = status === "submitting";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const endpoint = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT;

    try {
      if (endpoint) {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: formData,
        });

        if (!response.ok) {
          throw new Error("Unable to send your message. Please try again.");
        }
      } else {
        const subject = encodeURIComponent(`Contact from ${name}`);
        const body = encodeURIComponent(
          `Name: ${name}\nEmail: ${email}\n\n${message}`,
        );
        window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage(
        "Something went wrong. Please email us directly at rsktechgroup@gmail.com.",
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-neutral-700">
          Full name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          disabled={isSubmitting}
          className={inputClassName}
          placeholder="John Doe"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-neutral-700">
          Email address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          disabled={isSubmitting}
          className={inputClassName}
          placeholder="you@company.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-neutral-700">
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          disabled={isSubmitting}
          className={inputClassName}
          placeholder="Tell us about your project..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[rgb(51,51,153)] px-6 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-[rgb(41,41,128)] hover:shadow-xl disabled:translate-y-0 disabled:opacity-60"
      >
        <Send size={16} />
        {isSubmitting ? "Sending…" : "Send message"}
      </button>

      {status === "success" ? (
        <p
          role="status"
          className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800"
        >
          {process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT
            ? "Thanks — your message was sent. We will reply within 24 hours."
            : "Thanks — your email app should open with your message ready to send."}
        </p>
      ) : null}

      {status === "error" ? (
        <p role="alert" className="text-sm text-red-600">
          {errorMessage}
        </p>
      ) : null}
    </form>
  );
}
