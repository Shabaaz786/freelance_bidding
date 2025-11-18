import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/StatusBadge";
import { CheckCircle2, XCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface BidContract {
  id: string;
  title: string;
  amount: string;
  status: "pending" | "active" | "completed" | "rejected";
  date: string;
}

interface BidsContractsCardProps {
  role: "client" | "freelancer";
}

const mockClientContracts: BidContract[] = [
  { id: "1", title: "Website Redesign Project", amount: "$3,500", status: "active", date: "2024-01-15" },
  { id: "2", title: "Logo Design", amount: "$500", status: "pending", date: "2024-01-18" },
];

const mockFreelancerBids: BidContract[] = [
  { id: "1", title: "E-commerce Platform Development", amount: "$6,000", status: "pending", date: "2024-01-20" },
  { id: "2", title: "API Integration Project", amount: "$2,000", status: "active", date: "2024-01-12" },
  { id: "3", title: "Database Migration", amount: "$1,500", status: "completed", date: "2024-01-05" },
];

export function BidsContractsCard({ role }: BidsContractsCardProps) {
  const items = role === "client" ? mockClientContracts : mockFreelancerBids;
  const title = role === "client" ? "Active Contracts" : "My Bids";
  const navigate = useNavigate();

  const handleAccept = (id: string) => {
    toast.success(`Contract approved!`);
  };

  const handleReject = (id: string) => {
    toast.error(`Contract rejected`);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>{title}</span>
          <Button size="sm" variant="outline" onClick={() => navigate(role === "client" ? "/contracts" : "/bids")}>
            View All
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {items.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex-1">
                <h4 className="font-medium text-sm mb-1">{item.title}</h4>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground">{item.amount}</span>
                  <span>{item.date}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <StatusBadge status={item.status} />
                {item.status === "pending" && role === "client" && (
                  <div className="flex gap-1">
                    <Button size="sm" variant="ghost" className="h-7 w-7 p-0" onClick={() => handleAccept(item.id)}>
                      <CheckCircle2 className="h-4 w-4 text-success" />
                    </Button>
                    <Button size="sm" variant="ghost" className="h-7 w-7 p-0" onClick={() => handleReject(item.id)}>
                      <XCircle className="h-4 w-4 text-destructive" />
                    </Button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
