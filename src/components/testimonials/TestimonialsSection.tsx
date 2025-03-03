
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { testimonials } from '@/data/testimonialsData';

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(null);
  const maxIndex = testimonials.length - 1;
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setSlideDirection('left');
      setActiveIndex(prev => (prev === maxIndex ? 0 : prev + 1));
    }, 7000);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [activeIndex]);

  const handlePrevious = () => {
    setSlideDirection('right');
    setActiveIndex(prev => (prev === 0 ? maxIndex : prev - 1));
    resetTimer();
  };

  const handleNext = () => {
    setSlideDirection('left');
    setActiveIndex(prev => (prev === maxIndex ? 0 : prev + 1));
    resetTimer();
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-sm uppercase text-primary font-semibold tracking-wider mb-2 animate-fade-in">
            Student Voices
          </h2>
          <h3 className="text-3xl font-bold mb-4 animate-fade-in animate-delay-100">
            What Our Students Say
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in animate-delay-200">
            Hear from our students about their experiences with our courses and how it has transformed their academic journey.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial carousel */}
          <div className="overflow-hidden rounded-xl shadow-lg bg-white">
            <div 
              className="relative transition-all duration-500 p-8 sm:p-12"
              style={{ 
                transform: `translateX(${slideDirection === 'left' ? '-100' : slideDirection === 'right' ? '100' : '0'}%)`,
                opacity: slideDirection ? 0 : 1,
                animation: slideDirection ? `testimonial-slide-${slideDirection === 'left' ? 'in' : 'out'} 0.5s forwards` : 'none'
              }}
            >
              <div className="text-primary opacity-30 absolute top-6 left-6">
                <Quote size={48} />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-8 items-center">
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-primary/20">
                  <img 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1">
                  <blockquote className="text-lg sm:text-xl italic mb-4 text-gray-700">
                    "{testimonials[activeIndex].quote}"
                  </blockquote>
                  
                  <div className="font-semibold text-lg">{testimonials[activeIndex].name}</div>
                  <div className="text-sm text-muted-foreground">{testimonials[activeIndex].program}</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-center mt-6 gap-3">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full"
              onClick={handlePrevious}
            >
              <ChevronLeft size={20} />
              <span className="sr-only">Previous testimonial</span>
            </Button>
            
            {testimonials.map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                className={cn(
                  "w-2 h-2 p-0 rounded-full",
                  index === activeIndex ? "bg-primary" : "bg-primary/30"
                )}
                onClick={() => {
                  setSlideDirection(index < activeIndex ? 'right' : 'left');
                  setActiveIndex(index);
                }}
              >
                <span className="sr-only">Testimonial {index + 1}</span>
              </Button>
            ))}
            
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full"
              onClick={handleNext}
            >
              <ChevronRight size={20} />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
