import Layout from "@/components/layout/Layout";
import CTASection from "@/components/ui/CTASection";
import { CheckCircle } from "lucide-react";
import ceoImage from "@/assets/ceo-jackline.jpg";

const coreValues = [
  {
    title: "Integrity",
    description:
      "We conduct our business with the highest ethical standards, ensuring transparency and honesty in all our dealings.",
  },
  {
    title: "Innovation",
    description:
      "We embrace change and continuously seek new and better ways to serve our clients, staying ahead of industry trends.",
  },
  {
    title: "Excellence",
    description:
      "We are dedicated to delivering superior quality in every service we provide, consistently striving to exceed our clients' expectations.",
  },
  {
    title: "Customer Focus",
    description:
      "Our clients are at the core of everything we do. We listen, understand, and respond to their needs with personalized solutions.",
  },
  {
    title: "Sustainability",
    description:
      "We are committed to sustainable business practices that benefit the environment and the communities in which we operate.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-ada-navy py-16 md:py-24">
        <div className="container-ada">
          <div className="max-w-3xl">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              About ADA Enterprises
            </h1>
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              A diversified service company based in Juba, South Sudan, committed
              to delivering exceptional quality and customer satisfaction across a
              wide range of industries.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding bg-background">
        <div className="container-ada">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
                Who We Are
              </h2>
              <div className="prose prose-lg text-muted-foreground">
                <p className="mb-4 leading-relaxed">
                  ADA Enterprises Co. Ltd is a diversified company dedicated to
                  providing top-notch services across multiple sectors. Since our
                  inception, we have grown into a trusted and reliable partner for
                  businesses and individuals alike.
                </p>
                <p className="mb-4 leading-relaxed">
                  Our expertise spans across Music Label & Management, Food &
                  Non-Food Items Supply, Cleaning & Decoration Services, Aviation
                  Services, Furniture Supply, Mobile Money Services, Car Supply,
                  Construction Materials Supply, Renovation Services, Catering
                  Services, Tents, Chairs, Sound Systems, and Oil and Gas Services.
                </p>
                <p className="leading-relaxed">
                  With a foundation built on integrity, innovation, and excellence,
                  we aim to be a leading provider of various essential services,
                  catering to the diverse needs of our clientele.
                </p>
              </div>
            </div>

            {/* Vision & Mission */}
            <div className="space-y-6">
              <div className="bg-ada-navy text-primary-foreground rounded-2xl p-6 md:p-8">
                <h3 className="font-heading text-xl font-bold mb-3">Our Vision</h3>
                <p className="text-primary-foreground/90 leading-relaxed">
                  To be the most trusted and innovative multi-service company,
                  consistently exceeding customer expectations and contributing to
                  the well-being and progress of the communities we serve.
                </p>
              </div>
              <div className="bg-ada-red text-primary-foreground rounded-2xl p-6 md:p-8">
                <h3 className="font-heading text-xl font-bold mb-3">Our Mission</h3>
                <p className="text-primary-foreground/90 leading-relaxed">
                  To provide high-quality services across multiple sectors through
                  a commitment to professionalism, reliability, and continuous
                  improvement, ensuring the highest level of customer satisfaction
                  and fostering long-term relationships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-secondary">
        <div className="container-ada">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground">
              The principles that guide everything we do at ADA Enterprises.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value) => (
              <div
                key={value.title}
                className="bg-card rounded-xl p-6 border-l-4 border-ada-red shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-ada-red flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-heading font-bold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-background">
        <div className="container-ada">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Leadership
            </h2>
          </div>

          <div className="max-w-md mx-auto text-center">
            <img
              src={ceoImage}
              alt="Ms. Jackline Achuei Deng Ajiing"
              className="w-48 h-48 object-cover rounded-full mx-auto mb-6 shadow-lg"
              loading="lazy"
            />
            <h3 className="font-heading text-xl font-bold text-foreground">
              Ms. Jackline Achuei Deng Ajiing
            </h3>
            <p className="text-ada-red font-medium mb-4">CEO & Founder</p>
            <p className="text-muted-foreground leading-relaxed">
              Leading ADA Enterprises with a vision of excellence and a commitment
              to delivering exceptional value to our clients and communities across
              South Sudan.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection variant="dark" />
    </Layout>
  );
};

export default About;
