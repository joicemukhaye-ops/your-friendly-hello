import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/creed-logo.png.asset.json";

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="Creed Design & Construction home">
      <img
        src={logoAsset.url}
        alt=""
        width={220}
        height={64}
        className="h-12 w-auto object-contain md:h-14"
      />
    </Link>
  );
}
