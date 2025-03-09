
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Users, Star, Globe, Brain, Share2, FlaskConical, Atom, Code } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const FeaturedCourseAnnouncement = () => {
  const handleGitHubRedirect = () => {
    window.open('https://github.com/INSTITUTE-OF-SCIENTIFIC-INFORMATICS/Trad-Chem', '_blank');
  };

  return (
    <section className="py-16 bg-gradient-to-r from-institute-purple/10 to-institute-blue/10">
      <div className="container">
        <Card className="overflow-hidden border-0 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image Column */}
            <div className="bg-gradient-to-br from-institute-purple to-institute-blue p-8 text-white flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                🚀 Join the Open Source Revolution in Drug Discovery! 🌍
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Are you ready to be part of the next big breakthrough in science?
                Contribute to Open Source Projects for Drug Discovery and make a real impact on global health!
              </p>
              <p className="text-lg mb-8 bg-black/20 p-4 rounded-lg backdrop-blur-sm border border-white/10">
                Join With TradChem Open Source Project
              </p>
              <div className="flex space-x-4">
                <Atom className="h-12 w-12 text-white/80 animate-spin-slow" />
                <FlaskConical className="h-10 w-10 text-white/80 animate-pulse-slow" />
                <Code className="h-11 w-11 text-white/80 animate-float" />
              </div>
            </div>

            {/* Content Column */}
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-institute-blue">What's In It For You?</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-institute-blue/10 p-3 rounded-full">
                    <Globe className="h-6 w-6 text-institute-blue" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">Collaborate Globally</h4>
                    <p className="text-muted-foreground">Work with scientists, coders, and researchers worldwide.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-institute-purple/10 p-3 rounded-full">
                    <Brain className="h-6 w-6 text-institute-purple" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">Accelerate Innovation</h4>
                    <p className="text-muted-foreground">Help develop tools for faster drug design and analysis.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-institute-blue/10 p-3 rounded-full">
                    <Share2 className="h-6 w-6 text-institute-blue" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">Share Knowledge</h4>
                    <p className="text-muted-foreground">Publish open-access datasets to drive research forward.</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>8 weeks</span>
                </div>
                
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>Open enrollment</span>
                </div>
                
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-institute-purple fill-institute-purple" />
                  ))}
                </div>
              </div>
              
              <Button onClick={handleGitHubRedirect} className="w-full bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white flex items-center justify-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                Get Started Today
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default FeaturedCourseAnnouncement;
