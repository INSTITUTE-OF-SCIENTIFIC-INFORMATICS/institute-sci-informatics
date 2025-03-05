
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Atom, Hash, Sigma, Variable } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background with overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-institute-blue/80 to-institute-purple/80 bg-cover bg-center bg-no-repeat">
        {/* Mathematical and molecular background elements */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          {/* Mathematical symbols */}
          <div className="absolute top-20 left-20 text-white text-4xl">∫e<sup>x</sup> dx = e<sup>x</sup> + C</div>
          <div className="absolute top-40 right-20 text-white text-3xl">E = mc<sup>2</sup></div>
          <div className="absolute bottom-20 left-1/4 text-white text-4xl">∑<sub>n=0</sub><sup>∞</sup> x<sup>n</sup>/n!</div>
          <div className="absolute top-1/3 left-1/3 text-white text-3xl">F = G(m₁m₂)/r²</div>
          
          {/* Molecular illustrations */}
          <div className="absolute top-1/2 left-20">
            <Atom className="h-24 w-24 text-white" />
          </div>
          <div className="absolute bottom-40 right-40">
            <Hash className="h-16 w-16 text-white" />
          </div>
          <div className="absolute top-40 left-40">
            <Sigma className="h-20 w-20 text-white" />
          </div>
          <div className="absolute bottom-1/3 right-1/4">
            <Variable className="h-20 w-20 text-white" />
          </div>
          
          {/* Benzene ring representation */}
          <div className="absolute top-1/4 right-1/3 text-white text-8xl">⌬</div>
        </div>
      </div>
      
      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-8 animate-fade-in">
            <img 
              src="/lovable-uploads/e7fac7ec-b4d4-40d2-a483-56b82c7a13a2.png"
              alt="Institute Logo" 
              className="w-48 h-48 object-contain" /* Increased from w-32 h-32 */
            />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in animate-delay-100">
            Institute of Scientific Informatics
          </h1>
          
          <p className="text-xl text-white/90 mb-8 animate-fade-in animate-delay-200">
            Empowering the Next Generation of Scientists and Engineers in Sri Lanka
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animate-delay-300">
            <Button className="text-lg py-6 px-8 bg-institute-purple text-white hover:bg-institute-blue/90">
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
