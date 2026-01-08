import Layout from "@/components/layout/Layout";
import CTASection from "@/components/ui/CTASection";
import { Link } from "react-router-dom";
import {
  Package,
  Truck,
  Sofa,
  Car,
  Brush,
  UtensilsCrossed,
  Hammer,
  Smartphone,
  Tent,
  Speaker,
  Lightbulb,
  Calendar,
  Plane,
  ArrowUpDown,
  Music,
  MessageCircle,
} from "lucide-react";

const serviceCategories = [
  {
    id: "supply",
    title: "Supply & Procurement",
    description:
      "Reliable sourcing and delivery of essential goods for businesses across Juba.",
    services: [
      {
        icon: Package,
        name: "Food & Non-Food Items",
        description:
          "Complete supply chain solutions for hotels, restaurants, camps, and offices. Bulk orders with competitive pricing.",
      },
      {
        icon: Hammer,
        name: "Construction Materials",
        description:
          "Quality building materials sourced and delivered to your construction site on time.",
      },
      {
        icon: Sofa,
        name: "Furniture Supply",
        description:
          "Office, hotel, and residential furniture from trusted manufacturers.",
      },
      {
        icon: Car,
        name: "Vehicle Supply",
        description:
          "New and used vehicles for businesses, organizations, and individuals.",
      },
    ],
  },
  {
    id: "operations",
    title: "Operations & Support",
    description:
      "Professional services to keep your facilities running smoothly.",
    services: [
      {
        icon: Brush,
        name: "Cleaning & Decoration",
        description:
          "Commercial cleaning services and professional interior/exterior decoration.",
      },
      {
        icon: UtensilsCrossed,
        name: "Catering Services",
        description:
          "Corporate catering, event catering, and daily meal services for organizations.",
      },
      {
        icon: Hammer,
        name: "Renovation Services",
        description:
          "Building renovation, refurbishment, and maintenance services.",
      },
      {
        icon: Smartphone,
        name: "Mobile Money Services",
        description:
          "Convenient mobile money solutions and financial transaction support.",
      },
    ],
  },
  {
    id: "events",
    title: "Events & Rentals",
    description:
      "Everything you need to host successful events of any size.",
    services: [
      {
        icon: Tent,
        name: "Tents & Canopies",
        description:
          "High-quality tents for outdoor events, weddings, conferences, and gatherings.",
      },
      {
        icon: Sofa,
        name: "Chairs & Tables",
        description:
          "Comfortable seating and table rentals for any event size.",
      },
      {
        icon: Speaker,
        name: "Sound Systems",
        description:
          "Professional audio equipment with setup and technical support.",
      },
      {
        icon: Lightbulb,
        name: "Lighting & Stage",
        description:
          "Event lighting, staging, and visual equipment rentals.",
      },
      {
        icon: Calendar,
        name: "Event Management",
        description:
          "Full-service event planning and coordination from concept to completion.",
      },
    ],
  },
  {
    id: "specialized",
    title: "Specialized Solutions",
    description:
      "Technical and specialized services for unique requirements.",
    services: [
      {
        icon: Plane,
        name: "Aviation Services",
        description:
          "Ground handling, logistics support, and aviation-related services.",
      },
      {
        icon: ArrowUpDown,
        name: "Elevator Services",
        description:
          "Installation, maintenance, modernization, and 24/7 repair services for elevators and lifts.",
      },
      {
        icon: Music,
        name: "Music Label & Studio",
        description:
          "Coming 2025: Professional recording studio and artist management services.",
        comingSoon: true,
      },
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-ada-navy py-16 md:py-24">
        <div className="container-ada">
          <div className="max-w-3xl">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Our Services
            </h1>
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              Comprehensive solutions for businesses across Juba. From daily
              supplies to major events, we're your reliable partner for everything
              you need.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      {serviceCategories.map((category, index) => (
        <section
          key={category.id}
          id={category.id}
          className={`section-padding ${
            index % 2 === 0 ? "bg-background" : "bg-secondary"
          }`}
        >
          <div className="container-ada">
            <div className="mb-10">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
                {category.title}
              </h2>
              <p className="text-muted-foreground max-w-2xl">
                {category.description}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.services.map((service) => (
                <div
                  key={service.name}
                  className={`bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow ${
                    service.comingSoon ? "border-2 border-dashed border-ada-gold" : ""
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-ada-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-6 h-6 text-ada-red" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-heading font-bold text-foreground">
                          {service.name}
                        </h3>
                        {service.comingSoon && (
                          <span className="text-xs bg-ada-gold text-ada-dark px-2 py-0.5 rounded-full font-medium">
                            Coming Soon
                          </span>
                        )}
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {service.description}
                      </p>
                      {!service.comingSoon && (
                        <a
                          href="https://wa.me/211911489777"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-ada-red font-medium text-sm hover:underline"
                        >
                          <MessageCircle className="w-4 h-4" />
                          Inquire Now
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <CTASection
        title="Need a Custom Solution?"
        subtitle="Contact us to discuss your specific requirements. We're here to help."
      />
    </Layout>
  );
};

export default Services;
