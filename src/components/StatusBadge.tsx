import { Badge } from "@/components/ui/badge";

interface StatusBadgeProps {
  status: "active" | "pending" | "completed" | "rejected" | "in-progress";
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const variants = {
    active: "bg-primary/10 text-primary border-primary/20",
    pending: "bg-warning/10 text-warning border-warning/20",
    completed: "bg-success/10 text-success border-success/20",
    rejected: "bg-destructive/10 text-destructive border-destructive/20",
    "in-progress": "bg-accent/10 text-accent border-accent/20",
  };

  const labels = {
    active: "Active",
    pending: "Pending",
    completed: "Completed",
    rejected: "Rejected",
    "in-progress": "In Progress",
  };

  return (
    <Badge variant="outline" className={`${variants[status]} ${className}`}>
      {labels[status]}
    </Badge>
  );
}
