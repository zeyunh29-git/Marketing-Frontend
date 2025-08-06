import { StatsCard } from "@/components/dashboard/StatsCard";
import { EventsTable } from "@/components/dashboard/EventsTable";
import { Calendar, Users, CheckCircle, Upload, TrendingUp } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          Overview of your marketing data automation platform
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Events"
          value={24}
          change="+3 this month"
          changeType="positive"
          icon={Calendar}
        />
        <StatsCard
          title="Total Members"
          value="156.8K"
          change="+12.4% from last month"
          changeType="positive"
          icon={Users}
          iconColor="text-success"
        />
        <StatsCard
          title="Approved Events"
          value={18}
          change="Pending: 6"
          changeType="neutral"
          icon={CheckCircle}
          iconColor="text-warning"
        />
        <StatsCard
          title="Successful Uploads"
          value={45}
          change="+8 this week"
          changeType="positive"
          icon={Upload}
          iconColor="text-primary"
        />
      </div>

      {/* Events Table */}
      <EventsTable />
    </div>
  );
}