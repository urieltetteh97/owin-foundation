import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "../components/ui";
import { siteConfig } from "../data/siteData";
import { api } from "../services/api";

const contactInfo = [
  { icon: "✉️", label: "Email",    value: siteConfig.email },
  { icon: "📍", label: "Canada",   value: "Toronto, Ontario" },
  { icon: "📍", label: "Ghana",    value: "Accra · Obuasi · Kwahu" },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "", email: "", subject: "", message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) =>
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      await api.submitContact(formData);
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
      setErrorMessage(error.message || "Failed to send message. Please try again.");
    }
  };

  return (
    <>
      {/* Page Hero */}
      <section className="pt-32 pb-16 bg-green-dark">
        <div className="max-content container-pad">
          <motion.p
            className="label-text text-green-bright mb-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Get In Touch
          </motion.p>
          <motion.h1
            className="text-display-lg text-white max-w-xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            We'd Love to Hear From You
          </motion.h1>
        </div>
      </section>

      <section className="section-pad bg-earth-sand">
        <div className="max-content container-pad">
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Contact Form */}
            <Card className="p-8">
              {status === "success" ? (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="font-display text-green-dark text-xl mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-neutral-600">
                    Thank you for reaching out. We'll be in touch shortly.
                  </p>
                  <button
                    onClick={() => { setStatus("idle"); setFormData({ name:"", email:"", subject:"", message:"" }); }}
                    className="mt-6 label-text text-green-mid hover:text-green-dark text-xs"
                  >
                    Send another message →
                  </button>
                </motion.div>
              ) : status === "error" ? (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="text-5xl mb-4">⚠️</div>
                  <h3 className="font-display text-red-600 text-xl mb-2">
                    Error Sending Message
                  </h3>
                  <p className="text-neutral-600 mb-4">
                    {errorMessage}
                  </p>
                  <button
                    onClick={() => { setStatus("idle"); setErrorMessage(""); }}
                    className="mt-6 label-text text-green-mid hover:text-green-dark text-xs"
                  >
                    Try again →
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2 className="font-display text-green-dark text-xl mb-4">
                    Send Us a Message
                  </h2>

                  {[
                    { name: "name",    label: "Full Name",     type: "text",  placeholder: "Your name" },
                    { name: "email",   label: "Email Address", type: "email", placeholder: "you@example.com" },
                    { name: "subject", label: "Subject",       type: "text",  placeholder: "How can we help?" },
                  ].map((f) => (
                    <div key={f.name}>
                      <label className="label-text text-xs text-neutral-500 block mb-1.5">
                        {f.label}
                      </label>
                      <input
                        type={f.type}
                        name={f.name}
                        value={formData[f.name]}
                        onChange={handleChange}
                        placeholder={f.placeholder}
                        required
                        className="w-full px-4 py-3 border border-neutral-200 rounded-card
                                   text-sm bg-white outline-none transition-colors
                                   focus:border-green-mid focus:ring-1 focus:ring-green-bright"
                      />
                    </div>
                  ))}

                  <div>
                    <label className="label-text text-xs text-neutral-500 block mb-1.5">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us about your inquiry, volunteer interest, or partnership idea..."
                      required
                      className="w-full px-4 py-3 border border-neutral-200 rounded-card
                                 text-sm bg-white outline-none transition-colors resize-none
                                 focus:border-green-mid focus:ring-1 focus:ring-green-bright"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full bg-green-mid text-white label-text py-3.5 rounded-card
                               hover:bg-green-dark transition-colors shadow-cta
                               disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? "Sending..." : "Send Message →"}
                  </button>
                </form>
              )}
            </Card>

            {/* Contact Info + Social */}
            <div className="space-y-8">
              <div>
                <p className="label-text mb-4">Contact Information</p>
                <div className="space-y-4">
                  {contactInfo.map((c) => (
                    <div key={c.label} className="flex gap-3 items-start">
                      <span className="text-xl">{c.icon}</span>
                      <div>
                        <p className="label-text text-xs text-neutral-400">{c.label}</p>
                        <p className="text-neutral-700 text-sm">{c.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="label-text mb-4">Follow Us</p>
                <div className="flex gap-3">
                  {[
                    { label: "Facebook",  href: siteConfig.socials.facebook,  icon: "📘" },
                    { label: "Instagram", href: siteConfig.socials.instagram, icon: "📸" },
                    { label: "Twitter",   href: siteConfig.socials.twitter,   icon: "🐦" },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 bg-white border border-green-light
                                 text-neutral-700 label-text text-xs px-4 py-2.5 rounded-pill
                                 hover:border-green-mid hover:text-green-mid transition-colors"
                    >
                      {s.icon} {s.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Volunteer / Partner blurb */}
              <div className="bg-green-light/40 rounded-card p-6 border border-green-light">
                <p className="label-text text-xs text-green-olive mb-2">Volunteer & Partners</p>
                <p className="font-display text-green-dark text-base mb-2">
                  Want to get involved?
                </p>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  We welcome individuals, schools, businesses, and NGOs for both
                  in-person (Ghana) and remote volunteer opportunities. Use the
                  form to reach out.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
