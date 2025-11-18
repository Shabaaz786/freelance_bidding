import { useState } from "react";
import { RoleSwitcher } from "@/components/RoleSwitcher";
import { StatsOverview } from "@/components/dashboard/StatsOverview";
import { ActiveJobsCard } from "@/components/dashboard/ActiveJobsCard";
import { BidsContractsCard } from "@/components/dashboard/BidsContractsCard";
import { MessagesCard } from "@/components/dashboard/MessagesCard";
import { QuickActionsCard } from "@/components/dashboard/QuickActionsCard";

const Index = () => {
  const [role, setRole] = useState<"client" | "freelancer">("client");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's your overview</p>
        </div>
        <RoleSwitcher role={role} onRoleChange={setRole} />
      </div>

      {/* Stats Overview */}
      <StatsOverview role={role} />

      {/* Main Dashboard Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left Column - 2 cols */}
        <div className="lg:col-span-2 space-y-6">
          <ActiveJobsCard role={role} />
          <BidsContractsCard role={role} />
        </div>

        {/* Right Column - 1 col */}
        <div className="space-y-6">
          <QuickActionsCard role={role} />
          <MessagesCard />
        </div>
      </div>
    </div>
  );
};

export default Index;
