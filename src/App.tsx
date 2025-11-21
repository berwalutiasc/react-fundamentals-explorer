import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

import Exercise1 from "./pages/exercises/Exercise1";
import Exercise2 from "./pages/exercises/Exercise2";
import Exercise3 from "./pages/exercises/Exercise3";
import Exercise4 from "./pages/exercises/Exercise4";
import Exercise5 from "./pages/exercises/Exercise5";
import Exercise6 from "./pages/exercises/Exercise6";
import Exercise7 from "./pages/exercises/Exercise7";
import Exercise8 from "./pages/exercises/Exercise8";
import Exercise9 from "./pages/exercises/Exercise9";
import Exercise10 from "./pages/exercises/Exercise10";
import Exercise11 from "./pages/exercises/Exercise11";
import Exercise12 from "./pages/exercises/Exercise12";
import Exercise13 from "./pages/exercises/Exercise13";
import Exercise14 from "./pages/exercises/Exercise14";
import Exercise15 from "./pages/exercises/Exercise15";
import Exercise16 from "./pages/exercises/Exercise16";
import Exercise17 from "./pages/exercises/Exercise17";
import Exercise18 from "./pages/exercises/Exercise18";
import Exercise19 from "./pages/exercises/Exercise19";
import Exercise20 from "./pages/exercises/Exercise20";
import Exercise21 from "./pages/exercises/Exercise21";
import Exercise22 from "./pages/exercises/Exercise22";
import Exercise23 from "./pages/exercises/Exercise23";
import Exercise24 from "./pages/exercises/Exercise24";
import Exercise25 from "./pages/exercises/Exercise25";
import Exercise26 from "./pages/exercises/Exercise26";
import Exercise27 from "./pages/exercises/Exercise27";
import Exercise28 from "./pages/exercises/Exercise28";
import Exercise29 from "./pages/exercises/Exercise29";
import Exercise30 from "./pages/exercises/Exercise30";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            
            {/* Exercise Routes */}
            <Route path="/exercise/1" element={<Exercise1 />} />
            <Route path="/exercise/2" element={<Exercise2 />} />
            <Route path="/exercise/3" element={<Exercise3 />} />
            <Route path="/exercise/4" element={<Exercise4 />} />
            <Route path="/exercise/5" element={<Exercise5 />} />
            <Route path="/exercise/6" element={<Exercise6 />} />
            <Route path="/exercise/7" element={<Exercise7 />} />
            <Route path="/exercise/8" element={<Exercise8 />} />
            <Route path="/exercise/9" element={<Exercise9 />} />
            <Route path="/exercise/10" element={<Exercise10 />} />
            <Route path="/exercise/11" element={<Exercise11 />} />
            <Route path="/exercise/12" element={<Exercise12 />} />
            <Route path="/exercise/13" element={<Exercise13 />} />
            <Route path="/exercise/14" element={<Exercise14 />} />
            <Route path="/exercise/15" element={<Exercise15 />} />
            <Route path="/exercise/16" element={<Exercise16 />} />
            <Route path="/exercise/17" element={<Exercise17 />} />
            <Route path="/exercise/18" element={<Exercise18 />} />
            <Route path="/exercise/19" element={<Exercise19 />} />
            <Route path="/exercise/20" element={<Exercise20 />} />
            <Route path="/exercise/21" element={<Exercise21 />} />
            <Route path="/exercise/22" element={<Exercise22 />} />
            <Route path="/exercise/23" element={<Exercise23 />} />
            <Route path="/exercise/24" element={<Exercise24 />} />
            <Route path="/exercise/25" element={<Exercise25 />} />
            <Route path="/exercise/26" element={<Exercise26 />} />
            <Route path="/exercise/27" element={<Exercise27 />} />
            <Route path="/exercise/28" element={<Exercise28 />} />
            <Route path="/exercise/29" element={<Exercise29 />} />
            <Route path="/exercise/30" element={<Exercise30 />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
