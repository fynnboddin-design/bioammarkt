export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center ${className}`}>
      <div className="relative border-2 border-primary rounded-md px-3 py-2">
        <div className="absolute -top-3 -right-2 text-primary">
          <svg width="36" height="28" viewBox="0 0 36 28" fill="currentColor">
            <path d="M18 4 C 8 4, 2 12, 4 24 C 14 22, 20 16, 18 4 Z" opacity="0.9"/>
            <path d="M22 2 C 32 4, 34 14, 28 24 C 20 20, 18 12, 22 2 Z" opacity="0.7"/>
          </svg>
        </div>
        <div className="font-serif leading-none text-primary">
          <div className="text-lg italic">Bio<span className="text-xs not-italic ml-1">am</span></div>
          <div className="text-lg font-semibold">Markt</div>
        </div>
      </div>
    </div>
  );
}

export function LeafIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 20" fill="currentColor">
      <path d="M12 2 C 6 2, 2 7, 3 16 C 10 15, 14 11, 12 2 Z" opacity="0.9"/>
      <path d="M14 1 C 20 2, 22 8, 19 16 C 13 13, 12 7, 14 1 Z" opacity="0.7"/>
    </svg>
  );
}
