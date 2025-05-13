
import { CircleUser } from "lucide-react";

const Logo = () => {
  return (
    <a href="#" className="flex items-center space-x-2">
      <div className="relative">
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center animate-pulse-soft">
          <div className="w-3 h-3 bg-white rounded-full"></div>
        </div>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
      </div>
      <span className="text-xl font-bold text-gradient">Curio</span>
    </a>
  );
};

export default Logo;
