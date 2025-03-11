import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Atom, Dna, Hash, Sigma, Variable, Braces, Code, Database } from 'lucide-react';
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
      (element as HTMLElement).style.animationDelay = `${index * 0.2}s`;
      
      // Set animation duration for more variety
      const duration = 10 + Math.random() * 10;
      (element as HTMLElement).style.animationDuration = `${duration}s`;
    });
    
    // Add dynamic elements and particles (Netlify-style)
    const createParticles = () => {
      if (!animationRef.current) return;
      
      // Create particle container if it doesn't exist
      let particlesContainer = document.getElementById('netlify-particles');
      if (!particlesContainer) {
        particlesContainer = document.createElement('div');
        particlesContainer.id = 'netlify-particles';
        particlesContainer.className = 'absolute inset-0 z-0 overflow-hidden pointer-events-none';
        animationRef.current.appendChild(particlesContainer);
      }
      
      // Create a particle
      const createParticle = () => {
        const particle = document.createElement('div');
        const size = Math.random() * 8 + 2; // 2-10px
        particle.className = 'absolute rounded-full opacity-30 pointer-events-none';
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random position
        const randomX = Math.random() * 100;
        const randomY = Math.random() * 100;
        particle.style.left = `${randomX}%`;
        particle.style.top = `${randomY}%`;
        
        // Random color (using Netlify palette)
        const colors = ['#2250f4', '#0e1e25', '#4d9abf', '#5cebdf', '#ff73fa'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.backgroundColor = randomColor;
        
        // Set animation
        const duration = 10 + Math.random() * 30; // 10-40s
        particle.style.animation = `netlify-float ${duration}s ease-in-out infinite`;
        
        // Add to container
        particlesContainer.appendChild(particle);
        
        // Remove after some time to prevent too many elements
        setTimeout(() => {
          if (particlesContainer.contains(particle)) {
            particlesContainer.removeChild(particle);
          }
        }, duration * 1000);
      };
      
      // Create particles at intervals
      setInterval(createParticle, 300);
      
      // Initial particles
      for (let i = 0; i < 20; i++) {
        createParticle();
      }
    };
    
    createParticles();
    
  }, []);

  const scrollToTradChemDB = () => {
    const tradChemDBSection = document.getElementById('tradchem-db-section');
    if (tradChemDBSection) {
      tradChemDBSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Netlify-inspired background with morphing gradient blob */}
      <div className="absolute inset-0 bg-gradient-to-r from-institute-blue/10 to-institute-purple/10 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="netlify-blob absolute w-[800px] h-[800px] rounded-full blur-[120px] bg-gradient-to-r from-[#2250f4]/20 to-[#5cebdf]/20 -top-[400px] -left-[400px] animate-blob"></div>
          <div className="netlify-blob absolute w-[600px] h-[600px] rounded-full blur-[100px] bg-gradient-to-r from-[#ff73fa]/20 to-[#4d9abf]/20 top-[10%] right-[5%] animate-blob animation-delay-2"></div>
          <div className="netlify-blob absolute w-[700px] h-[700px] rounded-full blur-[120px] bg-gradient-to-r from-[#5cebdf]/20 to-[#2250f4]/20 bottom-[5%] left-[20%] animate-blob animation-delay-4"></div>
        </div>
        
        {/* Mathematical and molecular background elements */}
        <div ref={animationRef} className="absolute inset-0 overflow-hidden">
          {/* Netlify-style grid pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMTIxMjEiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0zaDF2NWgtMXYtNXptNS0yaDF2MWgtMXYtMXptLTEgMmgtNXYtMWg1djF6bS0xLTFoMXYzaC0xdi0zem0tMi0xaDF2MWgtMXYtMXptMi0xaDF2MWgtMXYtMXptLTctOGg0djFoLTR2LTF6bTAgM2gxdi01aC0xdjV6bS0yLTJoLTV2LTFoNXYxem0tMS0xaDF2M2gtMXYtM3ptLTItMWgxdjFoLTF2LTF6bS0xIDFoLTF2LTFoMXYxem0tMyAxMGg0di0xaC00djF6bTAtM2gxdjVoLTF2LTV6bTUgMmgtNXYtMWg1djF6bS0xLTFoMXYzaC0xdi0zem0yLTFoMXYxaC0xdi0xem0yIDFoLTF2LTFoMXYxem0tMyAxMGg0di0xaC00djF6bTAgM2gxdi01aC0xdjV6bS01LTJoLTV2LTFoNXYxem0tMS0xaDF2M2gtMXYtM3ptLTItMWgxdjFoLTF2LTF6bS0xIDFoLTF2LTFoMXYxem0xMyAxNmgxdjFoLTF2LTF6bS0xLTJoLTV2LTFoNXYxem0tMS0xaDF2M2gtMXYtM3ptLTItMWgxdjFoLTF2LTF6bTItMWgxdjFoLTF2LTF6bS03LTloNHYxaC00di0xem0wIDNoMXYtNWgtMXY1em01IDJoLTV2LTFoNXYxem0tMSAxaC0xdi0zaDEiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-70"></div>
          
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
          <div className="animate-element absolute animate-pulse-slow animation-delay-8 opacity-20 transition-all duration-[24s]">
            <Code className="h-24 w-24 text-white" />
          </div>
          <div className="animate-element absolute animate-pulse-slow animation-delay-12 opacity-20 transition-all duration-[26s]">
            <Braces className="h-20 w-20 text-white" />
          </div>
          <div className="animate-element absolute animate-pulse-slow animation-delay-14 opacity-20 transition-all duration-[30s]">
            <Database className="h-28 w-28 text-white" />
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
          
          {/* SMILES notation */}
          <div className="animate-element absolute text-white text-sm animate-float animation-delay-6 opacity-20 transition-all duration-[26s]">
            <span className="inline-block font-mono">CC(=O)OC1=CC=CC=C1C(=O)O</span>
          </div>
          
          {/* Genomic sequence */}
          <div className="animate-element absolute text-white text-xs animate-float animation-delay-10 opacity-20 transition-all duration-[28s]">
            <span className="inline-block font-mono">ATGGCCTAAGTCGATCGATCG</span>
          </div>
        </div>
      </div>
      
      {/* CSS for Netlify-inspired effects */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes netlify-float {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg) scale(1);
          }
          25% {
            transform: translate(50px, -30px) rotate(5deg) scale(1.1);
          }
          50% {
            transform: translate(20px, 40px) rotate(-5deg) scale(0.9);
          }
          75% {
            transform: translate(-30px, 20px) rotate(3deg) scale(1.05);
          }
        }
        
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.2;
          }
          33% {
            transform: translate(50px, -30px) scale(1.1);
            opacity: 0.25;
          }
          66% {
            transform: translate(-20px, 30px) scale(0.9);
            opacity: 0.3;
          }
        }
        
        .animate-blob {
          animation: blob 20s ease-in-out infinite;
        }
        
        .animation-delay-2 {
          animation-delay: 4s;
        }
        
        .animation-delay-4 {
          animation-delay: 8s;
        }
        
        @keyframes floatAndFade {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          10% {
            opacity: 0.4;
          }
          90% {
            opacity: 0.4;
          }
          100% {
            opacity: 0;
            transform: translateY(-20px);
          }
        }
        
        .dynamic-element {
          pointer-events: none;
          will-change: transform, opacity;
        }
      `}} />
      
      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-8 animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 blur-md bg-gradient-to-r from-[#2250f4]/40 to-[#5cebdf]/40 rounded-full animate-pulse-slow"></div>
              <img 
                src="/lovable-uploads/e7fac7ec-b4d4-40d2-a483-56b82c7a13a2.png"
                alt="Institute Logo" 
                className="w-48 h-48 object-contain relative z-10"
              />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in animate-delay-100 bg-gradient-to-r from-[#2250f4] to-[#5cebdf] bg-clip-text text-transparent">
            Institute of Scientific Informatics
          </h1>
          
          <p className="text-xl text-white/90 mb-8 animate-fade-in animate-delay-200 text-balance">
            Empowering the Next Generation of Scientists and Engineers in Sri Lanka
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animate-delay-300">
            <Button 
              className="text-lg py-6 px-10 bg-transparent backdrop-blur-md border-none text-white relative overflow-hidden group transition-all duration-300"
              onClick={scrollToTradChemDB}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#2250f4] to-[#5cebdf] opacity-90 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoNHYxaC00di0xem0wLTNoMXY1aC0xdi01em01LTJoMXYxaC0xdi0xem0tMSAyaC01di0xaDV2MXptLTEtMWgxdjNoLTF2LTN6bS0yLTFoMXYxaC0xdi0xem0yLTFoMXYxaC0xdi0xem0tNy04aDR2MWgtNHYtMXptMCAzaDF2LTVoLTF2NXptLTItMmgtNXYtMWg1djF6bS0xLTFoMXYzaC0xdi0zem0tMi0xaDF2MWgtMXYtMXptLTEgMWgtMXYtMWgxdjF6bS0zIDEwaDR2LTFoLTR2MXptMC0zaDF2NWgtMXYtNXptNSAyaC01di0xaDV2MXptLTEtMWgxdjNoLTF2LTN6bTItMWgxdjFoLTF2LTF6bTIgMWgtMXYtMWgxdjF6bS0zIDEwaDR2LTFoLTR2MXptMCAzaDF2LTVoLTF2NXptLTUtMmgtNXYtMWg1djF6bS0xLTFoMXYzaC0xdi0zem0tMi0xaDF2MWgtMXYtMXptLTEgMWgtMXYtMWgxdjF6bTEzIDE2aDF2MWgtMXYtMXptLTEtMmgtNXYtMWg1djF6bS0xLTFoMXYzaC0xdi0zem0tMi0xaDF2MWgtMXYtMXptMi0xaDF2MWgtMXYtMXptLTctOWg0djFoLTR2LTF6bTAgM2gxdi01aC0xdjV6bTUgMmgtNXYtMWg1djF6bS0xIDFoLTF2LTNoMSIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></span>
              <span className="relative flex items-center gap-2 z-10">
                <Database className="h-5 w-5 animate-pulse-slow" />
                <span className="bg-gradient-to-r from-white to-white bg-clip-text">TradChemLLM</span>
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
