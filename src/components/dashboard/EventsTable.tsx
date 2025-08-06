import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Play, Copy, Edit, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface Event {
  id: string;
  name: string;
  status: "draft" | "approved" | "uploaded" | "error";
  created: string;
  lastRun?: string;
  memberCount?: number;
}

const mockEvents: Event[] = [
  {
    id: "1",
    name: "Q4 Newsletter Campaign",
    status: "approved",
    created: "2024-01-15",
    lastRun: "2024-01-20",
    memberCount: 15420
  },
  {
    id: "2", 
    name: "New Member Onboarding",
    status: "uploaded",
    created: "2024-01-10",
    lastRun: "2024-01-18",
    memberCount: 2340
  },
  {
    id: "3",
    name: "Policy Update Notification",
    status: "draft",
    created: "2024-01-22",
    memberCount: undefined
  },
  {
    id: "4",
    name: "Annual Survey Invitation",
    status: "error",
    created: "2024-01-20",
    lastRun: "2024-01-21",
    memberCount: 0
  }
];

function getStatusBadge(status: Event["status"]) {
  const variants = {
    draft: "secondary",
    approved: "default",
    uploaded: "outline", 
    error: "destructive"
  } as const;

  const labels = {
    draft: "Draft",
    approved: "Approved", 
    uploaded: "Uploaded",
    error: "Error"
  };

  return (
    <Badge 
      variant={variants[status]}
      className={cn(
        status === "approved" && "bg-success text-success-foreground",
        status === "uploaded" && "bg-primary text-primary-foreground"
      )}
    >
      {labels[status]}
    </Badge>
  );
}

export function EventsTable() {
  return (
    <Card className="card-elevated">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Recent Events</CardTitle>
            <CardDescription>
              Manage your marketing campaigns and data events
            </CardDescription>
          </div>
          <Button>Create New Event</Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Event Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Created</TableHead>
              <TableHead>Last Run</TableHead>
              <TableHead className="text-right">Members</TableHead>
              <TableHead className="w-[70px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockEvents.map((event) => (
              <TableRow key={event.id}>
                <TableCell className="font-medium">{event.name}</TableCell>
                <TableCell>{getStatusBadge(event.status)}</TableCell>
                <TableCell className="text-muted-foreground">{event.created}</TableCell>
                <TableCell className="text-muted-foreground">
                  {event.lastRun || "Never"}
                </TableCell>
                <TableCell className="text-right">
                  {event.memberCount?.toLocaleString() || "-"}
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>
                        <Play className="mr-2 h-4 w-4" />
                        Execute
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Copy className="mr-2 h-4 w-4" />
                        Clone
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}