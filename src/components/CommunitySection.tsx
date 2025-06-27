import { Github, Users, Code2, MessageSquare, BookOpen, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const CommunitySection = () => {
  return (
    <section id="community" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-sm uppercase text-primary font-semibold tracking-wider mb-2 animate-fade-in">
            Join Our Community
          </h2>
          <h3 className="text-3xl font-bold mb-4 animate-fade-in animate-delay-100">
            Be Part of Something Bigger
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in animate-delay-200">
            Join our thriving open source community and help shape the future of scientific software development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Contribute */}
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Code2 className="h-6 w-6 text-primary" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Contribute Code</h4>
            <p className="text-muted-foreground mb-4">
              Help build and improve our open source projects. From bug fixes to new features, every contribution matters.
            </p>
            <Button variant="outline" className="w-full" onClick={() => window.open('https://github.com/INSTITUTE-OF-SCIENTIFIC-INFORMATICS', '_blank')}>
              Start Contributing
            </Button>
          </Card>

          {/* Connect */}
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Connect with Others</h4>
            <p className="text-muted-foreground mb-4">
              Join our Discord community to connect with fellow developers, researchers, and enthusiasts.
            </p>
            <Button variant="outline" className="w-full">
              Join Discord
            </Button>
          </Card>

          {/* Learn */}
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Learn & Grow</h4>
            <p className="text-muted-foreground mb-4">
              Access comprehensive documentation, tutorials, and resources to help you get started.
            </p>
            <Button variant="outline" className="w-full">
              View Resources
            </Button>
          </Card>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-gray-200">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Github className="h-6 w-6 text-primary mr-2" />
              <span className="text-3xl font-bold">10+</span>
            </div>
            <p className="text-muted-foreground">Open Source Projects</p>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Users className="h-6 w-6 text-primary mr-2" />
              <span className="text-3xl font-bold">500+</span>
            </div>
            <p className="text-muted-foreground">Community Members</p>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Star className="h-6 w-6 text-primary mr-2" />
              <span className="text-3xl font-bold">1000+</span>
            </div>
            <p className="text-muted-foreground">GitHub Stars</p>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <MessageSquare className="h-6 w-6 text-primary mr-2" />
              <span className="text-3xl font-bold">5K+</span>
            </div>
            <p className="text-muted-foreground">Discord Messages</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <Button size="lg" className="bg-primary text-white hover:bg-primary/90" onClick={() => window.open('https://github.com/INSTITUTE-OF-SCIENTIFIC-INFORMATICS', '_blank')}>
            Join Our Community Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection; 