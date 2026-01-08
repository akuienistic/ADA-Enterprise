import Layout from "@/components/layout/Layout";
import CTASection from "@/components/ui/CTASection";
import { Music, MessageCircle } from "lucide-react";


const MusicStudio = () => {

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-ada-navy py-20 md:py-32">
        <div className="container-ada text-center">
          <span className="inline-block bg-ada-gold text-ada-dark text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            Now Open
          </span>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-6xl font-bold text-primary-foreground mb-6">
            ADA Music Studio
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-10 leading-relaxed">
            Professional recording studio and music label in Juba.
            World-class equipment, experienced engineers, and a space for South
            Sudan's creative talent to shine.
          </p>

          <a
            href="https://wa.me/211911489777"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-ada-red hover:bg-ada-red/90 text-primary-foreground font-semibold px-8 py-4 rounded-xl transition-colors inline-flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Book a Session
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-background">
        <div className="container-ada">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              What to Expect
            </h2>
            <p className="text-muted-foreground">
              A professional-grade studio built for artists who want to create,
              record, and produce music at the highest level.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Professional Recording",
                description:
                  "State-of-the-art recording equipment and acoustically treated rooms for pristine audio quality.",
              },
              {
                title: "Mixing & Mastering",
                description:
                  "Expert audio engineers to polish your tracks to international standards.",
              },
              {
                title: "Music Production",
                description:
                  "Full production services including beat making, arrangement, and composition.",
              },
              {
                title: "Artist Development",
                description:
                  "Guidance and mentorship to help emerging artists grow their careers.",
              },
              {
                title: "Music Label Services",
                description:
                  "Distribution, promotion, and management support for signed artists.",
              },
              {
                title: "Event Sound",
                description:
                  "Professional sound equipment and technicians for live performances.",
              },
            ].map((feature) => (
              <div key={feature.title} className="card-ada">
                <div className="w-12 h-12 bg-ada-red/10 rounded-xl flex items-center justify-center mb-4">
                  <Music className="w-6 h-6 text-ada-red" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section-padding bg-secondary">
        <div className="container-ada text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
            Have Questions?
          </h2>
          <p className="text-muted-foreground mb-6">
            Reach out to learn more about booking and collaboration opportunities.
          </p>
          <a
            href="https://wa.me/211911489777"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp inline-flex mx-auto"
          >
            <MessageCircle className="w-5 h-5" />
            Contact Us on WhatsApp
          </a>
        </div>
      </section>

      <CTASection
        title="Ready to Record?"
        subtitle="Contact us today to book your studio session or learn more about our services."
        variant="dark"
      />
    </Layout>
  );
};

export default MusicStudio;
