import { Link } from "react-router-dom";
import { useState } from "react";
import { activeCampaign } from "../../data/siteData";

export default function CampaignBanner() {
  const [isHovered, setIsHovered] = useState(false);

  if (!activeCampaign.active) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[60] transition-transform duration-300 ease-out"
      style={{
        transform: isHovered ? "translateY(0)" : "translateY(-100%)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-green-mid text-white py-2.5 px-5 text-center">
        <p className="text-sm font-body flex flex-wrap items-center justify-center gap-2">
          <span className="font-semibold">🩺 {activeCampaign.title}</span>
          <span className="hidden sm:inline text-green-light/70">·</span>
          <span className="text-green-light/90">Deadline: {activeCampaign.deadline}</span>
          <Link
            to={activeCampaign.donateUrl}
            className="ml-2 bg-white text-green-dark label-text px-3 py-1 rounded-pill
                       hover:bg-green-light transition-colors text-xs"
          >
            Give Now →
          </Link>
        </p>
      </div>
    </div>
  );
}
