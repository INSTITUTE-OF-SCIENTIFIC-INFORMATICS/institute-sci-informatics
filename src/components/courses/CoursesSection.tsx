
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CourseCard from '@/components/CourseCard';

interface CourseType {
  title: string;
  description: string;
  image: string;
  category: "Free" | "Paid" | "Featured";
  duration: string;
  students: number;
  rating: number;
  maxRating: number;
}

interface CoursesSectionProps {
  courses: CourseType[];
}

const CoursesSection = ({ courses }: CoursesSectionProps) => {
  return (
    <section id="courses" className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-sm uppercase text-primary font-semibold tracking-wider mb-2 animate-fade-in">
            Our Courses
          </h2>
          <h3 className="text-3xl font-bold mb-4 animate-fade-in animate-delay-100">
            Enhance Your Scientific Knowledge
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in animate-delay-200">
            Choose from our range of specialized courses designed for Sri Lankan students in various scientific disciplines.
          </p>
        </div>
        
        <Tabs defaultValue="all" className="w-full mb-10 animate-fade-in animate-delay-300">
          <div className="flex justify-center">
            <TabsList>
              <TabsTrigger value="all">All Courses</TabsTrigger>
              <TabsTrigger value="free">Free Courses</TabsTrigger>
              <TabsTrigger value="paid">Paid Courses</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all" className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <CourseCard key={index} {...course} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="free" className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.filter(course => course.category === "Free").map((course, index) => (
                <CourseCard key={index} {...course} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="paid" className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.filter(course => course.category === "Paid").map((course, index) => (
                <CourseCard key={index} {...course} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="text-center">
          <Button size="lg">
            View All Courses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
