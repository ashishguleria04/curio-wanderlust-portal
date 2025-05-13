
import Logo from "./Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0f1a] py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Logo />
            <p className="mt-4 text-gray-400 max-w-md">
              Curio is your gateway to fascinating articles, research findings, 
              and facts that will expand your mind and fuel your curiosity.
            </p>
            <div className="flex space-x-4 mt-6">
              {["Twitter", "Facebook", "Instagram", "LinkedIn"].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={`Follow us on ${social}`}
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Explore</h4>
            <ul className="space-y-3">
              {["Features", "How It Works", "Testimonials", "Blog"].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {["About Us", "Contact", "Careers", "Privacy Policy"].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Curio. All rights reserved.
          </div>
          <div className="flex space-x-6">
            {["Terms of Service", "Privacy Policy", "Cookie Policy"].map((item) => (
              <a 
                key={item}
                href="#" 
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
