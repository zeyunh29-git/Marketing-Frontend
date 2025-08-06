import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Play, Download, RefreshCw, Database } from "lucide-react";

export default function DataExecution() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Data Execution</h1>
        <p className="text-muted-foreground">
          Execute stored procedures and export member data
        </p>
      </div>

      {/* Execution Panel */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Event Selection */}
        <Card className="card-elevated">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Database className="mr-2 h-5 w-5" />
              Select Event
            </CardTitle>
            <CardDescription>
              Choose an approved event to execute data extraction
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium">Event Campaign</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select an event..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="q4-newsletter">Q4 Newsletter Campaign</SelectItem>
                  <SelectItem value="onboarding">New Member Onboarding</SelectItem>
                  <SelectItem value="policy-update">Policy Update Notification</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <div className="text-sm font-medium">Event Details</div>
              <div className="text-sm text-muted-foreground">
                <div>Status: <Badge className="bg-success text-success-foreground ml-1">Approved</Badge></div>
                <div className="mt-1">Expected Records: ~15,420</div>
                <div>Criteria: Active members, Newsletter subscribed</div>
              </div>
            </div>

            <Button className="w-full">
              <Play className="mr-2 h-4 w-4" />
              Execute Data Extraction
            </Button>
          </CardContent>
        </Card>

        {/* Execution Status */}
        <Card className="card-elevated">
          <CardHeader>
            <CardTitle>Execution Status</CardTitle>
            <CardDescription>
              Monitor the progress of your data extraction
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Processing Records</span>
                <span>8,420 / 15,420</span>
              </div>
              <Progress value={55} className="h-2" />
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Start Time:</span>
                <span>14:32:15</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Estimated Completion:</span>
                <span>14:35:20</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Status:</span>
                <Badge variant="outline" className="bg-yellow-100 text-yellow-800">
                  <RefreshCw className="mr-1 h-3 w-3 animate-spin" />
                  Processing
                </Badge>
              </div>
            </div>

            <div className="pt-2">
              <Button variant="outline" className="w-full" disabled>
                <Download className="mr-2 h-4 w-4" />
                Download Results (Processing...)
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Results Preview */}
      <Card className="card-elevated">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Data Preview</CardTitle>
              <CardDescription>
                Preview of extracted member data (first 100 records)
              </CardDescription>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline">
                <RefreshCw className="mr-2 h-4 w-4" />
                Refresh
              </Button>
              <Button>
                <Download className="mr-2 h-4 w-4" />
                Export to Excel
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Member ID</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>First Name</TableHead>
                <TableHead>Last Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Join Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>M001245</TableCell>
                <TableCell>john.smith@email.com</TableCell>
                <TableCell>John</TableCell>
                <TableCell>Smith</TableCell>
                <TableCell>
                  <Badge variant="outline" className="bg-green-100 text-green-800">Active</Badge>
                </TableCell>
                <TableCell>2023-05-15</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>M001246</TableCell>
                <TableCell>sarah.jones@email.com</TableCell>
                <TableCell>Sarah</TableCell>
                <TableCell>Jones</TableCell>
                <TableCell>
                  <Badge variant="outline" className="bg-green-100 text-green-800">Active</Badge>
                </TableCell>
                <TableCell>2023-06-20</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>M001247</TableCell>
                <TableCell>mike.wilson@email.com</TableCell>
                <TableCell>Mike</TableCell>
                <TableCell>Wilson</TableCell>
                <TableCell>
                  <Badge variant="outline" className="bg-green-100 text-green-800">Active</Badge>
                </TableCell>
                <TableCell>2023-07-10</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <div className="mt-4 text-sm text-muted-foreground">
            Showing 3 of 8,420 records processed
          </div>
        </CardContent>
      </Card>
    </div>
  );
}