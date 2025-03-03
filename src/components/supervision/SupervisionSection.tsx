
import { Button } from '@/components/ui/button';
import { Microscope, Beaker, Users } from 'lucide-react';

const SupervisionSection = () => {
  return (
    <section id="supervision" className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-sm uppercase text-primary font-semibold tracking-wider mb-2 animate-fade-in">
            Student Support
          </h2>
          <h3 className="text-3xl font-bold mb-4 animate-fade-in animate-delay-100">
            Research Supervision
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in animate-delay-200">
            Get personalized guidance from our experienced mentors for your research projects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-slide-up">
          <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Microscope className="text-primary h-8 w-8" />
            </div>
            <h4 className="text-xl font-semibold mb-3">Undergraduate Projects</h4>
            <p className="text-muted-foreground mb-6">
              Guidance for final year research projects and dissertations in scientific computing and informatics.
            </p>
            <Button variant="outline" className="w-full">Learn More</Button>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Beaker className="text-primary h-8 w-8" />
            </div>
            <h4 className="text-xl font-semibold mb-3">Graduate Research</h4>
            <p className="text-muted-foreground mb-6">
              Advanced supervision for MSc and PhD candidates exploring novel areas in scientific informatics.
            </p>
            <Button variant="outline" className="w-full">Learn More</Button>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Users className="text-primary h-8 w-8" />
            </div>
            <h4 className="text-xl font-semibold mb-3">Industry Collaboration</h4>
            <p className="text-muted-foreground mb-6">
              Partnership opportunities for industry professionals looking to collaborate on applied research.
            </p>
            <Button variant="outline" className="w-full">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupervisionSection;
