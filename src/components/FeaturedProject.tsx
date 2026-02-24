import { Button } from '@/components/ui/button';
import { GitBranch, Users, Database } from 'lucide-react';

const FeaturedProject = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <div className="relative rounded-2xl overflow-hidden">
              <img 
                src="/lovable-uploads/8d43a969-0c24-4a9f-9793-d8efc036aa94.png" 
                alt="Cheminformatics Project" 
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
          </div>
          
          <div className="md:w-1/2">
            <p className="text-sm uppercase text-primary font-semibold tracking-widest mb-3">
              Flagship Project
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Global Cheminformatics Platform
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Join our flagship cheminformatics initiative — hands-on experience in computational chemistry, data analysis, and scientific computing.
            </p>
            
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { icon: GitBranch, label: 'Open Source' },
                { icon: Users, label: 'Collaborative' },
                { icon: Database, label: 'Real-world Data' },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center p-4 rounded-xl bg-secondary/50 border border-white/5">
                  <item.icon className="h-5 w-5 text-primary mb-2" />
                  <span className="text-xs font-medium text-muted-foreground">{item.label}</span>
                </div>
              ))}
            </div>
            
            <div className="flex gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Join Project
              </Button>
              <Button size="lg" variant="outline" className="border-white/10 hover:bg-white/5">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
