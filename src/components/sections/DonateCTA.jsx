import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function DonateCTA() {
  return (
    <section className="section-pad bg-green-dark">
      <div className="max-content container-pad text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="label-text text-green-bright mb-4">Make Change Contagious</p>
          <h2 className="text-display-lg text-white mb-5 max-w-2xl mx-auto">
            Your support changes lives in Ghana and beyond.
          </h2>
          <p className="text-green-light/70 text-lg max-w-xl mx-auto mb-10">
            Whether it's a one-time gift or a monthly contribution — every donation
            goes directly toward health, housing, and sustainability programs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/donate"
              className="bg-green-bright text-green-dark label-text px-8 py-3.5
                         rounded-pill hover:bg-white transition-colors"
            >
              Donate Once
            </Link>
            <Link
              to="/donate"
              className="border border-white/30 text-white label-text px-8 py-3.5
                         rounded-pill hover:bg-white/10 transition-colors"
            >
              Give Monthly
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
