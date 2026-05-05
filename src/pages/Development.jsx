import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader, Card, Badge } from "../components/ui";
import { programs } from "../data/siteData";
import DonateCTA from "../components/sections/DonateCTA";

const filters = ["All", "Health", "Housing", "Environment"];

// Each "area" card — extend this array as new projects are added
const areas = [
  {
    id:       1,
    title:    "Health Screening — Kwahu",
    category: "Health",
    status:   "Active",
    region:   "Kwahu, Ghana",
    description:
      "A targeted health screening program bringing diagnostic services directly to communities in Kwahu. Focused on early detection and preventive care for women, children, and men.",
    icon: "🩺",
    urgent: true,
  },
  {
    id:       2,
    title:    "Women & Youth Wellness Program",
    category: "Health",
    status:   "Ongoing",
    region:   "Accra, Ghana",
    description:
      "Wellness education and outreach programs designed specifically for women and youth in underserved communities across Accra.",
    icon: "💚",
    urgent: false,
  },
  {
    id:       3,
    title:    "Accra School Sustainability Initiative",
    category: "Environment",
    status:   "Completed",
    region:   "Accra, Ghana",
    description:
      "An environmental education program launched in collaboration with a local primary school. Students led greening activities and learned sustainable practices for their communities.",
    icon: "🌿",
    urgent: false,
  },
  {
    id:       4,
    title:    "Ghana Greening Program",
    category: "Environment",
    status:   "In Development",
    region:   "Multiple Regions, Ghana",
    description:
      "A scalable environmental sustainability program targeting school sectors across Ghana. Aims to instill environmental stewardship in the next generation.",
    icon: "🌳",
    urgent: false,
  },
  {
    id:       5,
    title:    "Safe Housing Initiative",
    category: "Housing",
    status:   "In Development",
    region:   "Ghana",
    description:
      "Planned housing project to provide safe, stable shelter for families in need. Partnership opportunities open for NGOs, construction firms, and individual donors.",
    icon: "🏠",
    urgent: false,
  },
];

const statusColor = {
  "Active":         "bg-green-bright/20 text-green-dark",
  "Ongoing":        "bg-green-light text-green-dark",
  "In Development": "bg-earth-clay/20 text-neutral-700",
  "Completed":      "bg-neutral-100 text-neutral-500",
};

export default function Development() {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? areas
    : areas.filter((a) => a.category === active);

  return (
    <>
      {/* Page Hero */}
      <section className="pt-32 pb-16 bg-green-dark">
        <div className="max-content container-pad">
          <motion.p
            className="label-text text-green-bright mb-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Areas of Development
          </motion.p>
          <motion.h1
            className="text-display-lg text-white max-w-2xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Projects Driving Change on the Ground
          </motion.h1>
          <motion.p
            className="text-green-light/70 text-lg mt-4 max-w-xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Browse active, ongoing, and upcoming development projects across Health,
            Housing, and the Environment.
          </motion.p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="section-pad bg-earth-sand">
        <div className="max-content container-pad">
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`label-text px-5 py-2 rounded-pill text-xs transition-all
                  ${active === f
                    ? "bg-green-mid text-white shadow-cta"
                    : "bg-white border border-green-light text-neutral-600 hover:border-green-mid"
                  }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Cards Grid with AnimatePresence */}
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((area) => (
                <motion.div
                  key={area.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="p-6 h-full flex flex-col">
                    {/* Header row */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="text-3xl">{area.icon}</div>
                      <span className={`label-text text-xs px-3 py-1 rounded-pill
                                        ${statusColor[area.status]}`}>
                        {area.status}
                      </span>
                    </div>

                    {/* Urgent flag */}
                    {area.urgent && (
                      <span className="label-text text-xs text-red-600 bg-red-50
                                        px-3 py-1 rounded-pill self-start mb-3">
                        ⚡ Active Campaign
                      </span>
                    )}

                    <h3 className="font-display text-green-dark text-lg mb-2">
                      {area.title}
                    </h3>

                    <p className="label-text text-green-olive text-xs mb-3">
                      📍 {area.region}
                    </p>

                    <p className="text-sm text-neutral-600 leading-relaxed flex-1">
                      {area.description}
                    </p>

                    {area.urgent && (
                      <a
                        href="/donate"
                        className="mt-5 inline-block bg-green-mid text-white label-text
                                   text-xs px-5 py-2 rounded-pill hover:bg-green-dark
                                   transition-colors text-center"
                      >
                        Support This Project →
                      </a>
                    )}
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <p className="text-center text-neutral-400 py-16 label-text">
              No projects in this category yet.
            </p>
          )}
        </div>
      </section>

      <DonateCTA />
    </>
  );
}
