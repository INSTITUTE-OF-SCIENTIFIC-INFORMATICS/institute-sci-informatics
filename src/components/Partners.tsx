
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
    <section className="py-16 bg-gradient-to-r from-institute-yellow/20 to-institute-orange/20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-sm uppercase text-institute-red font-semibold tracking-wider mb-2 animate-fade-in">
            Our Network
          </h2>
          <h3 className="text-3xl font-bold mb-4 text-institute-blue animate-fade-in animate-delay-100">
            Building a Knowledge Hub for Sri Lanka and Beyond
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in animate-delay-200">
            We collaborate with leading universities and research institutions across Sri Lanka to provide
            the highest quality education and research opportunities.
          </p>
        </div>
        
        <div className="relative overflow-hidden rounded-xl">
          <img 
            src="/lovable-uploads/29671e65-dd7d-4e61-8d40-3956cb9943e5.png" 
            alt="Our Partners Network" 
            className="w-full h-auto object-cover rounded-xl shadow-md"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
            <div className="p-8 text-white">
              <h3 className="text-2xl font-bold mb-2">
                Collaborative Network
              </h3>
              <p className="text-white/80">
                Partnering with educational institutions worldwide to advance scientific research
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
