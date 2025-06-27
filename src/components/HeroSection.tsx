import { Button } from '@/components/ui/button';
import { Github, Code2, Users } from 'lucide-react';
import GalaxyBackground from './GalaxyBackground';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <GalaxyBackground />
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fade-in">
            <Code2 className="h-5 w-5 text-primary mr-2" />
            <span className="text-white/90">Open Source Scientific Software Community</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in animate-delay-100">
            Advancing Science Through Open Source Collaboration
          </h1>
          
          <p className="text-xl text-white/80 mb-8 animate-fade-in animate-delay-200">
            Join a community of developers, researchers, and enthusiasts working together to create innovative scientific software solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in animate-delay-300">
            <Button
              size="lg"
              className="bg-white text-gray-900 hover:bg-white/90 w-full sm:w-auto"
              onClick={() => window.open('https://github.com/INSTITUTE-OF-SCIENTIFIC-INFORMATICS', '_blank')}
            >
              <Github className="mr-2 h-5 w-5" />
              View Our Projects
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/20 w-full sm:w-auto"
            >
              <Users className="mr-2 h-5 w-5" />
              Join Community
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-white/80 animate-fade-in animate-delay-400">
            <div className="backdrop-blur-sm bg-white/5 rounded-lg p-4">
              <div className="font-bold text-2xl text-white mb-1">10+</div>
              <div>Open Source Projects</div>
            </div>
            <div className="backdrop-blur-sm bg-white/5 rounded-lg p-4">
              <div className="font-bold text-2xl text-white mb-1">500+</div>
              <div>Community Members</div>
            </div>
            <div className="backdrop-blur-sm bg-white/5 rounded-lg p-4">
              <div className="font-bold text-2xl text-white mb-1">1000+</div>
              <div>GitHub Stars</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
