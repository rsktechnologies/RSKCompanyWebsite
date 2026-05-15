/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { siteConfig } from "@/config/site";
import {
  Clock,
  Link as LinkIcon,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  X,
} from "lucide-react";

async function sendMessage(formData: FormData) {
  "use server";

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  // Here you would send the email
  // For now, we'll just log it
  console.log("New message from contact form:", { name, email, message });

  // In production, use a service like SendGrid, Resend, or nodemailer
  // Example with Resend:
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: 'contact@yourdomain.com',
  //   to: 'hello@rsktechnologies.com',
  //   subject: `New contact form message from ${name}`,
  //   html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
  // });

  // For demo, just log
}

export const metadata: Metadata = {
  title: "Contact | RSK Technologies Group",
  description: `Contact ${siteConfig.name}. Get in touch for a discovery call.`,
};

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    details: "rsktechgroup@gmail.com",
    href: "mailto:rsktechgroup@gmail.com",
    description: "We respond within 24 hours",
  },
  {
    icon: Phone,
    title: "Phone",
    details: "+1 (555) 123-4567",
    href: "tel:+15551234567",
    description: "Mon-Fri, 9am-6pm EST",
  },
  {
    icon: MapPin,
    title: "Office",
    details: "123 Innovation Drive, Suite 100",
    href: "#",
    description: "San Francisco, CA 94103",
  },
  {
    icon: Clock,
    title: "Support Hours",
    details: "24/7 Emergency Support",
    href: "#",
    description: "Critical issue? We're always here.",
  },
];

const socialLinks = [
  { icon: LinkIcon, label: "LinkedIn", href: "#" },
  { icon: X, label: "X (Twitter)", href: "https://x.com/rsktech_group1" },
  { icon: Mail, label: "Email", href: "mailto:rsktechgroup@gmail.com" },
];

export default function ContactPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative isolate">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[rgb(51,51,153)]/20 blur-3xl" />
          <div className="absolute -right-16 top-20 h-64 w-64 rounded-full bg-[rgb(51,51,153)]/12 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(51,51,153,0.10),transparent_55%)]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgb(51,51,153)]/20 bg-white/60 px-4 py-1.5 text-sm font-medium text-[rgb(51,51,153)] shadow-sm backdrop-blur">
              <MessageSquare size={14} />
              <span>Get in touch</span>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="mt-6 max-w-3xl text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
              Let's build something{" "}
              <span className="text-[rgb(51,51,153)]">extraordinary</span> together.
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-neutral-700 sm:text-xl">
              Whether you have a project in mind, need technical advice, or just want to
              learn more — we'd love to hear from you.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Form */}
          <Reveal>
            <div className="rounded-2xl border border-[rgb(51,51,153)]/12 bg-white/55 p-6 shadow-lg backdrop-blur-sm sm:p-8">
              <h2 className="mb-6 text-2xl font-semibold text-neutral-900">Send us a message</h2>
              <form action={sendMessage} className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-1 block text-sm font-medium text-neutral-700">
                    Full name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-xl border border-neutral-200 bg-white/80 px-4 py-2.5 text-neutral-900 placeholder:text-neutral-400 focus:border-[rgb(51,51,153)] focus:outline-none focus:ring-1 focus:ring-[rgb(51,51,153)]"
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
                    className="w-full rounded-xl border border-neutral-200 bg-white/80 px-4 py-2.5 text-neutral-900 placeholder:text-neutral-400 focus:border-[rgb(51,51,153)] focus:outline-none focus:ring-1 focus:ring-[rgb(51,51,153)]"
                    placeholder=""
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
                    className="w-full rounded-xl border border-neutral-200 bg-white/80 px-4 py-2.5 text-neutral-900 placeholder:text-neutral-400 focus:border-[rgb(51,51,153)] focus:outline-none focus:ring-1 focus:ring-[rgb(51,51,153)]"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[rgb(51,51,153)] px-6 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-[rgb(41,41,128)] hover:shadow-xl"
                >
                  <Send size={16} />
                  Send message
                </button>
              </form>
            </div>
          </Reveal>

          {/* Contact Info */}
          <div className="space-y-6">
            <Reveal delay={0.06}>
              <div className="rounded-2xl border border-[rgb(51,51,153)]/12 bg-white/55 p-6 shadow-lg backdrop-blur-sm sm:p-8">
                <h2 className="mb-6 text-2xl font-semibold text-neutral-900">Contact information</h2>
                <div className="space-y-5">
                  {contactMethods.map((method) => (
                    <Link
                      key={method.title}
                      href={method.href}
                      className="group flex items-start gap-4 transition-colors hover:no-underline"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[rgb(51,51,153)]/10">
                        <method.icon className="h-5 w-5 text-[rgb(51,51,153)]" strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="font-semibold text-neutral-900">{method.title}</p>
                        <p className="text-sm text-neutral-600">{method.details}</p>
                        <p className="text-xs text-neutral-500">{method.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="rounded-2xl border border-[rgb(51,51,153)]/12 bg-white/55 p-6 shadow-lg backdrop-blur-sm sm:p-8">
                <h2 className="mb-4 text-xl font-semibold text-neutral-900">Connect with us</h2>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <Link
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="flex h-10 w-10 items-center justify-center rounded-xl bg-[rgb(51,51,153)]/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[rgb(51,51,153)] hover:text-white"
                    >
                      <social.icon className="h-5 w-5 text-[rgb(51,51,153)] transition-colors group-hover:text-white" strokeWidth={1.5} />
                    </Link>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}