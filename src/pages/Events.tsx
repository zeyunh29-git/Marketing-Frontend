import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, Filter } from "lucide-react";

export default function Events() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Events</h1>
          <p className="text-muted-foreground">
            Create and manage your marketing campaign events
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Create New Event
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Filter Events</CardTitle>
          <CardDescription>
            Search and filter your events by status, date, or name
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input placeholder="Search events..." className="pl-10" />
              </div>
            </div>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Events Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Event Card 1 */}
        <Card className="card-elevated">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Q4 Newsletter Campaign</CardTitle>
              <Badge className="bg-success text-success-foreground">Approved</Badge>
            </div>
            <CardDescription>
              Quarterly newsletter for all active members
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Created:</span>
                <span>Jan 15, 2024</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Members:</span>
                <span>15,420</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Last Run:</span>
                <span>Jan 20, 2024</span>
              </div>
            </div>
            <div className="flex space-x-2 mt-4">
              <Button size="sm" variant="outline">Clone</Button>
              <Button size="sm">Execute</Button>
            </div>
          </CardContent>
        </Card>

        {/* Event Card 2 */}
        <Card className="card-elevated">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">New Member Onboarding</CardTitle>
              <Badge className="bg-primary text-primary-foreground">Uploaded</Badge>
            </div>
            <CardDescription>
              Welcome campaign for new super fund members
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Created:</span>
                <span>Jan 10, 2024</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Members:</span>
                <span>2,340</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Last Run:</span>
                <span>Jan 18, 2024</span>
              </div>
            </div>
            <div className="flex space-x-2 mt-4">
              <Button size="sm" variant="outline">Clone</Button>
              <Button size="sm">Execute</Button>
            </div>
          </CardContent>
        </Card>

        {/* Event Card 3 */}
        <Card className="card-elevated">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Policy Update Notification</CardTitle>
              <Badge variant="secondary">Draft</Badge>
            </div>
            <CardDescription>
              Important policy changes requiring member attention
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Created:</span>
                <span>Jan 22, 2024</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Members:</span>
                <span>-</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Last Run:</span>
                <span>Never</span>
              </div>
            </div>
            <div className="flex space-x-2 mt-4">
              <Button size="sm" variant="outline">Edit</Button>
              <Button size="sm">Execute</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}