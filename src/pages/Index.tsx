import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, MapPin, Users, Clock, Truck } from "lucide-react";
import {
  Package,
  Brush,
  CalendarDays,
  Settings,
  Hotel,
  Building,
  HardHat,
  Music,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import ServiceCard from "@/components/ui/ServiceCard";
import IndustryCard from "@/components/ui/IndustryCard";
import TrustBadge from "@/components/ui/TrustBadge";
import CTASection from "@/components/ui/CTASection";
import heroImage from "@/assets/hero-juba.jpg";
import ceoImage from "@/assets/ceo-jackline.jpg";

const trustBadges = [
  { icon: MapPin, text: "Operating in Juba" },
  { icon: Users, text: "Trusted by Hotels & NGOs" },
  { icon: Clock, text: "24/7 Support" },
  { icon: Truck, text: "On-time Deliveries" },
];

const services = [
  {
    icon: Package,
    title: "Supply & Procurement",
    description:
      "Food, non-food items, construction materials, furniture, and vehicle supply for businesses across Juba.",
  },
  {
    icon: Brush,
    title: "Services & Operations",
    description:
      "Professional cleaning, decoration, catering, renovation, and mobile money services.",
  },
  {
    icon: CalendarDays,
    title: "Events & Rentals",
    description:
      "Tents, chairs, sound systems, lighting, and full event management for any occasion.",
  },
  {
    icon: Settings,
    title: "Specialized Solutions",
    description:
      "Aviation services, elevator installation & maintenance, and our upcoming music studio.",
  },
];

const industries = [
  {
    icon: Hotel,
    title: "Hotels & Restaurants",
    description: "Complete supply chain and operational support for hospitality.",
  },
  {
    icon: Building,
    title: "NGOs & Camps",
    description: "Reliable supplies and logistics for humanitarian operations.",
  },
  {
    icon: Building,
    title: "Offices & Corporates",
    description: "Furniture, cleaning, catering, and facility management.",
  },
  {
    icon: HardHat,
    title: "Construction",
    description: "Materials supply, equipment, and renovation services.",
  },
  {
    icon: CalendarDays,
    title: "Event Organizers",
    description: "Everything you need to host memorable events.",
  },
  {
    icon: Music,
    title: "Artists & Musicians",
    description: "Professional recording studio and music label services.",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-ada-navy/95 via-ada-navy/80 to-ada-navy/60" />
        </div>

        <div className="container-ada relative z-10 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in">
              Powering Businesses & Communities Across South Sudan
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Reliable supply, services, and operational support for hotels, NGOs,
              construction projects, events, and businesses across Juba. Fast
              delivery, trusted relationships, and real local know-how.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Link
                to="/contact"
                className="btn-primary-ada inline-flex items-center justify-center gap-2 text-lg"
              >
                Request a Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="https://wa.me/211911489777"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp justify-center text-lg"
              >
                <MessageCircle className="w-5 h-5" />
                Message on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-secondary py-6 border-y border-border">
        <div className="container-ada">
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {trustBadges.map((badge) => (
              <TrustBadge key={badge.text} icon={badge.icon} text={badge.text} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-background">
        <div className="container-ada">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Your One Phone Number For Everything
            </h2>
            <p className="text-muted-foreground">
              From supplies to events, construction to catering — we've got you
              covered with comprehensive services tailored for businesses in Juba.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="btn-secondary-ada inline-flex items-center gap-2"
            >
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section-padding bg-secondary">
        <div className="container-ada">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Industries We Serve
            </h2>
            <p className="text-muted-foreground">
              Trusted by leading organizations across multiple sectors in South Sudan.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map((industry) => (
              <IndustryCard key={industry.title} {...industry} />
            ))}
          </div>
        </div>
      </section>

      {/* Music Studio Section */}
      <section className="section-padding bg-ada-navy">
        <div className="container-ada">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-ada-gold text-ada-dark text-sm font-semibold px-3 py-1 rounded-full mb-4">
                Now Open
              </span>
              <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
                ADA Music Studio
              </h2>
              <p className="text-primary-foreground/90 leading-relaxed mb-6">
                Professional recording studio and music label in Juba. Experience 
                world-class recording facilities and take your music career to the 
                next level.
              </p>
              <Link
                to="/music-studio"
                className="bg-ada-red hover:bg-ada-red/90 text-primary-foreground font-semibold px-6 py-3 rounded-xl transition-colors inline-flex items-center gap-2"
              >
                Explore the Studio <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-ada-red/30 to-ada-gold/20 flex items-center justify-center">
                <Music className="w-24 h-24 text-primary-foreground/50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Quote */}
      <section className="section-padding bg-background">
        <div className="container-ada">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <img
                  src={ceoImage}
                  alt="Ms. Jackline Achuei Deng Ajiing - CEO & Founder"
                  className="rounded-2xl shadow-lg w-full max-w-xs mx-auto"
                  loading="lazy"
                />
              </div>
              <div className="md:col-span-2">
                <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-6 italic">
                  "We are committed to delivering exceptional quality and
                  unparalleled service in every project we undertake, ensuring
                  that our clients receive the best solutions tailored to their
                  unique needs."
                </blockquote>
                <div>
                  <p className="font-heading font-bold text-foreground">
                    Ms. Jackline Achuei Deng Ajiing
                  </p>
                  <p className="text-muted-foreground text-sm">CEO & Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </Layout>
  );
};

export default Index;
