import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Send, CheckCircle, DollarSign } from "lucide-react";

interface QuickActionsCardProps {
  role: "client" | "freelancer";
}

export function QuickActionsCard({ role }: QuickActionsCardProps) {
  const clientActions = [
    { icon: Plus, label: "Post New Job", variant: "default" as const },
    { icon: CheckCircle, label: "Approve Contract", variant: "outline" as const },
    { icon: DollarSign, label: "Release Payment", variant: "outline" as const },
  ];

  const freelancerActions = [
    { icon: Send, label: "Submit Bid", variant: "default" as const },
    { icon: CheckCircle, label: "Mark as Complete", variant: "outline" as const },
    { icon: Plus, label: "Update Portfolio", variant: "outline" as const },
  ];

  const actions = role === "client" ? clientActions : freelancerActions;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-3">
          {actions.map((action, index) => (
            <Button
              key={index}
              variant={action.variant}
              className="w-full justify-start gap-3"
            >
              <action.icon className="h-5 w-5" />
              {action.label}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
