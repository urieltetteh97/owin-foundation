// ─── Button ───────────────────────────────────────────────
// Usage: <Button variant="primary" size="lg">Donate Now</Button>
// variants: "primary" | "outline" | "ghost"
// sizes:    "sm" | "md" | "lg"

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-pill font-body font-medium transition-all focus-visible:ring-2 focus-visible:ring-green-bright";

  const variants = {
    primary:
      "bg-green-mid text-white hover:bg-green-dark shadow-cta hover:shadow-none",
    outline:
      "border-2 border-green-mid text-green-mid hover:bg-green-mid hover:text-white",
    ghost:
      "text-green-mid hover:bg-green-light/60",
  };

  const sizes = {
    sm: "text-xs px-4 py-2",
    md: "text-sm px-6 py-2.5",
    lg: "text-base px-8 py-3.5",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}


// ─── Card ─────────────────────────────────────────────────
// A flexible content card with optional hover lift
export function Card({ children, className = "", hover = true }) {
  return (
    <div
      className={`bg-white rounded-card shadow-card
                  ${hover ? "hover:shadow-card-hover hover:-translate-y-1" : ""}
                  transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
}


// ─── SectionHeader ────────────────────────────────────────
// Consistent section titles with optional overline label
// Usage: <SectionHeader label="Our Work" title="Three Pillars of Impact" center />
export function SectionHeader({ label, title, subtitle, center = false }) {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      {label && (
        <p className={`label-text mb-3 ${center ? "justify-center flex" : ""}`}>
          {label}
        </p>
      )}
      <h2 className="text-display-lg text-green-dark">{title}</h2>
      {subtitle && (
        <p className={`mt-4 text-neutral-600 max-w-2xl text-lg leading-relaxed
                       ${center ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}


// ─── Badge ────────────────────────────────────────────────
// Small pill badge, useful for program tags / status
export function Badge({ children, variant = "green" }) {
  const variants = {
    green:  "bg-green-light text-green-dark",
    olive:  "bg-green-olive/10 text-green-olive",
    earth:  "bg-earth-clay/20 text-neutral-700",
    urgent: "bg-red-50 text-red-700",
  };
  return (
    <span className={`label-text px-3 py-1 rounded-pill ${variants[variant]}`}>
      {children}
    </span>
  );
}


// ─── Divider ──────────────────────────────────────────────
export function GreenDivider() {
  return (
    <div className="flex items-center gap-3 my-6">
      <div className="h-px flex-1 bg-green-light" />
      <div className="w-2 h-2 rounded-full bg-green-bright" />
      <div className="h-px flex-1 bg-green-light" />
    </div>
  );
}
