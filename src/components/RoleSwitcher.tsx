import { Button } from "@/components/ui/button";
import { UserCog, Users } from "lucide-react";

interface RoleSwitcherProps {
  role: "client" | "freelancer";
  onRoleChange: (role: "client" | "freelancer") => void;
}

export function RoleSwitcher({ role, onRoleChange }: RoleSwitcherProps) {
  return (
    <div className="flex items-center gap-2 bg-muted rounded-lg p-1">
      <Button
        variant={role === "client" ? "default" : "ghost"}
        size="sm"
        onClick={() => onRoleChange("client")}
        className="gap-2"
      >
        <UserCog className="h-4 w-4" />
        Client
      </Button>
      <Button
        variant={role === "freelancer" ? "default" : "ghost"}
        size="sm"
        onClick={() => onRoleChange("freelancer")}
        className="gap-2"
      >
        <Users className="h-4 w-4" />
        Freelancer
      </Button>
    </div>
  );
}
