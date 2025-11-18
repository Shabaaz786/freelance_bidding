import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, FileText, DollarSign, TrendingUp } from "lucide-react";

interface Stat {
  label: string;
  value: string;
  change: string;
  icon: any;
  trend: "up" | "down";
}

interface StatsOverviewProps {
  role: "client" | "freelancer";
}

export function StatsOverview({ role }: StatsOverviewProps) {
  const clientStats: Stat[] = [
    { label: "Active Jobs", value: "8", change: "+2 this week", icon: Briefcase, trend: "up" },
    { label: "Total Proposals", value: "124", change: "+18 today", icon: FileText, trend: "up" },
    { label: "Active Contracts", value: "5", change: "2 pending", icon: FileText, trend: "up" },
    { label: "Total Spent", value: "$28,450", change: "+12% this month", icon: DollarSign, trend: "up" },
  ];

  const freelancerStats: Stat[] = [
    { label: "Active Bids", value: "6", change: "3 responses", icon: FileText, trend: "up" },
    { label: "Active Projects", value: "3", change: "1 near deadline", icon: Briefcase, trend: "up" },
    { label: "Total Earned", value: "$12,350", change: "+8% this month", icon: DollarSign, trend: "up" },
    { label: "Success Rate", value: "94%", change: "+2% this month", icon: TrendingUp, trend: "up" },
  ];

  const stats = role === "client" ? clientStats : freelancerStats;

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">{stat.label}</span>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="flex items-baseline justify-between">
              <span className="text-3xl font-bold">{stat.value}</span>
            </div>
            <p className="text-xs text-muted-foreground mt-2">{stat.change}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
