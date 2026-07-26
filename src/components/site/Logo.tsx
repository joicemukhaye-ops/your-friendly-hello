import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/creed-logo.png.asset.json";

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="Creed Design & Construction home">
      <img
        src={logoAsset.url}
        alt=""
        width={260}
        height={76}
        className="h-14 w-auto object-contain md:h-16"
      />
    </Link>
  );
}
