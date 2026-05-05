import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SectionHeader, Card, Badge } from "../ui";
import { programs } from "../../data/siteData";

const containerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function ProgramPillars() {
  return (
    <section className="section-pad bg-neutral-50">
      <div className="max-content container-pad">
        <SectionHeader
          label="What We Do"
          title="Three Pillars of Impact"
          subtitle="Each program area is driven by community need, local partnerships, and a commitment to long-term change."
        />

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {programs.map((p) => (
            <motion.div key={p.id} variants={cardVariants}>
              <Card className="p-7 h-full flex flex-col">
                {/* Icon */}
                <div className="text-4xl mb-4">{p.icon}</div>

                {/* Tag */}
                <Badge variant="green" className="mb-3 self-start">{p.label}</Badge>

                {/* Title */}
                <h3 className="font-display text-xl text-green-dark mb-3">
                  {p.title}
                </h3>

                {/* Summary */}
                <p className="text-neutral-600 text-sm leading-relaxed mb-4 flex-1">
                  {p.summary}
                </p>

                {/* Detail list */}
                <ul className="flex flex-col gap-1.5 mb-5">
                  {p.details.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-xs text-neutral-600">
                      <span className="text-green-bright mt-0.5">✓</span>
                      {d}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/programs"
                  className="label-text text-green-mid hover:text-green-dark
                             transition-colors text-xs mt-auto"
                >
                  Learn more →
                </Link>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
