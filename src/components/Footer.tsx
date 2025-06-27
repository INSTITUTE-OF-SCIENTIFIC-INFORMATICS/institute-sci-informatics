import { Button } from '@/components/ui/button';
import { 
  Facebook, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  Github,
  Twitter,
  Discord
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-6">About ISI</h3>
            <p className="text-white/80 mb-6">
              An open source community dedicated to advancing scientific research through collaborative software development and knowledge sharing.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/INSTITUTE-OF-SCIENTIFIC-INFORMATICS"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
              >
                <Discord className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-white/80 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#projects" className="text-white/80 hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#community" className="text-white/80 hover:text-white transition-colors">
                  Community
                </a>
              </li>
              <li>
                <a href="#docs" className="text-white/80 hover:text-white transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#discussions" className="text-white/80 hover:text-white transition-colors">
                  Discussions
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-bold text-lg mb-6">Community</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  Code of Conduct
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  Contributing Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  Report Issues
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  Join Discord
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-white/80">
                <Mail className="h-5 w-5" />
                <a href="mailto:contact@isi-community.org" className="hover:text-white transition-colors">
                  contact@isi-community.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/60">
          <p>© {new Date().getFullYear()} Institute of Scientific Informatics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
