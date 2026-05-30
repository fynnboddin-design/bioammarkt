import logoSrc from "@/assets/logo.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src={logoSrc}
      alt="Bio am Markt"
      className={`h-14 w-auto object-contain select-none ${className}`}
      draggable={false}
    />
  );
}

export function LeafIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      {/* Left leaf */}
      <path d="M18 30 C 8 26, 4 16, 8 4 C 18 8, 22 18, 18 30 Z" fill="currentColor" fillOpacity="0.85" stroke="none" />
      <path d="M10 6 C 14 14, 16 22, 18 30" stroke="currentColor" strokeOpacity="0.4" />
      {/* Right leaf */}
      <path d="M22 30 C 32 26, 36 16, 32 4 C 22 8, 18 18, 22 30 Z" fill="currentColor" fillOpacity="0.7" stroke="none" />
      <path d="M30 6 C 26 14, 24 22, 22 30" stroke="currentColor" strokeOpacity="0.4" />
    </svg>
  );
}
