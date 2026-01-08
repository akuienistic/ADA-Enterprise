import { useState, useEffect } from "react";
import adaLogo from "@/assets/ada-logo.jpg";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-ada-light">
      <div className="flex flex-col items-center gap-6">
        {/* Logo with pulse animation */}
        <div className="relative">
          <div className="absolute inset-0 animate-ping rounded-full bg-ada-navy/20" />
          <img
            src={adaLogo}
            alt="ADA Enterprises"
            className="relative h-24 w-auto rounded-xl shadow-lg animate-bounce"
          />
        </div>

        {/* Animated dots */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-ada-red animate-bounce" style={{ animationDelay: "0ms" }} />
          <div className="w-3 h-3 rounded-full bg-ada-navy animate-bounce" style={{ animationDelay: "150ms" }} />
          <div className="w-3 h-3 rounded-full bg-ada-gold animate-bounce" style={{ animationDelay: "300ms" }} />
        </div>

        {/* Progress bar */}
        <div className="w-48 h-1.5 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-ada-navy via-ada-red to-ada-gold animate-progress rounded-full" />
        </div>

        {/* Loading text */}
        <p className="text-ada-navy font-semibold text-sm tracking-wider animate-pulse">
          LOADING...
        </p>
      </div>
    </div>
  );
};

export default Loader;
