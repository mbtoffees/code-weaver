import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ConstructionSoftwareIntegrations from "./pages/ConstructionSoftwareIntegrations";
import AdminAutomation from "./pages/AdminAutomation";
import AppPrototype from "./pages/AppPrototype";
import ApiIntegrations from "./pages/ApiIntegrations";
import BusinessAutomation from "./pages/BusinessAutomation";
import TechnicalOperationsRetainer from "./pages/TechnicalOperationsRetainer";
import Apps from "./pages/Apps";
import Agents from "./pages/Agents";
import Automations from "./pages/Automations";
import CaseStudies from "./pages/CaseStudies";
import ThankYou from "./pages/ThankYou";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/construction-software-integrations" element={<ConstructionSoftwareIntegrations />} />
          <Route path="/admin-automation" element={<AdminAutomation />} />
          <Route path="/app-prototype" element={<AppPrototype />} />
          <Route path="/api-integrations" element={<ApiIntegrations />} />
          <Route path="/business-automation" element={<BusinessAutomation />} />
          <Route path="/technical-operations-retainer" element={<TechnicalOperationsRetainer />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/automations" element={<Automations />} />
          <Route path="/internal-tools" element={<Apps />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/thank-you" element={<ThankYou />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
