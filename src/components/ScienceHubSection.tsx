
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Beaker, Binary, Dna, Atom } from 'lucide-react';

const ScienceHubSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-institute-yellow/10 to-institute-blue/10">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-sm uppercase text-institute-red font-semibold tracking-wider mb-2 animate-fade-in">
            Interdisciplinary Research
          </h2>
          <h3 className="text-3xl font-bold mb-4 text-institute-blue animate-fade-in animate-delay-100">
            Where Art Meets Science
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in animate-delay-200">
            Our institute bridges traditional disciplines with cutting-edge computational methods,
            much like Leonardo da Vinci's approach to science and art.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="lg:w-1/2">
            <img 
              src="/lovable-uploads/dbda2357-cadf-4d13-94bd-89697d24774c.png" 
              alt="Leonardo da Vinci sketches" 
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>

          <div className="lg:w-1/2 space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="p-6 border-institute-orange/20 hover:border-institute-orange/50 transition-colors">
                <Beaker className="h-8 w-8 text-institute-orange mb-4" />
                <h4 className="text-xl font-semibold mb-2">Chemistry</h4>
                <p className="text-muted-foreground">Molecular modeling, drug design, and chemical informatics</p>
              </Card>

              <Card className="p-6 border-institute-blue/20 hover:border-institute-blue/50 transition-colors">
                <Binary className="h-8 w-8 text-institute-blue mb-4" />
                <h4 className="text-xl font-semibold mb-2">Computer Science</h4>
                <p className="text-muted-foreground">Algorithms, machine learning, and scientific computing</p>
              </Card>

              <Card className="p-6 border-institute-violet/20 hover:border-institute-violet/50 transition-colors">
                <Dna className="h-8 w-8 text-institute-violet mb-4" />
                <h4 className="text-xl font-semibold mb-2">Biology</h4>
                <p className="text-muted-foreground">Genomics, proteomics, and systems biology</p>
              </Card>

              <Card className="p-6 border-institute-red/20 hover:border-institute-red/50 transition-colors">
                <Atom className="h-8 w-8 text-institute-red mb-4" />
                <h4 className="text-xl font-semibold mb-2">Physics</h4>
                <p className="text-muted-foreground">Quantum mechanics, molecular dynamics, and simulations</p>
              </Card>
            </div>

            <Button className="bg-institute-violet hover:bg-institute-violet/90 text-white">
              Explore Research Areas
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScienceHubSection;
