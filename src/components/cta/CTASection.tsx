
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="py-20 bg-institute-blue/10">
      <div className="container">
        <div className="bg-gradient-to-r from-institute-blue to-institute-purple rounded-2xl p-10 text-white shadow-xl">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
              Ready to Begin Your Scientific Journey?
            </h2>
            <p className="text-xl text-white/80 mb-8 animate-fade-in animate-delay-100">
              Join our community of scientists, researchers, and students to advance your knowledge and career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animate-delay-200">
              <Button size="lg" className="bg-white text-institute-purple hover:bg-white/90">
                Enroll Now
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
