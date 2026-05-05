import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const footerLinks = [
  { label: "About",       to: "/about" },
  { label: "Programs",    to: "/programs" },
  { label: "Development", to: "/development" },
  { label: "Donate",      to: "/donate" },
  { label: "Contact",     to: "/contact" },
];

const socials = [
  { icon: FaFacebook,  href: "#", label: "Facebook" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaTwitter,   href: "#", label: "Twitter" },
];

export default function Footer() {
  return (
    <footer className="bg-green-dark text-green-light">
      <div className="max-content container-pad py-16 grid md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <p className="font-display text-xl text-white mb-3">OWIN Foundation</p>
          <p className="text-sm text-green-light/70 leading-relaxed max-w-xs">
            Our Willingness Is Now. Empowering communities through health,
            housing, and environmental sustainability.
          </p>
          {/* Social links */}
          <div className="flex gap-4 mt-5">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="text-green-light/60 hover:text-green-bright transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <p className="label-text text-green-bright mb-4">Quick Links</p>
          <ul className="flex flex-col gap-2">
            {footerLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-sm text-green-light/70 hover:text-white transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Snippet */}
        <div>
          <p className="label-text text-green-bright mb-4">Get In Touch</p>
          <p className="text-sm text-green-light/70 mb-1">info@owinfoundation.org</p>
          <p className="text-sm text-green-light/70 mb-5">Toronto, Canada · Accra, Ghana</p>
          <Link
            to="/donate"
            className="inline-block bg-green-bright text-green-dark label-text
                       px-5 py-2.5 rounded-pill hover:bg-green-light transition-colors"
          >
            Donate Now
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-green-mid/30">
        <div className="max-content container-pad py-4 flex flex-col sm:flex-row
                        items-center justify-between gap-2">
          <p className="text-xs text-green-light/40">
            © {new Date().getFullYear()} OWIN Foundation. All rights reserved.
          </p>
          <p className="text-xs text-green-light/40">
            Registered Non-Profit · Canada
          </p>
        </div>
      </div>
    </footer>
  );
}
