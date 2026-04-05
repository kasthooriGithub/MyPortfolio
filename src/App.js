import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "hooks/useAuth";
import Index from "./pages/Index";
import Admin from "./pages/Admin";
import AdminSignupPage from "./pages/AdminSignup";
import NotFound from "./pages/NotFound";

// Bootstrap and Custom CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles/style.css';

const App = () => (
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin-signup" element={<AdminSignupPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </AuthProvider>
);

export default App;
