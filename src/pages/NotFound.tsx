
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Logo from "@/components/Logo";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-curio-gradient">
      <div className="container mx-auto px-4 py-8">
        <Logo />
      </div>
      
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center max-w-lg mx-auto px-4">
          <div className="mb-8">
            <div className="text-9xl font-bold text-gradient">404</div>
            <div className="h-2 w-24 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full my-6"></div>
          </div>
          
          <h1 className="text-3xl font-bold mb-4 text-white">Page not found</h1>
          <p className="text-xl text-gray-300 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          <Button size="lg" className="glow" asChild>
            <a href="/">
              <Home className="mr-2 h-5 w-5" />
              Return Home
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
