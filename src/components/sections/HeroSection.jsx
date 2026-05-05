import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CampaignBanner from "./CampaignBanner";

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Campaign bar sits at the very top */}
      <CampaignBanner />

      {/* Hero background — swap the gradient for a real image using bg-[url(...)] when photos arrive */}
      <div
        className="flex-1 relative flex items-center pt-20"
        style={{
          background:
            "linear-gradient(135deg, #1E3A1A 0%, #2d5a27 50%, #4A8C3F 100%)",
        }}
      >
        {/* Decorative leaf pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 60%, #72C14B 0%, transparent 50%),
                              radial-gradient(circle at 75% 30%, #6B7C3A 0%, transparent 45%)`,
          }}
        />

        <div className="max-content container-pad w-full py-20 md:py-32 relative z-10">
          <div className="max-w-3xl">
            {/* Overline */}
            <motion.p
              className="label-text text-green-bright mb-6"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              Our Willingness Is Now
            </motion.p>

            {/* Headline */}
            <motion.h1
              className="text-display-xl text-white mb-6 leading-tight"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.12}
            >
              Empowering communities through health, safe homes, and sustainable futures.
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              className="text-green-light/80 text-lg md:text-xl max-w-xl mb-10 leading-relaxed"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.24}
            >
              From Ghana to Canada, OWIN Foundation drives lasting change through
              community-led programs in healthcare, housing, and environmental sustainability.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-4"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.36}
            >
              <Link
                to="/donate"
                className="bg-green-bright text-green-dark label-text px-8 py-3.5
                           rounded-pill hover:bg-white transition-colors shadow-cta"
              >
                Donate Now
              </Link>
              <Link
                to="/programs"
                className="border border-white/40 text-white label-text px-8 py-3.5
                           rounded-pill hover:bg-white/10 transition-colors"
              >
                Our Programs →
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bottom fade into page bg */}
        <div
          className="absolute bottom-0 left-0 right-0 h-20"
          style={{
            background: "linear-gradient(to bottom, transparent, #F2EDE4)",
          }}
        />
      </div>
    </section>
  );
}
