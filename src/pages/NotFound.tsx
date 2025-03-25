
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { StarField } from "@/components/ui/star-field";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-space-black text-white">
      <StarField />
      <div className="text-center glass-card p-12 animate-fade-up max-w-lg mx-auto">
        <h1 className="text-6xl font-bold mb-4 text-gradient">404</h1>
        <p className="text-xl text-white/80 mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <Link 
          to="/" 
          className="px-8 py-3 rounded-full bg-stellar-blue hover:bg-stellar-blue/90 text-white font-medium transition-all stellar-shadow hover:translate-y-[-2px] inline-block"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
