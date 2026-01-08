import { LucideIcon } from "lucide-react";

interface TrustBadgeProps {
  icon: LucideIcon;
  text: string;
}

const TrustBadge = ({ icon: Icon, text }: TrustBadgeProps) => {
  return (
    <div className="flex items-center gap-2.5 bg-card px-4 py-2.5 rounded-xl shadow-sm">
      <Icon className="w-5 h-5 text-ada-red flex-shrink-0" />
      <span className="text-sm font-medium text-foreground whitespace-nowrap">{text}</span>
    </div>
  );
};

export default TrustBadge;
