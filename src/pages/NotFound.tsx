import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="section-padding bg-background min-h-[60vh] flex items-center">
        <div className="container-ada text-center">
          <div className="max-w-md mx-auto">
            <h1 className="font-heading text-7xl md:text-9xl font-bold text-ada-navy mb-4">
              404
            </h1>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Page Not Found
            </h2>
            <p className="text-muted-foreground mb-8">
              Sorry, the page you're looking for doesn't exist or has been moved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/" className="btn-primary-ada inline-flex items-center justify-center gap-2">
                <Home className="w-5 h-5" />
                Go Home
              </Link>
              <button
                onClick={() => window.history.back()}
                className="btn-secondary-ada inline-flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-5 h-5" />
                Go Back
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
