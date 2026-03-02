import { Github, Users, Code2, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const CommunitySection = () => {
  return (
    <section id="community" className="py-24 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-sm uppercase text-primary font-semibold tracking-widest mb-3">
            Join Our Community
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Be Part of Something Bigger
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join our open source community and help shape the future of scientific software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="p-8 hover:border-white/20 transition-all">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              <Code2 className="h-6 w-6 text-primary" />
            </div>
            <h4 className="text-lg font-semibold text-foreground mb-2">Contribute Code</h4>
            <p className="text-muted-foreground text-sm mb-6">
              Help build and improve our open source projects. Every contribution matters.
            </p>
            <Button variant="outline" className="w-full border-white/10 hover:bg-white/5" onClick={() => window.open('https://github.com/INSTITUTE-OF-SCIENTIFIC-INFORMATICS', '_blank')}>
              Start Contributing
            </Button>
          </Card>

          <Card className="p-8 hover:border-white/20 transition-all">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h4 className="text-lg font-semibold text-foreground mb-2">Connect with Others</h4>
            <p className="text-muted-foreground text-sm mb-6">
              Join our WhatsApp group to connect with developers, researchers, and enthusiasts.
            </p>
            <Button variant="outline" className="w-full border-white/10 hover:bg-white/5" onClick={() => window.open('https://chat.whatsapp.com/BsBK5BGPGu29PXqyXynQyQ', '_blank')}>
              Join WhatsApp
            </Button>
          </Card>

          <Card className="p-8 hover:border-white/20 transition-all">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <h4 className="text-lg font-semibold text-foreground mb-2">Learn & Grow</h4>
            <p className="text-muted-foreground text-sm mb-6">
              Access documentation, tutorials, and resources to get started.
            </p>
            <Button variant="outline" className="w-full border-white/10 hover:bg-white/5">
              View Resources
            </Button>
          </Card>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-8 py-10 border-t border-white/5">
          {[
            { icon: Github, value: '2+', label: 'Open Source Projects' },
            { icon: Users, value: '100+', label: 'Community Members' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="flex items-center justify-center mb-2">
                <stat.icon className="h-5 w-5 text-primary mr-2" />
                <span className="text-2xl font-bold text-foreground">{stat.value}</span>
              </div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
