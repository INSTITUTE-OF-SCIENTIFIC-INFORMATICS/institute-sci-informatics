const Partners = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-sm uppercase text-primary font-semibold tracking-widest mb-3">
            Our Network
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Building a Knowledge Hub
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We collaborate with leading universities and research institutions to provide the highest quality education and research opportunities.
          </p>
        </div>
        
        <div className="relative overflow-hidden rounded-2xl">
          <img 
            src="/lovable-uploads/29671e65-dd7d-4e61-8d40-3956cb9943e5.png" 
            alt="Our Partners Network" 
            className="w-full h-auto object-cover rounded-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent flex items-end">
            <div className="p-8 md:p-10">
              <h3 className="text-2xl font-bold text-white mb-2">Collaborative Network</h3>
              <p className="text-white/60">Partnering with institutions worldwide to advance scientific research</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
