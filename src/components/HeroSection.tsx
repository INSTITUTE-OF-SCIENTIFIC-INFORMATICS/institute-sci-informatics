
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background with overlay gradient */}
      <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center bg-no-repeat"></div>
      
      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-8 animate-fade-in">
            <img 
              src="/lovable-uploads/e7fac7ec-b4d4-40d2-a483-56b82c7a13a2.png"
              alt="Institute Logo" 
              className="w-32 h-32 object-contain"
            />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in animate-delay-100">
            Institute of Scientific Informatics
          </h1>
          
          <p className="text-xl text-white/90 mb-8 animate-fade-in animate-delay-200">
            Empowering the Next Generation of Scientists and Engineers in Sri Lanka
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animate-delay-300">
            <Button className="text-lg py-6 px-8 bg-institute-yellow text-institute-red hover:bg-white/90">
              Explore Courses
            </Button>
            <Button variant="outline" className="text-lg py-6 px-8 text-white border-white hover:bg-white/20">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg 
          className="w-10 h-10 text-white" 
          fill="none" 
          strokeWidth="1.5" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
