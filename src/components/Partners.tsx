import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const Partners = () => {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  return (
    <section className="py-16 bg-secondary/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-sm uppercase text-primary font-semibold tracking-wider mb-2 animate-fade-in">
            Our Network
          </h2>
          <h3 className="text-3xl font-bold mb-4 animate-fade-in animate-delay-100">
            Building a Knowledge Hub for Sri Lanka and Beyond
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in animate-delay-200">
            We collaborate with leading universities and research institutions across Sri Lanka to provide
            the highest quality education and research opportunities.
          </p>
        </div>
        
        <div className="overflow-hidden">
          <motion.div 
            ref={carouselRef}
            className="cursor-grab"
            whileTap={{ cursor: "grabbing" }}
          >
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              className="flex gap-8 py-4"
            >
              {partnerLogos.map((logo, index) => (
                <motion.div
                  key={index}
                  className={cn(
                    "min-w-[180px] h-[120px] rounded-xl bg-white/80 backdrop-blur p-4",
                    "flex items-center justify-center shadow-sm hover:shadow-md transition-shadow",
                    "border border-gray-100"
                  )}
                >
                  <div 
                    className="w-full h-full bg-center bg-contain bg-no-repeat"
                    style={{ backgroundImage: `url(${logo})` }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Partner logos - would be actual image URLs in a real implementation
const partnerLogos = [
  // These would be actual logos in a real implementation
  "/lovable-uploads/b1bbc193-0ee2-47c8-8a24-11cb218e1b78.png",
  "https://via.placeholder.com/180x120?text=Partner+2",
  "https://via.placeholder.com/180x120?text=Partner+3",
  "https://via.placeholder.com/180x120?text=Partner+4",
  "https://via.placeholder.com/180x120?text=Partner+5",
  "https://via.placeholder.com/180x120?text=Partner+6",
];

export default Partners;
