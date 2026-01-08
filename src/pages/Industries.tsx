import Layout from "@/components/layout/Layout";
import CTASection from "@/components/ui/CTASection";
import {
  Hotel,
  Building2,
  Briefcase,
  HardHat,
  PartyPopper,
  Music,
  CheckCircle,
} from "lucide-react";

const industries = [
  {
    icon: Hotel,
    title: "Hotels & Restaurants",
    description:
      "Comprehensive supply chain and operational support for the hospitality sector.",
    benefits: [
      "Daily food and non-food supplies",
      "Cleaning and housekeeping services",
      "Furniture and equipment supply",
      "Catering for special events",
      "Renovation and maintenance",
    ],
  },
  {
    icon: Building2,
    title: "NGOs & Humanitarian Camps",
    description:
      "Reliable supplies and logistics support for humanitarian operations across South Sudan.",
    benefits: [
      "Bulk procurement and delivery",
      "Camp setup and equipment",
      "Catering services for staff",
      "Tent and shelter solutions",
      "Mobile money services",
    ],
  },
  {
    icon: Briefcase,
    title: "Offices & Corporate",
    description:
      "Complete facility management and supply solutions for modern workplaces.",
    benefits: [
      "Office furniture supply",
      "Regular cleaning services",
      "Corporate catering",
      "Event support for meetings",
      "Facility maintenance",
    ],
  },
  {
    icon: HardHat,
    title: "Construction",
    description:
      "Quality materials and services for construction projects of all sizes.",
    benefits: [
      "Construction materials supply",
      "Equipment rentals",
      "Site cleaning services",
      "Renovation expertise",
      "Project logistics support",
    ],
  },
  {
    icon: PartyPopper,
    title: "Event Organizers",
    description:
      "Everything needed to create memorable events from intimate gatherings to large conferences.",
    benefits: [
      "Tents and structures",
      "Seating and tables",
      "Sound and lighting systems",
      "Catering services",
      "Full event management",
    ],
  },
  {
    icon: Music,
    title: "Artists & Musicians",
    description:
      "Supporting the creative community with professional services and upcoming studio facilities.",
    benefits: [
      "Recording studio (Coming 2025)",
      "Music label services",
      "Event sound systems",
      "Artist management",
      "Performance equipment",
    ],
    comingSoon: true,
  },
];

const Industries = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-ada-navy py-16 md:py-24">
        <div className="container-ada">
          <div className="max-w-3xl">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Industries We Serve
            </h1>
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              Tailored solutions for diverse sectors across Juba. We understand
              your unique challenges and deliver services that meet your specific
              needs.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section-padding bg-background">
        <div className="container-ada">
          <div className="grid lg:grid-cols-2 gap-8">
            {industries.map((industry) => (
              <div
                key={industry.title}
                className={`bg-card rounded-2xl p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow ${
                  industry.comingSoon
                    ? "border-2 border-dashed border-ada-gold"
                    : "border border-border"
                }`}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-ada-navy rounded-xl flex items-center justify-center flex-shrink-0">
                    <industry.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h2 className="font-heading text-xl font-bold text-foreground">
                        {industry.title}
                      </h2>
                      {industry.comingSoon && (
                        <span className="text-xs bg-ada-gold text-ada-dark px-2 py-0.5 rounded-full font-medium">
                          Expanding
                        </span>
                      )}
                    </div>
                    <p className="text-muted-foreground">{industry.description}</p>
                  </div>
                </div>

                <div className="border-t border-border pt-5">
                  <p className="text-sm font-medium text-foreground mb-3">
                    What we provide:
                  </p>
                  <ul className="space-y-2">
                    {industry.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-ada-red flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Partner With Us"
        subtitle="Let's discuss how we can support your organization with reliable supplies and services."
        variant="dark"
      />
    </Layout>
  );
};

export default Industries;
