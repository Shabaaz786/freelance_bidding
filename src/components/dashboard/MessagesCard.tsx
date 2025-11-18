import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MessageSquare } from "lucide-react";

interface Message {
  id: string;
  sender: string;
  message: string;
  time: string;
  unread: boolean;
}

const mockMessages: Message[] = [
  { id: "1", sender: "Sarah Johnson", message: "Can we schedule a call to discuss the project?", time: "2 min ago", unread: true },
  { id: "2", sender: "Mike Chen", message: "I've submitted the first draft for review", time: "1 hour ago", unread: true },
  { id: "3", sender: "Emma Davis", message: "Payment has been processed successfully", time: "3 hours ago", unread: false },
];

export function MessagesCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5" />
            Recent Messages
          </span>
          <Button size="sm" variant="outline">View All</Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {mockMessages.map((msg) => (
            <div key={msg.id} className={`flex gap-3 p-3 rounded-lg ${msg.unread ? "bg-primary/5" : ""}`}>
              <Avatar className="h-10 w-10">
                <AvatarFallback>{msg.sender.split(" ").map(n => n[0]).join("")}</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium text-sm">{msg.sender}</span>
                  <span className="text-xs text-muted-foreground">{msg.time}</span>
                </div>
                <p className="text-sm text-muted-foreground truncate">{msg.message}</p>
              </div>
              {msg.unread && (
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
