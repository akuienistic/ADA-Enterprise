import Layout from "@/components/layout/Layout";
import CTASection from "@/components/ui/CTASection";
import { CheckCircle } from "lucide-react";
import hotelSupplyImg from "@/assets/HotelSupply.jpeg";
import tentSetupImg from "@/assets/TentSetup.jpg";
import corporateEventImg from "@/assets/CorperateEvent.jpeg";

const projects = [
  {
    title: "Hotel Supply Partnership",
    client: "Leading Juba Hotel",
    industry: "Hospitality",
    image: hotelSupplyImg,
    challenge:
      "A major hotel in Juba needed a reliable partner for consistent food and non-food supplies, facing challenges with inconsistent delivery times and quality from previous vendors.",
    solution:
      "ADA Enterprises established a dedicated supply chain with scheduled deliveries, quality control processes, and 24/7 emergency support for urgent requirements.",
    outcome: [
      "100% on-time delivery rate",
      "Reduced procurement costs by 15%",
      "Single point of contact for all supplies",
      "Emergency orders fulfilled within 4 hours",
    ],
  },
  {
    title: "NGO Camp Setup",
    client: "International Humanitarian Organization",
    industry: "NGO & Humanitarian",
    image: tentSetupImg,
    challenge:
      "An international NGO required rapid setup of temporary facilities for a field operation, including shelter, furniture, and ongoing supply support.",
    solution:
      "Complete turnkey solution including tents, furniture, generators, and establishment of a regular supply chain for food and operational materials.",
    outcome: [
      "Camp operational within 72 hours",
      "Ongoing weekly supply deliveries",
      "Cost-effective bulk procurement",
      "Local hiring and training support",
    ],
  },
  {
    title: "Corporate Event Excellence",
    client: "Major Corporate Client",
    industry: "Events",
    image: corporateEventImg,
    challenge:
      "A corporate client needed to host a 200+ person conference with professional standards, requiring venue setup, catering, audio-visual, and coordination.",
    solution:
      "End-to-end event management including premium tents, professional sound and lighting, catering services, and on-site event coordination team.",
    outcome: [
      "Seamless 3-day event execution",
      "Professional audio-visual setup",
      "Positive feedback from all attendees",
      "Client repeat booking confirmed",
    ],
  },
];

const Projects = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-ada-navy py-16 md:py-24">
        <div className="container-ada">
          <div className="max-w-3xl">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Our Projects
            </h1>
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              See how we've helped businesses and organizations across Juba achieve their goals with reliable supplies,
              services, and support.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="section-padding bg-background">
        <div className="container-ada">
          <div className="space-y-12">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="bg-card rounded-2xl overflow-hidden shadow-md border border-border"
              >
                <div className="grid lg:grid-cols-2">
                  {/* Content */}
                  <div className="p-6 md:p-8 lg:p-10 order-2 lg:order-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-ada-navy/10 text-ada-navy text-xs font-semibold px-3 py-1 rounded-full">
                        {project.industry}
                      </span>
                    </div>

                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">
                      {project.title}
                    </h2>
                    <p className="text-muted-foreground text-sm mb-6">Client: {project.client}</p>

                    <div className="space-y-5">
                      <div>
                        <h3 className="font-heading font-bold text-foreground mb-2">The Challenge</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{project.challenge}</p>
                      </div>

                      <div>
                        <h3 className="font-heading font-bold text-foreground mb-2">Our Solution</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{project.solution}</p>
                      </div>

                      <div>
                        <h3 className="font-heading font-bold text-foreground mb-3">Results</h3>
                        <ul className="grid sm:grid-cols-2 gap-2">
                          {project.outcome.map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-ada-red flex-shrink-0 mt-0.5" />
                              <span className="text-foreground text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Visual */}
                  <div className="order-1 lg:order-2">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover min-h-[250px] lg:min-h-full"
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-ada-navy">
        <div className="container-ada">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "50+", label: "Projects Completed" },
              { value: "100%", label: "Client Satisfaction" },
              { value: "24/7", label: "Support Available" },
              { value: "5+", label: "Industries Served" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-3xl md:text-4xl font-bold text-ada-gold mb-1">{stat.value}</p>
                <p className="text-primary-foreground/80 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Let's Discuss Your Project"
        subtitle="Every project starts with a conversation. Tell us what you need."
      />
    </Layout>
  );
};

export default Projects;
