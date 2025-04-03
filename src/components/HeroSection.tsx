import { Button } from '@/components/ui/button';
import { Database } from 'lucide-react';
import { useRef } from 'react';
import VideoBackground from './VideoBackground';

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  // Use the Vimeo video URL provided by the user
  const videoUrl = "https://player.vimeo.com/video/1072054914";
  
  // Keep a fallback image just in case, but it will only show before video loads
  const fallbackImageUrl = "/lovable-uploads/e7fac7ec-b4d4-40d2-a483-56b82c7a13a2.png";

  const scrollToTradChemDB = () => {
    const tradChemDBSection = document.getElementById('tradchem-db-section');
    if (tradChemDBSection) {
      tradChemDBSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen w-full flex items-center overflow-hidden bg-[#050315]"
    >
      {/* Video background */}
      <VideoBackground 
        videoUrl={videoUrl} 
        fallbackImageUrl={fallbackImageUrl}
      />
      
      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
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
