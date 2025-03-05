
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Users, Star, Globe, Brain, Share2 } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const FeaturedCourseAnnouncement = () => {
  const handleEnroll = () => {
    toast({
      title: "Enrollment Started",
      description: "Thank you for enrolling in the Open Source Revolution in Drug Discovery course!",
    });
  };

  return (
    <section className="py-16 bg-gradient-to-r from-institute-purple/10 to-institute-blue/10">
      <div className="container">
        <Card className="overflow-hidden border-0 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image Column */}
            <div className="bg-gradient-to-br from-institute-purple to-institute-blue p-8 text-white flex flex-col justify-center">
              <Badge className="self-start mb-4 bg-white/20 hover:bg-white/30 text-white">FREE COURSE</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                🚀 Join the Open Source Revolution in Drug Discovery! 🌍
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Are you ready to be part of the next big breakthrough in science?
                Contribute to Open Source Projects for Drug Discovery and make a real impact on global health!
              </p>
              <Button onClick={handleEnroll} className="self-start bg-institute-blue text-white hover:bg-institute-blue/90">
                Enroll Now - Free Access
              </Button>
            </div>

            {/* Content Column */}
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-institute-blue">What's In It For You?</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-institute-blue/10 p-3 rounded-full">
                    <Globe className="h-6 w-6 text-institute-blue" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">Collaborate Globally</h4>
                    <p className="text-muted-foreground">Work with scientists, coders, and researchers worldwide.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-institute-purple/10 p-3 rounded-full">
                    <Brain className="h-6 w-6 text-institute-purple" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">Accelerate Innovation</h4>
                    <p className="text-muted-foreground">Help develop tools for faster drug design and analysis.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-institute-blue/10 p-3 rounded-full">
                    <Share2 className="h-6 w-6 text-institute-blue" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">Share Knowledge</h4>
                    <p className="text-muted-foreground">Publish open-access datasets to drive research forward.</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>8 weeks</span>
                </div>
                
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>Open enrollment</span>
                </div>
                
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-institute-purple fill-institute-purple" />
                  ))}
                </div>
              </div>
              
              <Button onClick={handleEnroll} className="w-full bg-institute-purple hover:bg-institute-purple/90 text-white">Get Started Today</Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default FeaturedCourseAnnouncement;
