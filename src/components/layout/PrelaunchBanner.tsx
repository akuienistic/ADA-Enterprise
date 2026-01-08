import { useState } from "react";
import { X, Phone, MessageCircle } from "lucide-react";

const PrelaunchBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isVisible) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
    }
  };

  return (
    <div className="bg-ada-navy text-primary-foreground py-2.5 px-4 relative">
      <div className="container-ada flex flex-col sm:flex-row items-center justify-center gap-3 text-sm">
        <div className="flex items-center gap-2 flex-wrap justify-center">
          <span className="animate-pulse-soft inline-block w-2 h-2 bg-ada-gold rounded-full" />
          <span className="font-medium">Website under development</span>
          <span className="hidden sm:inline text-primary-foreground/70">—</span>
          <span className="text-primary-foreground/90">Call/WhatsApp for immediate service</span>
        </div>
        
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Join waitlist..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-3 py-1 rounded-lg text-foreground bg-card text-sm w-36 sm:w-44 focus-ring"
              required
            />
            <button
              type="submit"
              className="bg-ada-red hover:bg-ada-red/90 text-primary-foreground px-3 py-1 rounded-lg font-medium text-sm transition-colors"
            >
              Join
            </button>
          </form>
        ) : (
          <span className="text-ada-gold font-medium">✓ You're on the list!</span>
        )}

        <div className="flex items-center gap-3 sm:ml-4">
          <a
            href="tel:+211911489777"
            className="hover:text-ada-gold transition-colors"
            aria-label="Call us"
          >
            <Phone className="w-4 h-4" />
          </a>
          <a
            href="https://wa.me/211911489777"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ada-gold transition-colors"
            aria-label="WhatsApp us"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
        </div>

        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-primary-foreground/10 rounded transition-colors"
          aria-label="Close banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default PrelaunchBanner;
