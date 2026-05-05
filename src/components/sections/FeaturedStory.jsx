import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { featuredStory } from "../../data/siteData";

export default function FeaturedStory() {
  return (
    <section className="section-pad bg-earth-sand">
      <div className="max-content container-pad">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Image — placeholder until photos arrive */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-card bg-green-light/50 aspect-[4/3]
                            flex items-center justify-center border border-green-light overflow-hidden">
              {featuredStory.photo
                ? <img src={featuredStory.photo} alt={featuredStory.title}
                       className="w-full h-full object-cover" />
                : (
                  <div className="text-center text-green-olive/60 p-8">
                    <div className="text-6xl mb-3">🌿</div>
                    <p className="label-text text-xs">Project photo coming soon</p>
                  </div>
                )
              }
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="label-text mb-3">Featured Story</p>
            <h2 className="text-display-md text-green-dark mb-2">
              {featuredStory.title}
            </h2>
            <p className="label-text text-green-olive text-xs mb-5">
              📍 {featuredStory.location}
            </p>
            <p className="text-neutral-600 text-lg leading-relaxed mb-8">
              {featuredStory.body}
            </p>
            <Link
              to="/development"
              className="inline-block bg-green-mid text-white label-text px-7 py-3
                         rounded-pill hover:bg-green-dark transition-colors shadow-cta"
            >
              See All Projects →
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
