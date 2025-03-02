
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Book, GraduationCap, Users, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
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
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="/" className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/ee7050b6-7b75-4cc0-8422-a29830b27952.png" 
            alt="Institute of Scientific Informatics" 
            className="h-10 w-10 object-contain"
          />
          <span className={cn(
            "font-semibold tracking-tight transition-all",
            isScrolled ? "text-primary text-lg" : "text-white text-xl"
          )}>
            Institute of Scientific Informatics
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#courses" 
            className={cn(
              "flex items-center space-x-1 hover:text-primary transition-colors",
              isScrolled ? "text-foreground" : "text-white"
            )}
          >
            <Book className="h-4 w-4" />
            <span>Courses</span>
          </a>
          <a 
            href="#projects" 
            className={cn(
              "flex items-center space-x-1 hover:text-primary transition-colors",
              isScrolled ? "text-foreground" : "text-white"
            )}
          >
            <GraduationCap className="h-4 w-4" />
            <span>Projects</span>
          </a>
          <a 
            href="#supervision" 
            className={cn(
              "flex items-center space-x-1 hover:text-primary transition-colors",
              isScrolled ? "text-foreground" : "text-white"
            )}
          >
            <Users className="h-4 w-4" />
            <span>Supervision</span>
          </a>
          <Button
            variant={isScrolled ? "default" : "outline"}
            className={cn(
              "transition-all",
              !isScrolled && "text-white hover:bg-white/20 border-white"
            )}
          >
            Sign In
          </Button>
        </nav>

        {/* Mobile menu button */}
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

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-sm z-40 md:hidden",
          "transition-opacity duration-300 ease-in-out pt-20",
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <nav className="container flex flex-col space-y-8 py-8">
          <a href="#courses" className="flex items-center space-x-2 text-xl" onClick={toggleMobileMenu}>
            <Book className="h-5 w-5 text-primary" />
            <span>Courses</span>
          </a>
          <a href="#projects" className="flex items-center space-x-2 text-xl" onClick={toggleMobileMenu}>
            <GraduationCap className="h-5 w-5 text-primary" />
            <span>Projects</span>
          </a>
          <a href="#supervision" className="flex items-center space-x-2 text-xl" onClick={toggleMobileMenu}>
            <Users className="h-5 w-5 text-primary" />
            <span>Supervision</span>
          </a>
          <Button size="lg" className="w-full">Sign In</Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
