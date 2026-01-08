import { Link } from "react-router-dom";
import { LucideIcon, ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
}

const ServiceCard = ({ icon: Icon, title, description, href = "/services" }: ServiceCardProps) => {
  return (
    <div className="card-ada group hover:border-ada-red/20 border border-transparent">
      <div className="w-12 h-12 bg-ada-red/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-ada-red group-hover:text-primary-foreground transition-colors">
        <Icon className="w-6 h-6 text-ada-red group-hover:text-primary-foreground transition-colors" />
      </div>
      <h3 className="font-heading font-bold text-lg text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{description}</p>
      <Link
        to={href}
        className="inline-flex items-center gap-1.5 text-ada-red font-medium text-sm hover:gap-2.5 transition-all"
      >
        Learn More <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
};

export default ServiceCard;
