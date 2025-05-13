import Logo from "./Logo";
import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[#0a0f1a] to-[#0d121e] py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Logo />
            <p className="mt-4 text-gray-400 max-w-md">
              Curio is your gateway to fascinating articles, research findings, 
              and facts that will expand your mind and fuel your curiosity.
            </p>
            <div className="flex space-x-4 mt-6">
              {[
                { icon: <Twitter className="h-5 w-5" />, label: "Twitter", url: "https://twitter.com" },
                { icon: <Facebook className="h-5 w-5" />, label: "Facebook", url: "https://facebook.com" },
                { icon: <Instagram className="h-5 w-5" />, label: "Instagram", url: "https://instagram.com" },
                { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn", url: "https://linkedin.com" },
              ].map(({ icon, label, url }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={`Follow us on ${label}`}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Explore</h4>
            <ul className="space-y-3">
              {[
                { name: "Features", url: "/features" },
                { name: "How It Works", url: "/how-it-works" },
                { name: "Testimonials", url: "/testimonials" },
                { name: "Blog", url: "/blog" },
              ].map(({ name, url }) => (
                <li key={name}>
                  <a
                    href={url}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {[
                { name: "About Us", url: "/about" },
                { name: "Contact", url: "/contact" },
                { name: "Careers", url: "/careers" },
                { name: "Privacy Policy", url: "/privacy-policy" },
              ].map(({ name, url }) => (
                <li key={name}>
                  <a
                    href={url}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Curio. All rights reserved.
          </div>
          <div className="flex space-x-6">
            {[
              { name: "Terms of Service", url: "/terms-of-service" },
              { name: "Privacy Policy", url: "/privacy-policy" },
              { name: "Cookie Policy", url: "/cookie-policy" },
            ].map(({ name, url }) => (
              <a
                key={name}
                href={url}
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                {name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
