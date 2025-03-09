
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
    
    // Add more dynamic elements
    const addDynamicElements = () => {
      // Generate random chemical notations and code snippets
      const chemicalNotations = [
        "C₆H₁₂O₆", "NH₃", "H₂SO₄", "NaCl", "CH₃COOH", "C₁₀H₁₄N₂", 
        "C₈H₁₀N₄O₂", "C₂H₅OH", "H₂O", "CO₂", "CHCl₃", "C₆H₆"
      ];
      
      const codeSnippets = [
        "function optimize(x) { return x*x; }", 
        "import numpy as np", 
        "for i in range(100):", 
        "df = pd.DataFrame(data)",
        "model.fit(X_train, y_train)",
        "const result = await api.predict(data)",
        "sigmoid(x) = 1/(1+exp(-x))"
      ];
      
      const smiles = [
        "CC(=O)OC1=CC=CC=C1C(=O)O", // Aspirin
        "CN1C=NC2=C1C(=O)N(C(=O)N2C)C", // Caffeine
        "C(C1=CC=C(C=C1)C(=O)O)NC(=O)C", // Paracetamol
        "CC12CCC(CC1)CC(C2)C(C)CN", // Pseudoephedrine
        "COC1=CC2=C(C=C1)C(=O)C(=CO2)C3=CC=C(C=C3)O", // Daidzein
        "O=C(OC1CC(CC2C1C(CC3(C2CCC4C3CCC5=CC(=O)CCC45C)C)O)OC(=O)C)C"
      ];
      
      const genomicSequences = [
        "ATGGTGCATCTGACTCCTGAGGAGAAG", 
        "GATTACA", 
        "GCTATAGCGCGCTCGC", 
        "AGTCAGTCAGTC",
        "GGAATTCTGCAGATATC"
      ];
      
      const mathematicalEquations = [
        "∇²ψ + (8π²m/h²)(E-V)ψ = 0",
        "E = mc²",
        "F = G(m₁m₂)/r²",
        "∫e^x dx = e^x + C",
        "d/dx[f(g(x))] = f'(g(x))·g'(x)",
        "F = ma",
        "PV = nRT",
        "∑x = (n(n+1))/2"
      ];
      
      // Create new animated elements periodically
      if (animationRef.current) {
        const container = animationRef.current;
        
        // Function to create a new dynamic element
        const createDynamicElement = (content: string, type: string) => {
          const elem = document.createElement('div');
          elem.className = `dynamic-element text-xs sm:text-sm md:text-base absolute text-white/20 font-mono`;
          elem.innerHTML = content;
          
          // Random position
          const randomX = Math.random() * 90 + 5;
          const randomY = Math.random() * 90 + 5;
          elem.style.left = `${randomX}%`;
          elem.style.top = `${randomY}%`;
          
          // Random animation speed
          const animDuration = 2 + Math.random() * 3;
          
          // Different styling based on type
          switch(type) {
            case 'chemical':
              elem.classList.add('text-blue-400/30');
              break;
            case 'code':
              elem.classList.add('text-green-400/30');
              break;
            case 'smile':
              elem.classList.add('text-purple-400/30');
              break;
            case 'genomic':
              elem.classList.add('text-red-400/30');
              break;
            case 'math':
              elem.classList.add('text-yellow-400/30');
              break;
          }
          
          // Animate the element
          elem.style.animation = `floatAndFade ${animDuration}s forwards`;
          
          // Add to container
          container.appendChild(elem);
          
          // Remove after animation completes
          setTimeout(() => {
            if (elem.parentNode === container) {
              container.removeChild(elem);
            }
          }, animDuration * 1000);
        };
        
        // Create various dynamic elements
        setTimeout(() => {
          const randIdx = Math.floor(Math.random() * chemicalNotations.length);
          createDynamicElement(chemicalNotations[randIdx], 'chemical');
        }, Math.random() * 200);
        
        setTimeout(() => {
          const randIdx = Math.floor(Math.random() * codeSnippets.length);
          createDynamicElement(codeSnippets[randIdx], 'code');
        }, Math.random() * 200);
        
        setTimeout(() => {
          const randIdx = Math.floor(Math.random() * smiles.length);
          createDynamicElement(smiles[randIdx], 'smile');
        }, Math.random() * 200);
        
        setTimeout(() => {
          const randIdx = Math.floor(Math.random() * genomicSequences.length);
          createDynamicElement(genomicSequences[randIdx], 'genomic');
        }, Math.random() * 200);
        
        setTimeout(() => {
          const randIdx = Math.floor(Math.random() * mathematicalEquations.length);
          createDynamicElement(mathematicalEquations[randIdx], 'math');
        }, Math.random() * 200);
      }
      
      // Continue generating elements
      requestAnimationFrame(addDynamicElements);
    };
    
    // Start the dynamic element generation
    addDynamicElements();
  }, []);

  const scrollToTradChemDB = () => {
    const tradChemDBSection = document.getElementById('tradchem-db-section');
    if (tradChemDBSection) {
      tradChemDBSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
      
      {/* Custom animation styles */}
      <style jsx>{`
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
      `}</style>
      
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
            <Button 
              className="text-lg py-6 px-10 bg-transparent backdrop-blur-md border-2 border-white/50 text-white hover:bg-white/10 shadow-lg shadow-blue-500/20 transition-all duration-300 group relative overflow-hidden"
              onClick={scrollToTradChemDB}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600/40 to-purple-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center gap-2">
                <Database className="h-5 w-5 animate-pulse-slow" />
                TradChemLLM
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
