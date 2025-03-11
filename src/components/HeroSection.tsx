
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Database } from 'lucide-react';
import { useEffect, useRef } from 'react';
import MoleculeBackground from './MoleculeBackground';

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const scrollToTradChemDB = () => {
    const tradChemDBSection = document.getElementById('tradchem-db-section');
    if (tradChemDBSection) {
      tradChemDBSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0e1e25]"
    >
      {/* Dark Netlify-inspired background with morphing gradient blob */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="netlify-blob absolute w-[800px] h-[800px] rounded-full blur-[120px] bg-gradient-to-r from-[#2250f4]/10 to-[#5cebdf]/10 -top-[400px] -left-[400px] animate-blob"></div>
          <div className="netlify-blob absolute w-[600px] h-[600px] rounded-full blur-[100px] bg-gradient-to-r from-[#ff73fa]/10 to-[#4d9abf]/10 top-[10%] right-[5%] animate-blob animation-delay-2"></div>
          <div className="netlify-blob absolute w-[700px] h-[700px] rounded-full blur-[120px] bg-gradient-to-r from-[#5cebdf]/10 to-[#2250f4]/10 bottom-[5%] left-[20%] animate-blob animation-delay-4"></div>
        </div>
        
        {/* Netlify-style grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0zaDF2NWgtMXYtNXptNS0yaDF2MWgtMXYtMXptLTEgMmgtNXYtMWg1djF6bS0xLTFoMXYzaC0xdi0zem0tMi0xaDF2MWgtMXYtMXptMi0xaDF2MWgtMXYtMXptLTctOGg0djFoLTR2LTF6bTAgM2gxdi01aC0xdjV6bS0yLTJoLTV2LTFoNXYxem0tMS0xaDF2M2gtMXYtM3ptLTItMWgxdjFoLTF2LTF6bS0xIDFoLTF2LTFoMXYxem0tMyAxMGg0di0xaC00djF6bTAtM2gxdjVoLTF2LTV6bTUgMmgtNXYtMWg1djF6bS0xLTFoMXYzaC0xdi0zem0yLTFoMXYxaC0xdi0xem0yIDFoLTF2LTFoMXYxem0tMyAxMGg0di0xaC00djF6bTAgM2gxdi01aC0xdjV6bS01LTJoLTV2LTFoNXYxem0tMS0xaDF2M2gtMXYtM3ptLTItMWgxdjFoLTF2LTF6bS0xIDFoLTF2LTFoMXYxem0xMyAxNmgxdjFoLTF2LTF6bS0xLTJoLTV2LTFoNXYxem0tMS0xaDF2M2gtMXYtM3ptLTItMWgxdjFoLTF2LTF6bTItMWgxdjFoLTF2LTF6bS03LTloNHYxaC00di0xem0wIDNoMXYtNWgtMXY1em01IDJoLTV2LTFoNXYxem0tMSAxaC0xdi0zaDEiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        
        {/* 3D Interactive molecules */}
        <MoleculeBackground />
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
