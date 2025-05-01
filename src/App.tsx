import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import { Toaster } from "sonner";

const App = () => (
    <TooltipProvider>
      <Toaster />
      <BrowserRouter  >
        <Routes>
          <Route index  element={<Navigate to={'/PosBilling'} replace />} />
          <Route path="/PosBilling" element={<Index />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
);

export default App;
