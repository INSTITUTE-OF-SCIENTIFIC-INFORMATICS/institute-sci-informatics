
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Atom, Dna, Hash, Sigma, Variable } from 'lucide-react';
import { useEffect, useRef } from 'react';

const HeroSection = () => {
  const animationRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!animationRef.current) return;
    
    // Animation elements
    const elements = animationRef.current.querySelectorAll('.animate-element');
    
    elements.forEach((element, index) => {
      // Random initial position
      const randomX = Math.random() * 80 + 10; // 10% to 90%
      const randomY = Math.random() * 80 + 10; // 10% to 90%
      
      // Set initial position
      (element as HTMLElement).style.left = `${randomX}%`;
      (element as HTMLElement).style.top = `${randomY}%`;
      
      // Set animation delay
      (element as HTMLElement).style.animationDelay = `${index * 0.3}s`;
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-institute-blue/80 to-institute-purple/80 bg-cover bg-center bg-no-repeat">
        {/* Mathematical and molecular background elements */}
        <div ref={animationRef} className="absolute inset-0 overflow-hidden">
          {/* Mathematical symbols */}
          <div className="animate-element absolute text-white text-4xl animate-float opacity-20 transition-all duration-[15s]">∫e<sup>x</sup> dx = e<sup>x</sup> + C</div>
          <div className="animate-element absolute text-white text-3xl animate-float animation-delay-2 opacity-20 transition-all duration-[18s]">E = mc<sup>2</sup></div>
          <div className="animate-element absolute text-white text-4xl animate-float animation-delay-4 opacity-20 transition-all duration-[20s]">∑<sub>n=0</sub><sup>∞</sup> x<sup>n</sup>/n!</div>
          <div className="animate-element absolute text-white text-3xl animate-float animation-delay-6 opacity-20 transition-all duration-[25s]">F = G(m₁m₂)/r²</div>
          <div className="animate-element absolute text-white text-3xl animate-float animation-delay-8 opacity-20 transition-all duration-[22s]">∇ × B = μ₀J + μ₀ε₀∂E/∂t</div>
          <div className="animate-element absolute text-white text-3xl animate-float animation-delay-10 opacity-20 transition-all duration-[17s]">P(A|B) = P(B|A)P(A)/P(B)</div>
          <div className="animate-element absolute text-white text-3xl animate-float animation-delay-12 opacity-20 transition-all duration-[19s]">∇ · E = ρ/ε₀</div>
          
          {/* Molecular illustrations */}
          <div className="animate-element absolute animate-spin-slow opacity-20 transition-all duration-[30s]">
            <Atom className="h-24 w-24 text-white" />
          </div>
          <div className="animate-element absolute animate-spin-slow animation-delay-5 opacity-20 transition-all duration-[35s]">
            <Hash className="h-16 w-16 text-white" />
          </div>
          <div className="animate-element absolute animate-spin-slow animation-delay-10 opacity-20 transition-all duration-[25s]">
            <Sigma className="h-20 w-20 text-white" />
          </div>
          <div className="animate-element absolute animate-spin-slow animation-delay-15 opacity-20 transition-all duration-[28s]">
            <Variable className="h-20 w-20 text-white" />
          </div>
          <div className="animate-element absolute animate-pulse-slow animation-delay-10 opacity-20 transition-all duration-[28s]">
            <Dna className="h-32 w-32 text-white" />
          </div>
          
          {/* Benzene ring representation */}
          <div className="animate-element absolute text-white text-8xl animate-spin-slow animation-delay-8 opacity-20 transition-all duration-[40s]">⌬</div>
          
          {/* DNA double helix representation */}
          <div className="animate-element absolute text-white text-6xl animate-float animation-delay-12 opacity-20 transition-all duration-[22s]">
            <span className="inline-block animate-pulse-slow">≈≈≈≈≈</span>
          </div>
          
          {/* Chemical structure representation */}
          <div className="animate-element absolute text-white text-4xl animate-float animation-delay-14 opacity-20 transition-all duration-[24s]">
            <span className="inline-block">H—C≡C—H</span>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-8 animate-fade-in">
            <img 
              src="/lovable-uploads/e7fac7ec-b4d4-40d2-a483-56b82c7a13a2.png"
              alt="Institute Logo" 
              className="w-48 h-48 object-contain"
            />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in animate-delay-100">
            Institute of Scientific Informatics
          </h1>
          
          <p className="text-xl text-white/90 mb-8 animate-fade-in animate-delay-200">
            Empowering the Next Generation of Scientists and Engineers in Sri Lanka
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animate-delay-300">
            <Button className="text-lg py-6 px-8 bg-institute-purple text-white hover:bg-institute-purple/90">
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
