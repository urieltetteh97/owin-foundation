import { motion } from "framer-motion";
import { SectionHeader } from "../ui";
import { approachBlocks } from "../../data/siteData";

export default function ApproachBlock() {
  return (
    <section className="section-pad bg-neutral-50">
      <div className="max-content container-pad">
        <SectionHeader
          label="Our Approach"
          title="How We Create Lasting Change"
          center
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {approachBlocks.map((block, i) => (
            <motion.div
              key={block.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-6"
            >
              <div className="w-10 h-10 rounded-full bg-green-bright/20 flex items-center
                              justify-center mx-auto mb-4 text-green-dark font-display
                              font-bold text-sm">
                {i + 1}
              </div>
              <h3 className="font-display text-green-dark text-base mb-2">{block.title}</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">{block.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
