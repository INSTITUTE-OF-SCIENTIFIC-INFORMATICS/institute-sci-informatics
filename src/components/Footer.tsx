import { Github, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-white/5 text-foreground py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="font-bold text-lg mb-4">About ISI</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              An open source community advancing scientific research through collaborative software development.
            </p>
            <div className="flex space-x-3">
              <a href="https://github.com/INSTITUTE-OF-SCIENTIFIC-INFORMATICS" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {['About Us', 'Projects', 'Community'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Community</h3>
            <ul className="space-y-2 text-sm">
              {['Code of Conduct', 'Contributing Guide', 'Report Issues', 'Join Discord'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:anuththaragamage45@gmail.com" className="hover:text-foreground transition-colors">
                  anuththaragamage45@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:0765617680" className="hover:text-foreground transition-colors">
                  0765617680
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Institute of Scientific Informatics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
