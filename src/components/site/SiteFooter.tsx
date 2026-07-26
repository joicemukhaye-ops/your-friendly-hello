import { Link } from "@tanstack/react-router";
import { Download, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { COMPANY_PROFILE_URL, whatsappLink } from "@/lib/contact";

export function SiteFooter() {
  return (
    <footer className="mt-24">
      <div className="h-2 accent-gradient" />
      <div className="brand-gradient">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3">
          <div>
            <Logo inverted />
            <p className="mt-4 max-w-xs text-sm text-primary-foreground/75">
              A premier construction and design firm delivering innovative, sustainable and
              high-quality building solutions across East Africa.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-accent">Explore</h3>
            <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link to="/about" className="hover:text-accent">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/mission-and-vision" className="hover:text-accent">
                  Mission &amp; Vision
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-accent">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-accent">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-accent">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/quote" className="hover:text-accent">
                  Get a Quote
                </Link>
              </li>
              <li>
                <Link to="/payments" className="hover:text-accent">
                  Make a Payment
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accent">
                  Contact Us
                </Link>
              </li>
              <li>
                <a
                  href={COMPANY_PROFILE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-accent"
                >
                  <Download className="h-3.5 w-3.5" aria-hidden="true" />
                  Company Profile
                </a>
              </li>
            </ul>
            <a
              href={whatsappLink("Hello Creed, I'd like to talk about a project.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-sm bg-[#25D366] px-4 py-2.5 text-xs font-bold uppercase tracking-[0.13em] text-white"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp us
            </a>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-accent">Get in touch</h3>
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                Grove Mall, Kitintale, Kampala.
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <span>
                  +256 702 806 852
                  <br />
                  +256 700 608 641
                  <br />
                  +256 703 934 444
                </span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <a
                  href="mailto:creed.design.constructioncompany@gmail.com"
                  className="break-all hover:text-accent"
                >
                  creed.design.constructioncompany@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/15">
          <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-primary-foreground/60">
            © {new Date().getFullYear()} Creed Design and Construction Company East Africa Ltd. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
