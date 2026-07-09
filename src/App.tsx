import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Index = lazy(() => import("./pages/Index"));
const ConstructionSoftwareIntegrations = lazy(() => import("./pages/ConstructionSoftwareIntegrations"));
const AdminAutomation = lazy(() => import("./pages/AdminAutomation"));
const AppPrototype = lazy(() => import("./pages/AppPrototype"));
const ApiIntegrations = lazy(() => import("./pages/ApiIntegrations"));
const BusinessAutomation = lazy(() => import("./pages/BusinessAutomation"));
const TechnicalOperationsRetainer = lazy(() => import("./pages/TechnicalOperationsRetainer"));
const Apps = lazy(() => import("./pages/Apps"));
const Agents = lazy(() => import("./pages/Agents"));
const Automations = lazy(() => import("./pages/Automations"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const NotFound = lazy(() => import("./pages/NotFound"));

const fallbackStyle = {
  minHeight: "100vh",
  background: "#F6F6F1",
} as const;

const App = () => (
  <BrowserRouter>
    <Suspense fallback={<main style={fallbackStyle} aria-label="Loading" />}>
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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;
