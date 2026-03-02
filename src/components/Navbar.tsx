import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Users,
  Menu,
  X,
  Github,
  Code2,
  FileCode
} from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-lg shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between h-16">
        <a href="/" className="flex items-center space-x-2">
          <Code2 className={cn(
            "h-8 w-8 transition-colors",
            isScrolled ? "text-primary" : "text-white"
          )} />
          <span className={cn(
            "text-xl font-bold transition-colors",
            isScrolled ? "text-foreground" : "text-white"
          )}>
            ISI Community
          </span>
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          {[
            { href: '#projects', icon: FileCode, label: 'Projects' },
            { href: '#community', icon: Users, label: 'Community' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={cn(
                "flex items-center space-x-1 hover:text-primary transition-colors",
                isScrolled ? "text-foreground" : "text-white"
              )}
            >
              <item.icon className="h-4 w-4" />
              <span>{item.label}</span>
            </a>
          ))}
          
          <Button
            variant={isScrolled ? "default" : "secondary"}
            className="flex items-center space-x-2"
            onClick={() => window.open('https://github.com/INSTITUTE-OF-SCIENTIFIC-INFORMATICS', '_blank')}
          >
            <Github className="h-4 w-4" />
            <span>GitHub</span>
          </Button>
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "md:hidden",
            !isScrolled && "text-white hover:bg-white/20"
          )}
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      <div
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-sm z-40 md:hidden",
          "transition-opacity duration-300 ease-in-out pt-20",
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <nav className="container flex flex-col space-y-8 py-8">
          {[
            { href: '#projects', icon: FileCode, label: 'Projects' },
            { href: '#community', icon: Users, label: 'Community' },
          ].map((item) => (
            <a key={item.label} href={item.href} className="flex items-center space-x-2 text-xl" onClick={toggleMobileMenu}>
              <item.icon className="h-5 w-5 text-primary" />
              <span>{item.label}</span>
            </a>
          ))}
          <Button
            className="flex items-center space-x-2 w-full justify-center"
            onClick={() => {
              window.open('https://github.com/INSTITUTE-OF-SCIENTIFIC-INFORMATICS', '_blank');
              toggleMobileMenu();
            }}
          >
            <Github className="h-5 w-5" />
            <span>GitHub</span>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
