import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "../components/ui";
import { activeCampaign } from "../data/siteData";

const donationAmounts = [10, 25, 50, 100, 250];

export default function Donate() {
  const [mode, setMode]     = useState("once");   // "once" | "monthly"
  const [amount, setAmount] = useState(50);
  const [custom, setCustom] = useState("");

  const displayAmount = custom ? Number(custom) : amount;

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
            Support Our Work
          </motion.p>
          <motion.h1
            className="text-display-lg text-white max-w-xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Make Change Contagious
          </motion.h1>
          <motion.p
            className="text-green-light/70 text-lg mt-4 max-w-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Your gift goes directly to health, housing, and environmental programs
            in Ghana and Canada.
          </motion.p>
        </div>
      </section>

      <section className="section-pad bg-earth-sand">
        <div className="max-content container-pad">
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* ── Donation Form ─────────────────────────────── */}
            <Card className="p-8">
              {/* Active Campaign Banner */}
              {activeCampaign.active && (
                <div className="bg-green-light border border-green-mid/30 rounded-card
                                p-4 mb-6">
                  <p className="label-text text-green-dark text-xs mb-1">
                    ⚡ Active Campaign
                  </p>
                  <p className="font-display text-green-dark text-base">
                    {activeCampaign.title}
                  </p>
                  <p className="text-sm text-neutral-600 mt-1">{activeCampaign.body}</p>
                  <p className="label-text text-green-olive text-xs mt-2">
                    Deadline: {activeCampaign.deadline}
                  </p>
                </div>
              )}

              {/* One-time / Monthly toggle */}
              <div className="flex bg-neutral-100 rounded-pill p-1 mb-6">
                {["once", "monthly"].map((m) => (
                  <button
                    key={m}
                    onClick={() => setMode(m)}
                    className={`flex-1 py-2 rounded-pill label-text text-xs transition-all
                      ${mode === m
                        ? "bg-green-mid text-white shadow-sm"
                        : "text-neutral-500 hover:text-neutral-800"
                      }`}
                  >
                    {m === "once" ? "Give Once" : "Give Monthly"}
                  </button>
                ))}
              </div>

              {/* Amount selector */}
              <p className="label-text text-xs text-neutral-500 mb-3">Select Amount (CAD)</p>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 mb-4">
                {donationAmounts.map((a) => (
                  <button
                    key={a}
                    onClick={() => { setAmount(a); setCustom(""); }}
                    className={`py-2.5 rounded-card border text-sm font-medium transition-all
                      ${amount === a && !custom
                        ? "bg-green-mid text-white border-green-mid"
                        : "bg-white border-neutral-200 text-neutral-700 hover:border-green-mid"
                      }`}
                  >
                    ${a}
                  </button>
                ))}
              </div>

              {/* Custom amount */}
              <div className="relative mb-6">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 text-sm">
                  $
                </span>
                <input
                  type="number"
                  placeholder="Other amount"
                  value={custom}
                  onChange={(e) => { setCustom(e.target.value); setAmount(0); }}
                  className="w-full pl-8 pr-4 py-3 border border-neutral-200 rounded-card
                             text-sm focus:border-green-mid focus:ring-1 focus:ring-green-bright
                             outline-none transition-colors bg-white"
                />
              </div>

              {/* ── ZEFFY EMBED ─────────────────────────────────────────
                  Replace the button below with your actual Zeffy embed:

                  Option A — Iframe embed:
                  <iframe
                    src="https://www.zeffy.com/embed/donation-form/YOUR_FORM_ID"
                    style={{ width: "100%", height: "500px", border: "none" }}
                    title="Donate to OWIN Foundation"
                  />

                  Option B — Redirect to Zeffy hosted page:
                  <a href="https://www.zeffy.com/donation-form/YOUR_FORM_ID" target="_blank">
                    Donate
                  </a>

                  Zeffy is free for non-profits (0% platform fees).
                  Sign up at zeffy.com to get your form ID.
              ──────────────────────────────────────────────────────── */}
              <button
                className="w-full bg-green-mid text-white label-text py-4 rounded-card
                           hover:bg-green-dark transition-colors shadow-cta text-base"
              >
                Donate ${displayAmount || "—"} {mode === "monthly" ? "/ month" : ""} →
              </button>

              <p className="text-xs text-neutral-400 text-center mt-3">
                Secure payment · OWIN Foundation is a registered non-profit
              </p>
            </Card>

            {/* ── Why Donate sidebar ────────────────────────── */}
            <div className="space-y-6">
              <div>
                <p className="label-text mb-2">Your Impact</p>
                <h2 className="text-display-md text-green-dark mb-4">
                  Every dollar goes further here.
                </h2>
                <p className="text-neutral-600 leading-relaxed">
                  OWIN Foundation operates with lean overhead. Donations are channeled
                  directly into programs — screening clinics, sustainability education,
                  and housing support for families in Ghana.
                </p>
              </div>

              {[
                { amount: "$25",  impact: "Covers basic health screening for one person in Kwahu" },
                { amount: "$50",  impact: "Funds environmental education materials for a classroom" },
                { amount: "$100", impact: "Supports a month of community health outreach" },
                { amount: "$250", impact: "Contributes to a housing assessment for a family in need" },
              ].map((item) => (
                <div key={item.amount} className="flex gap-4 items-start">
                  <div className="w-14 h-14 rounded-card bg-green-light flex items-center
                                  justify-center flex-shrink-0 font-display text-green-dark
                                  font-semibold text-sm">
                    {item.amount}
                  </div>
                  <p className="text-neutral-600 text-sm leading-relaxed pt-1">
                    {item.impact}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
