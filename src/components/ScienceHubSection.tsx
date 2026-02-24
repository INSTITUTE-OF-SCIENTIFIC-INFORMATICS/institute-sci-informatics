
import { Card } from '@/components/ui/card';
import { Beaker, Binary, Dna, Atom, Cpu, Database, Server } from 'lucide-react';

const ScienceHubSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-institute-purple/10 to-institute-blue/10">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-sm uppercase text-institute-purple font-semibold tracking-wider mb-2 animate-fade-in">
            Interdisciplinary Research
          </h2>
          <h3 className="text-3xl font-bold mb-4 text-institute-blue animate-fade-in animate-delay-100">
            STEMS Research Lab
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in animate-delay-200">
            Our institute bridges traditional disciplines with cutting-edge computational methods,
            creating innovative solutions for complex scientific challenges.
          </p>
        </div>

        <div className="flex flex-col-reverse lg:flex-row gap-8 items-center">
          <div className="lg:w-1/2 space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="p-6 border-institute-blue/20 hover:border-institute-blue/50 transition-colors">
                <Beaker className="h-8 w-8 text-institute-blue mb-4" />
                <h4 className="text-xl font-semibold mb-2">Chemistry</h4>
                <p className="text-muted-foreground">Molecular modeling, drug design, and chemical informatics</p>
              </Card>

              <Card className="p-6 border-institute-blue/20 hover:border-institute-blue/50 transition-colors">
                <Binary className="h-8 w-8 text-institute-blue mb-4" />
                <h4 className="text-xl font-semibold mb-2">Computer Science</h4>
                <p className="text-muted-foreground">Algorithms, machine learning, and scientific computing</p>
              </Card>

              <Card className="p-6 border-institute-purple/20 hover:border-institute-purple/50 transition-colors">
                <Dna className="h-8 w-8 text-institute-purple mb-4" />
                <h4 className="text-xl font-semibold mb-2">Biology</h4>
                <p className="text-muted-foreground">Genomics, proteomics, and systems biology</p>
              </Card>

              <Card className="p-6 border-institute-purple/20 hover:border-institute-purple/50 transition-colors">
                <Atom className="h-8 w-8 text-institute-purple mb-4" />
                <h4 className="text-xl font-semibold mb-2">Physics</h4>
                <p className="text-muted-foreground">Quantum mechanics, molecular dynamics, and simulations</p>
              </Card>
            </div>
          </div>

          <div className="lg:w-1/2">
            <img 
              src="/lovable-uploads/dbda2357-cadf-4d13-94bd-89697d24774c.png" 
              alt="Leonardo da Vinci sketches" 
              className="rounded-xl shadow-lg w-full h-auto mb-6"
            />
            
            {/* Computational Lab Animation */}
            <div className="p-6 rounded-xl bg-gradient-to-r from-institute-blue/10 to-institute-purple/10 border border-institute-purple/20 shadow-lg">
              <h4 className="text-xl font-bold text-institute-blue mb-4">Computational Laboratory</h4>
              
              <div className="relative h-40 mb-4 bg-black/80 rounded-lg overflow-hidden">
                {/* Animated code and computation elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-4 gap-2 w-full h-full p-2">
                    {/* Binary animation */}
                    <div className="col-span-1 overflow-hidden animate-pulse opacity-80">
                      <div className="text-xs text-green-400 font-mono">
                        {Array(20).fill(0).map((_, i) => (
                          <div key={i} className="whitespace-nowrap">
                            {Array(8).fill(0).map((_v, _j) => Math.round(Math.random())).join('')}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Server icon animation */}
                    <div className="col-span-1 flex items-center justify-center">
                      <Server className="w-12 h-12 text-blue-400 animate-pulse" />
                    </div>
                    
                    {/* CPU animation */}
                    <div className="col-span-1 flex items-center justify-center">
                      <Cpu className="w-14 h-14 text-purple-400 animate-spin-slow" />
                    </div>
                    
                    {/* Database animation */}
                    <div className="col-span-1 flex items-center justify-center">
                      <Database className="w-12 h-12 text-cyan-400 animate-bounce" />
                    </div>
                  </div>
                </div>
                
                {/* Overlay text */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 text-white font-mono text-sm overflow-hidden">
                  <div className="typewriter-text animate-typing">
                    <span className="text-green-400">&gt;</span> Computing molecular simulations...
                    <br />
                    <span className="text-green-400">&gt;</span> Training machine learning models...
                    <br />
                    <span className="text-green-400">&gt;</span> Analyzing quantum properties...
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground">
                Our cutting-edge computational laboratory combines high-performance computing with
                advanced simulation techniques to solve complex scientific problems across disciplines.
                We specialize in molecular dynamics, quantum computations, and AI-driven scientific discovery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScienceHubSection;
