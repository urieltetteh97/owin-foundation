import { motion } from "framer-motion";
import { SectionHeader, Card, Badge } from "../components/ui";
import { programs } from "../data/siteData";
import DonateCTA from "../components/sections/DonateCTA";

const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, delay } },
});

export default function Programs() {
  return (
    <>
      {/* Page Hero */}
      <section className="pt-32 pb-16 bg-green-dark">
        <div className="max-content container-pad">
          <motion.p
            className="label-text text-green-bright mb-3"
            variants={fadeUp(0)}
            initial="hidden"
            animate="visible"
          >
            What We Do
          </motion.p>
          <motion.h1
            className="text-display-lg text-white max-w-2xl"
            variants={fadeUp(0.1)}
            initial="hidden"
            animate="visible"
          >
            Programs Built Around Community Need
          </motion.h1>
          <motion.p
            className="text-green-light/70 text-lg mt-4 max-w-xl"
            variants={fadeUp(0.2)}
            initial="hidden"
            animate="visible"
          >
            Three core pillars. Volunteer-driven. Community-led.
          </motion.p>
        </div>
      </section>

      {/* Program Detail Sections */}
      {programs.map((p, i) => (
        <section
          key={p.id}
          className={`section-pad ${i % 2 === 0 ? "bg-earth-sand" : "bg-neutral-50"}`}
        >
          <div className="max-content container-pad">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Text */}
              <motion.div
                className={i % 2 !== 0 ? "md:order-2" : ""}
                initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-5xl mb-4">{p.icon}</div>
                <Badge variant="green">{p.label}</Badge>
                <h2 className="text-display-md text-green-dark mt-3 mb-4">{p.title}</h2>
                <p className="text-neutral-600 text-lg leading-relaxed mb-6">{p.summary}</p>
                <ul className="space-y-2.5">
                  {p.details.map((d) => (
                    <li key={d} className="flex items-start gap-3 text-neutral-600">
                      <span className="mt-1 w-4 h-4 rounded-full bg-green-bright/20
                                       flex items-center justify-center flex-shrink-0
                                       text-green-mid text-xs font-bold">✓</span>
                      {d}
                    </li>
                  ))}
                </ul>
                {/* Regions */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {p.regions.map((r) => (
                    <span key={r} className="label-text bg-green-light text-green-dark
                                             px-3 py-1 rounded-pill text-xs">
                      📍 {r}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Image Placeholder */}
              <motion.div
                className={i % 2 !== 0 ? "md:order-1" : ""}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {/* Replace with <img src={p.photo} ... /> when images are ready */}
                <div className="rounded-card bg-green-light/50 aspect-[4/3]
                                flex items-center justify-center border border-green-light">
                  <div className="text-center text-green-olive/60">
                    <div className="text-6xl mb-2">{p.icon}</div>
                    <p className="label-text text-xs">Photo coming soon</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Volunteer / Partnership CTA */}
      <section className="section-pad bg-green-light/30">
        <div className="max-content container-pad text-center">
          <p className="label-text mb-3">Get Involved</p>
          <h2 className="text-display-md text-green-dark mb-4 max-w-xl mx-auto">
            Partner with OWIN or Volunteer Your Skills
          </h2>
          <p className="text-neutral-600 max-w-lg mx-auto mb-8">
            We welcome individuals, schools, businesses, and NGOs who want to contribute
            — whether in-person in Ghana or remotely from anywhere in the world.
          </p>
          <a
            href="/contact"
            className="inline-block bg-green-mid text-white label-text px-8 py-3.5
                       rounded-pill hover:bg-green-dark transition-colors shadow-cta"
          >
            Contact Us to Partner →
          </a>
        </div>
      </section>

      <DonateCTA />
    </>
  );
}
