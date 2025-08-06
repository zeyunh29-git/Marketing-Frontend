import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import Events from "./pages/Events";
import DataExecution from "./pages/DataExecution";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={
            <Layout>
              <Dashboard />
            </Layout>
          } />
          <Route path="/events" element={
            <Layout>
              <Events />
            </Layout>
          } />
          <Route path="/data" element={
            <Layout>
              <DataExecution />
            </Layout>
          } />
          <Route path="/reports" element={
            <Layout>
              <div className="text-center py-12">
                <h1 className="text-2xl font-bold">Reports</h1>
                <p className="text-muted-foreground">Coming soon...</p>
              </div>
            </Layout>
          } />
          <Route path="/mailchimp" element={
            <Layout>
              <div className="text-center py-12">
                <h1 className="text-2xl font-bold">Mailchimp Integration</h1>
                <p className="text-muted-foreground">Coming soon...</p>
              </div>
            </Layout>
          } />
          <Route path="/settings" element={
            <Layout>
              <div className="text-center py-12">
                <h1 className="text-2xl font-bold">Settings</h1>
                <p className="text-muted-foreground">Coming soon...</p>
              </div>
            </Layout>
          } />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
