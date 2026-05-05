import { Link } from "react-router-dom";
import { activeCampaign } from "../../data/siteData";

export default function CampaignBanner() {
  if (!activeCampaign.active) return null;

  return (
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
  );
}
