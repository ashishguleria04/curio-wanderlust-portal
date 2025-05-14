import { CircleUser } from "lucide-react";

const Logo = () => {
  return (
    <a href="#" className="flex items-center space-x-4 group">
      {/* Icon Section */}
      <div className="relative">
        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-blue-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
          <span className="text-4xl font-extrabold text-white font-display">
            C
          </span>
        </div>
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-cyan-400 rounded-full shadow-md animate-pulse"></div>
      </div>

      {/* Text Section */}
      <div className="flex flex-col">
        <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 group-hover:scale-105 transition-transform duration-300 font-display">
          Curio
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-gray-300 transition-colors duration-300 font-sans">
          Discover the Unexpected
        </span>
      </div>
    </a>
  );
};

export default Logo;
