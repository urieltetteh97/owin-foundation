import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const links = [
  { label: "Home",        to: "/" },
  { label: "About",       to: "/about" },
  { label: "Programs",    to: "/programs" },
  { label: "Development", to: "/development" },
  { label: "Contact",     to: "/contact" },
];

export default function Navbar() {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navBase =
    "fixed top-0 left-0 right-0 z-50 transition-all duration-300";
  const navBg = scrolled
    ? "bg-earth-sand/95 backdrop-blur-sm shadow-sm"
    : "bg-transparent";

  const linkClass = ({ isActive }) =>
    `label-text transition-colors font-bold hover:bg-white hover:rounded px-3 py-2 ${
      isActive ? "text-white" : "text-neutral-600"
    }`;

  return (
    <header className={`${navBase} ${navBg}`}>
      <div className="max-content container-pad flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          {/* Replace with <img src="/logo.svg" alt="OWIN Foundation" className="h-9" /> once logo is provided */}
          <span className="font-display font-semibold text-green-500 text-lg leading-none">
            OWIN<br />
            <span className="text-green-500 text-xs tracking-widest font-body font-medium">
              FOUNDATION
            </span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass} end={l.to === "/"}>
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/donate"
            className="bg-green-500  label-text px-5 py-2 rounded
                       hover:bg-green-dark hover:text-white transition-colors shadow-cta"
          >
            Donate
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="md:hidden bg-earth-sand border-t border-green-light px-5 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={linkClass}
              end={l.to === "/"}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/donate"
            onClick={() => setOpen(false)}
            className="bg-green-mid text-white label-text px-5 py-3 rounded-pill
                       text-center hover:bg-green-dark transition-colors"
          >
            Donate
          </Link>
        </div>
      )}
    </header>
  );
}
