import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import Projects from "./pages/Projects";
import Events from "./pages/Events";
import MusicStudio from "./pages/MusicStudio";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Loader from "@/components/ui/Loader";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Helmet>
          <title>ADA Enterprises — Supplies & Services | Juba, South Sudan</title>
          <meta
            name="description"
            content="ADA Enterprises provides reliable supply, event, construction and technical services across Juba. Call +211911489777 for quotes & urgent requests."
          />
          <meta property="og:title" content="ADA Enterprises — Supplies & Services | Juba, South Sudan" />
          <meta
            property="og:description"
            content="Reliable supply, services, and operational support for hotels, NGOs, construction projects, events, and businesses across Juba."
          />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        </Helmet>
        <Loader />
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/events" element={<Events />} />
            <Route path="/music-studio" element={<MusicStudio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
