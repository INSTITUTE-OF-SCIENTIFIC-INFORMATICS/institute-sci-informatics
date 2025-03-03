
import { Button } from '@/components/ui/button';
import { GitBranch, Users, Database } from 'lucide-react';

const FeaturedProject = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-institute-blue/10 to-institute-purple/10">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          {/* Project Image */}
          <div className="md:w-1/2 animate-slide-in">
            <div className="relative">
              <div className="absolute -right-4 -bottom-4 w-full h-full rounded-xl border-2 border-institute-orange/30 -z-10"></div>
              <img 
                src="/lovable-uploads/8d43a969-0c24-4a9f-9793-d8efc036aa94.png" 
                alt="Cheminformatics Project" 
                className="rounded-xl shadow-xl"
              />
            </div>
          </div>
          
          {/* Project Content */}
          <div className="md:w-1/2 animate-slide-in animate-delay-200">
            <h2 className="text-sm uppercase text-institute-orange font-semibold tracking-wider mb-2">
              Open Source Project
            </h2>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-institute-blue">
              Global Cheminformatics Platform
            </h1>
            
            <p className="text-lg text-muted-foreground mb-6">
              Join our flagship cheminformatics initiative designed to provide Sri Lankan students 
              with hands-on experience in computational chemistry, data analysis, and scientific computing.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-sm border border-institute-yellow/30">
                <GitBranch className="text-institute-red h-6 w-6 mb-2" />
                <span className="text-sm font-medium">Open Source</span>
              </div>
              
              <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-sm border border-institute-yellow/30">
                <Users className="text-institute-orange h-6 w-6 mb-2" />
                <span className="text-sm font-medium">Collaborative</span>
              </div>
              
              <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-sm border border-institute-yellow/30">
                <Database className="text-institute-violet h-6 w-6 mb-2" />
                <span className="text-sm font-medium">Real-world Data</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-institute-blue hover:bg-institute-blue/90 text-white">
                Join Project
              </Button>
              <Button size="lg" variant="outline" className="text-institute-blue border-institute-blue">
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
