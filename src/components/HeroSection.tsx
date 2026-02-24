import { Button } from '@/components/ui/button';
import { Github, Users } from 'lucide-react';
import VideoBackground from './VideoBackground';

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <VideoBackground />
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in leading-tight">
            Advancing Science Through{' '}
            <span className="bg-gradient-to-r from-institute-blue to-institute-purple bg-clip-text text-transparent">
              Open Source
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 mb-10 animate-fade-in animate-delay-200 max-w-2xl mx-auto">
            A community of developers, researchers, and enthusiasts building innovative scientific software solutions together.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in animate-delay-300">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto text-base px-8"
              onClick={() => window.open('https://github.com/INSTITUTE-OF-SCIENTIFIC-INFORMATICS', '_blank')}
            >
              <Github className="mr-2 h-5 w-5" />
              View Projects
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 w-full sm:w-auto text-base px-8"
            >
              <Users className="mr-2 h-5 w-5" />
              Join Community
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto animate-fade-in animate-delay-400">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">10+</div>
              <div className="text-sm text-white/50 mt-1">Projects</div>
            </div>
            <div className="text-center border-x border-white/10">
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-sm text-white/50 mt-1">Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">1K+</div>
              <div className="text-sm text-white/50 mt-1">Stars</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
