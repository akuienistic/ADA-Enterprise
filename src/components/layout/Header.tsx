import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import adaLogo from "@/assets/ada-logo.jpg";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/projects", label: "Projects" },
  { href: "/events", label: "Events & Rentals" },
  { href: "/music-studio", label: "Music Studio" },
  { href: "/contact", label: "Contact" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-card/95 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <nav className="container-ada" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <img
              src={adaLogo}
              alt="ADA Enterprises Logo"
              className="h-12 md:h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === link.href
                    ? "text-ada-red bg-ada-red/5"
                    : "text-foreground/80 hover:text-ada-navy hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact"
              className="btn-primary-ada text-sm"
            >
              Request a Quote
            </Link>
          </div>

          {/* Mobile Icons & Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="tel:+211911489777"
              className="p-2 text-ada-navy hover:bg-muted rounded-lg transition-colors"
              aria-label="Call us"
            >
              <Phone className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/211911489777"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#25D366] hover:bg-muted rounded-lg transition-colors"
              aria-label="WhatsApp us"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-foreground hover:bg-muted rounded-lg transition-colors"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                    location.pathname === link.href
                      ? "text-ada-red bg-ada-red/5"
                      : "text-foreground/80 hover:text-ada-navy hover:bg-muted"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-primary-ada text-center mt-3"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
