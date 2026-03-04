import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { AuthProvider } from "@/contexts/AuthContext";
import { NotificationProvider } from "@/contexts/NotificationContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import SelectRole from "./pages/SelectRole";
import OrganiserDashboard from "./pages/OrganiserDashboard";
import CreateHackathon from "./pages/CreateHackathon";
import ManageSubmissions from "./pages/ManageSubmissions";
import Leaderboard from "./pages/Leaderboard";
import BrowseHackathons from "./pages/BrowseHackathons";
import HackathonDetail from "./pages/HackathonDetail";
import RegisterHackathon from "./pages/RegisterHackathon";
import ParticipantDashboard from "./pages/ParticipantDashboard";
import Community from "./pages/Community";
import About from "./pages/About";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider>
    <AuthProvider>
      <NotificationProvider>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/select-role" element={<SelectRole />} />
              <Route path="/hackathons" element={<BrowseHackathons />} />
              <Route path="/hackathons/:id" element={<HackathonDetail />} />
              <Route path="/hackathons/:id/register" element={<RegisterHackathon />} />
              <Route path="/organiser/dashboard" element={<OrganiserDashboard />} />
              <Route path="/organiser/create-hackathon" element={<CreateHackathon />} />
              <Route path="/organiser/hackathon/:hackathonId/submissions" element={<ManageSubmissions />} />
              <Route path="/organiser/hackathon/:hackathonId/leaderboard" element={<Leaderboard />} />
              <Route path="/participant/dashboard" element={<ParticipantDashboard />} />
              <Route path="/community" element={<Community />} />
              <Route path="/about" element={<About />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
          </TooltipProvider>
        </QueryClientProvider>
      </NotificationProvider>
    </AuthProvider>
  </ThemeProvider>
);

export default App;