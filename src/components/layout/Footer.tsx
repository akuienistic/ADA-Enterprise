import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageCircle, Facebook, Instagram, Linkedin } from "lucide-react";
import adaLogo from "@/assets/ada-logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-ada-navy text-primary-foreground">
      <div className="container-ada py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src={adaLogo}
              alt="ADA Enterprises"
              className="h-16 w-auto mb-4 bg-white rounded-lg p-2"
            />
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4">
              Serving Juba with integrity, reliability, and scale. Your trusted partner for supplies, services, and events.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="p-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {[
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Our Services" },
                { href: "/industries", label: "Industries" },
                { href: "/projects", label: "Projects" },
                { href: "/events", label: "Events & Rentals" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-ada-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2.5">
              {[
                "Supply & Procurement",
                "Cleaning & Decoration",
                "Catering Services",
                "Event Rentals",
                "Construction Materials",
                "Elevator Services",
              ].map((service) => (
                <li key={service}>
                  <span className="text-primary-foreground/80 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-ada-gold flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80 text-sm">
                  Thongpiny, Airport Road, Opposite Zain HQ, Pensions Plaza, 2nd Floor, Office 21, Juba
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-ada-gold flex-shrink-0" />
                <a
                  href="tel:+211911489777"
                  className="text-primary-foreground/80 hover:text-ada-gold transition-colors text-sm"
                >
                  +211 911 489 777
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-ada-gold flex-shrink-0" />
                <a
                  href="https://wa.me/211911489777"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-ada-gold transition-colors text-sm"
                >
                  WhatsApp Us
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-ada-gold flex-shrink-0" />
                <a
                  href="mailto:adaenterprises52@gmail.com"
                  className="text-primary-foreground/80 hover:text-ada-gold transition-colors text-sm"
                >
                  adaenterprises52@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-ada py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} ADA Enterprises Co. Ltd. All rights reserved.</p>
          <p>
            Project handled by{" "}
            <a
              href="https://web.facebook.com/profile.php?id=61572703111798"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ada-gold hover:underline"
            >
              Simon Star Tech
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
