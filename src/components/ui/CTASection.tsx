import { Link } from "react-router-dom";
import { Phone, MessageCircle, Mail } from "lucide-react";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  variant?: "default" | "dark";
}

const CTASection = ({
  title = "Ready to Get Started?",
  subtitle = "Contact us today for reliable supplies, services, and support across Juba.",
  variant = "default",
}: CTASectionProps) => {
  const isDark = variant === "dark";

  return (
    <section
      className={`section-padding ${isDark ? "bg-ada-navy" : "bg-ada-red"}`}
    >
      <div className="container-ada text-center">
        <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-3">
          {title}
        </h2>
        <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="bg-primary-foreground text-ada-navy font-semibold rounded-xl px-6 py-3 shadow-md hover:opacity-95 transition-all"
          >
            Request a Quote
          </Link>
          <a
            href="https://wa.me/211911489777"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <MessageCircle className="w-5 h-5" />
            Message on WhatsApp
          </a>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-primary-foreground/90 text-sm">
          <a
            href="tel:+211911489777"
            className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
          >
            <Phone className="w-4 h-4" />
            +211 911 489 777
          </a>
          <a
            href="mailto:adaenterprises52@gmail.com"
            className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
          >
            <Mail className="w-4 h-4" />
            adaenterprises52@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
