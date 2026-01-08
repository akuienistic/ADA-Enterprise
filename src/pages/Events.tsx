import Layout from "@/components/layout/Layout";
import CTASection from "@/components/ui/CTASection";
import { Tent, Speaker, Lightbulb, Users, MessageCircle, CheckCircle } from "lucide-react";

const eventPackages = [
  {
    name: "Starter",
    description: "Perfect for small gatherings and intimate events",
    features: [
      "Up to 50 guests capacity",
      "Basic tent setup",
      "Chairs and tables",
      "Basic sound system",
    ],
    cta: "Get Quote",
  },
  {
    name: "Standard",
    description: "Ideal for corporate events and medium celebrations",
    features: [
      "Up to 150 guests capacity",
      "Premium tent with decoration",
      "Comfortable seating arrangement",
      "Professional sound system",
      "Basic lighting package",
      "Event coordination",
    ],
    popular: true,
    cta: "Get Quote",
  },
  {
    name: "Premium",
    description: "Full-service for large events and special occasions",
    features: [
      "200+ guests capacity",
      "Luxury tent with full decoration",
      "Premium furniture and setup",
      "Concert-grade sound system",
      "Professional lighting and stage",
      "Full event management",
      "Catering coordination",
    ],
    cta: "Get Quote",
  },
];

const rentalItems = [
  {
    icon: Tent,
    name: "Tents & Canopies",
    description: "Various sizes for outdoor events, from intimate gatherings to large conferences.",
  },
  {
    icon: Users,
    name: "Chairs & Tables",
    description: "Comfortable seating and tables in various styles and quantities.",
  },
  {
    icon: Speaker,
    name: "Sound Systems",
    description: "Professional audio equipment for clear, powerful sound at any venue.",
  },
  {
    icon: Lightbulb,
    name: "Lighting & Stage",
    description: "Event lighting, staging, and visual equipment for stunning presentations.",
  },
];

const Events = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-ada-navy py-16 md:py-24">
        <div className="container-ada">
          <div className="max-w-3xl">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Events & Rentals
            </h1>
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              Everything you need to host successful events of any size. From
              intimate gatherings to large corporate functions, we provide the
              equipment, setup, and support you need.
            </p>
          </div>
        </div>
      </section>

      {/* Rental Items */}
      <section className="section-padding bg-background">
        <div className="container-ada">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Equipment Rentals
            </h2>
            <p className="text-muted-foreground">
              High-quality event equipment available for rent with professional
              setup and support.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {rentalItems.map((item) => (
              <div key={item.name} className="card-ada text-center">
                <div className="w-14 h-14 bg-ada-navy rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2">
                  {item.name}
                </h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="section-padding bg-secondary">
        <div className="container-ada">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Event Packages
            </h2>
            <p className="text-muted-foreground">
              Choose a package that fits your event size and needs, or contact us
              for a custom solution.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {eventPackages.map((pkg) => (
              <div
                key={pkg.name}
                className={`bg-card rounded-2xl p-6 md:p-8 shadow-md relative ${
                  pkg.popular ? "ring-2 ring-ada-red" : "border border-border"
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-ada-red text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <div className="text-center mb-6">
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">{pkg.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-ada-red flex-shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/211911489777"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold transition-colors ${
                    pkg.popular
                      ? "bg-ada-red text-primary-foreground hover:bg-ada-red/90"
                      : "border-2 border-ada-navy text-ada-navy hover:bg-ada-navy hover:text-primary-foreground"
                  }`}
                >
                  <MessageCircle className="w-5 h-5" />
                  {pkg.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="section-padding bg-background">
        <div className="container-ada">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                Request Event Quote
              </h2>
              <p className="text-muted-foreground">
                Tell us about your event and we'll provide a customized quote.
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! We'll contact you with a quote soon.");
              }}
              className="bg-card rounded-2xl p-6 md:p-8 shadow-md border border-border space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Event Date
                  </label>
                  <input
                    type="date"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus-ring"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Expected Guests
                  </label>
                  <input
                    type="number"
                    placeholder="Number of guests"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus-ring"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Event Type
                </label>
                <select
                  required
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus-ring"
                >
                  <option value="">Select event type...</option>
                  <option value="wedding">Wedding</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="conference">Conference</option>
                  <option value="party">Party / Celebration</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Services Needed
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {["Tents", "Chairs & Tables", "Sound System", "Lighting", "Catering", "Full Management"].map(
                    (service) => (
                      <label key={service} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          className="w-4 h-4 text-ada-red border-input rounded focus:ring-ada-red"
                        />
                        <span className="text-sm text-foreground">{service}</span>
                      </label>
                    )
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Additional Details
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us more about your event..."
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus-ring resize-none"
                />
              </div>

              <button type="submit" className="btn-primary-ada w-full">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </section>

      <CTASection
        title="Need Help Planning Your Event?"
        subtitle="Our team is ready to help you create an unforgettable experience."
        variant="dark"
      />
    </Layout>
  );
};

export default Events;
