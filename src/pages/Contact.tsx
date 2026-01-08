import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    organization: "",
    service: "",
    message: "",
    contactMethod: "email",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: "",
        organization: "",
        service: "",
        message: "",
        contactMethod: "email",
      });
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-ada-navy py-16 md:py-24">
        <div className="container-ada">
          <div className="max-w-3xl">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              Ready to get started? Reach out to us via phone, WhatsApp, or the
              form below. We respond quickly and are here to help.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-ada">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                Get in Touch
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-ada-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-ada-red" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Phone</p>
                    <a
                      href="tel:+211911489777"
                      className="text-muted-foreground hover:text-ada-red transition-colors"
                    >
                      +211 911 489 777
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#25D366]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-[#25D366]" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">WhatsApp</p>
                    <a
                      href="https://wa.me/211911489777"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-[#25D366] transition-colors"
                    >
                      Message us instantly
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-ada-navy/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-ada-navy" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Email</p>
                    <a
                      href="mailto:adaenterprises52@gmail.com"
                      className="text-muted-foreground hover:text-ada-navy transition-colors break-all"
                    >
                      adaenterprises52@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-ada-gold/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-ada-gold" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Office</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Thongpiny, Airport Road,
                      <br />
                      Opposite Zain Headquarters,
                      <br />
                      Pensions Plaza, 2nd Floor,
                      <br />
                      Office No. 21, Juba
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick CTA */}
              <div className="mt-8 p-5 bg-ada-navy rounded-xl text-primary-foreground">
                <p className="font-medium mb-3">Need immediate assistance?</p>
                <a
                  href="https://wa.me/211911489777"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full justify-center"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us Now
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-2xl p-6 md:p-8 shadow-md border border-border">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                  Request a Quote
                </h2>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-ada-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-ada-red" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Thank you for reaching out. We'll get back to you within 24
                      hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="btn-secondary-ada"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-foreground mb-1.5"
                        >
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus-ring"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="organization"
                          className="block text-sm font-medium text-foreground mb-1.5"
                        >
                          Organization
                        </label>
                        <input
                          type="text"
                          id="organization"
                          name="organization"
                          value={formState.organization}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus-ring"
                          placeholder="Your company or organization"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-medium text-foreground mb-1.5"
                      >
                        Service of Interest *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formState.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus-ring"
                      >
                        <option value="">Select a service...</option>
                        <option value="supply">Supply & Procurement</option>
                        <option value="cleaning">Cleaning & Decoration</option>
                        <option value="catering">Catering Services</option>
                        <option value="events">Events & Rentals</option>
                        <option value="construction">Construction Materials</option>
                        <option value="elevator">Elevator Services</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-foreground mb-1.5"
                      >
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus-ring resize-none"
                        placeholder="Tell us about your requirements..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Preferred Contact Method
                      </label>
                      <div className="flex gap-4">
                        {["email", "phone", "whatsapp"].map((method) => (
                          <label
                            key={method}
                            className="flex items-center gap-2 cursor-pointer"
                          >
                            <input
                              type="radio"
                              name="contactMethod"
                              value={method}
                              checked={formState.contactMethod === method}
                              onChange={handleChange}
                              className="w-4 h-4 text-ada-red border-input focus:ring-ada-red"
                            />
                            <span className="text-sm text-foreground capitalize">
                              {method}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary-ada w-full flex items-center justify-center gap-2 disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="mt-12">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
              Find Us
            </h2>
            <div className="bg-muted rounded-2xl overflow-hidden h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.0146!2d31.5825!3d4.8525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sJuba%2C%20South%20Sudan!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ADA Enterprises Location"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
