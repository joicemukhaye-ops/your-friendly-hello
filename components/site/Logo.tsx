import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/creed-logo.png";

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link
      to="/"
      className={
        inverted
          ? "inline-flex items-center rounded-sm bg-white p-2 shadow-lift"
          : "flex items-center gap-3"
      }
      aria-label="Creed Design & Construction home"
    >
      <img
        src={logoAsset}
        alt="Creed Design & Construction Company East Africa Ltd"
        width={408}
        height={437}
        className={
          inverted ? "h-24 w-auto object-contain" : "h-[4.5rem] w-auto object-contain md:h-20"
        }
      />
    </Link>
  );
}
