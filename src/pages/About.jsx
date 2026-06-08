import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SectionHeader, Card, GreenDivider } from "../components/ui";
import { team as defaultTeam, siteConfig } from "../data/siteData";
import { api } from "../services/api";
import DonateCTA from "../components/sections/DonateCTA";

const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, delay } },
});

export default function About() {
  const [team, setTeam] = useState(defaultTeam);
  const [loadingTeam, setLoadingTeam] = useState(true);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const response = await api.getTeam();
        if (response.success && response.data) {
          setTeam(response.data);
        }
      } catch (error) {
        console.error("Error fetching team:", error);
        // Falls back to default team
      } finally {
        setLoadingTeam(false);
      }
    };

    fetchTeam();
  }, []);
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
            Our Story
          </motion.p>
          <motion.h1
            className="text-display-lg text-white max-w-2xl"
            variants={fadeUp(0.1)}
            initial="hidden"
            animate="visible"
          >
            Our Willingness Is Now.
          </motion.h1>
        </div>
      </section>

      {/* Origin Story */}
      <section className="section-pad bg-earth-sand">
        <div className="max-content container-pad max-w-narrow">
          <SectionHeader label="Origin Story" title="How OWIN Began" />
          <div className="prose prose-lg text-neutral-600 leading-relaxed space-y-5">
            <p>
              In June 2015, Accra, Ghana faced devastating floods after heavy rainfall,
              claiming 25 lives. The tragedy worsened when a petrol station explosion
              added another 200 casualties to the toll. This disaster deeply impacted
              the people of Accra and ignited a passion among the founders of OWIN
              Foundation for disaster relief and response.
            </p>
            <p>
              Inspired by these events, <strong>Vivian Ofori</strong>, acting President
              of OWIN Foundation, and close friends — all members of the Ghanaian
              Diaspora in Toronto — decided in July 2015 to take action. Their shared
              vision led to the creation of OWIN Foundation, a registered non-profit
              organization committed to Environmental Sustainability, Health Care, and
              Housing.
            </p>
            <p>
              OWIN stands for <em>Our Willingness Is Now</em> — a declaration that change
              doesn't wait. With the support of a dedicated team, we work to improve the
              lives of people in Canada, Ghana, and around the world, because we believe in
              making change contagious.
            </p>
          </div>
          <GreenDivider />
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section-pad bg-neutral-50">
        <div className="max-content container-pad">
          <SectionHeader
            label="Mission"
            title="What We Stand For"
            subtitle="OWIN Foundation is dedicated to creating sustainable change by empowering communities through environmental sustainability, healthcare, and housing initiatives."
          />
          <div className="grid sm:grid-cols-3 gap-6 mt-8">
            {[
              { icon: "🌿", label: "Environmental Sustainability" },
              { icon: "🩺", label: "Healthcare Access" },
              { icon: "🏠", label: "Safe Housing" },
            ].map((v) => (
              <Card key={v.label} className="p-6 text-center">
                <div className="text-4xl mb-3">{v.icon}</div>
                <p className="font-display text-green-dark text-lg">{v.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-pad bg-earth-sand">
        <div className="max-content container-pad">
          <SectionHeader
            label="The Team"
            title="The People Behind OWIN"
            subtitle="A dedicated group of Ghanaian-diaspora professionals driving lasting impact from Canada to Ghana."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member) => (
              <Card key={member.name || member._id} className="p-6">
                {/* Avatar with image or initials fallback */}
                {member.imageUrl ? (
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-16 h-16 rounded-full object-cover mb-4"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-green-light flex items-center
                                  justify-center mb-4 text-2xl font-display text-green-dark">
                    {member.name.charAt(0)}
                  </div>
                )}
                <p className="font-display text-green-dark text-lg">{member.name}</p>
                <p className="label-text text-green-olive mt-0.5 mb-3">{member.role}</p>
                {member.bio && (
                  <p className="text-sm text-neutral-600 leading-relaxed">{member.bio}</p>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Regions */}
      <section className="section-pad bg-green-light/30">
        <div className="max-content container-pad text-center">
          <p className="label-text mb-3">Where We Work</p>
          <h2 className="text-display-md text-green-dark mb-6">
            Serving Communities Across Ghana
          </h2>
          <p className="text-neutral-600 max-w-lg mx-auto mb-8">
            We currently have active support in Accra, Obuasi, and Kwahu — with
            ambitions to expand our reach throughout Ghana and deepen impact in Canada.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Accra", "Obuasi", "Kwahu", "Toronto, Canada"].map((r) => (
              <span key={r} className="bg-white border border-green-light
                                       text-green-dark label-text px-4 py-2 rounded-pill text-xs">
                📍 {r}
              </span>
            ))}
          </div>
        </div>
      </section>

      <DonateCTA />
    </>
  );
}
