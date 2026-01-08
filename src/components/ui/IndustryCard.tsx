import { Link } from "react-router-dom";
import { LucideIcon, ArrowRight } from "lucide-react";

interface IndustryCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const IndustryCard = ({ icon: Icon, title, description }: IndustryCardProps) => {
  return (
    <div className="group bg-card rounded-xl p-5 border border-border hover:border-ada-navy/30 hover:shadow-lg transition-all duration-300">
      <div className="w-10 h-10 bg-ada-navy/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-ada-navy transition-colors">
        <Icon className="w-5 h-5 text-ada-navy group-hover:text-primary-foreground transition-colors" />
      </div>
      <h3 className="font-heading font-bold text-foreground mb-1.5">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-3">{description}</p>
      <Link
        to="/industries"
        className="inline-flex items-center gap-1 text-ada-navy font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity"
      >
        Learn More <ArrowRight className="w-3.5 h-3.5" />
      </Link>
    </div>
  );
};

export default IndustryCard;
