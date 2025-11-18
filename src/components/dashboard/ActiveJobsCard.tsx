import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/StatusBadge";
import { Eye, Edit } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface Job {
  id: string;
  title: string;
  budget: string;
  status: "active" | "pending" | "completed";
  proposals: number;
}

interface ActiveJobsCardProps {
  role: "client" | "freelancer";
}

const mockClientJobs: Job[] = [
  { id: "1", title: "Full-Stack Web Developer Needed", budget: "$5,000", status: "active", proposals: 12 },
  { id: "2", title: "Mobile App UI/UX Design", budget: "$2,500", status: "active", proposals: 8 },
  { id: "3", title: "Content Writer for Tech Blog", budget: "$800", status: "pending", proposals: 5 },
];

const mockFreelancerJobs: Job[] = [
  { id: "1", title: "React Developer for SaaS Platform", budget: "$4,000", status: "in-progress" as any, proposals: 0 },
  { id: "2", title: "SEO Optimization Specialist", budget: "$1,200", status: "active", proposals: 0 },
];

export function ActiveJobsCard({ role }: ActiveJobsCardProps) {
  const jobs = role === "client" ? mockClientJobs : mockFreelancerJobs;
  const navigate = useNavigate();

  const handleView = (jobId: string) => {
    toast.info(`Viewing job ${jobId}`);
  };

  const handleEdit = (jobId: string) => {
    toast.info(`Editing job ${jobId}`);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Active Jobs</span>
          <Button size="sm" variant="outline" onClick={() => navigate("/jobs")}>View All</Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {jobs.map((job) => (
            <div key={job.id} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
              <div className="flex-1">
                <h4 className="font-medium mb-1">{job.title}</h4>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">{job.budget}</span>
                  {role === "client" && <span>{job.proposals} proposals</span>}
                  <StatusBadge status={job.status} />
                </div>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="ghost" onClick={() => handleView(job.id)}>
                  <Eye className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="ghost" onClick={() => handleEdit(job.id)}>
                  <Edit className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
