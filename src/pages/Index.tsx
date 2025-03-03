import MainLayout from '@/layout/MainLayout';
import HeroSection from '@/components/HeroSection';
import FeaturedProject from '@/components/FeaturedProject';
import CourseCard from '@/components/CourseCard';
import Partners from '@/components/Partners';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Microscope, Book, Beaker, GraduationCap, Users } from 'lucide-react';

const Index = () => {
  return (
    <MainLayout>
      <HeroSection />
      
      {/* Courses Section */}
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
      
      {/* Featured Project */}
      <FeaturedProject />
      
      {/* Supervision Section */}
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
      
      {/* Partners Section */}
      <Partners />
      
      {/* CTA Section */}
      <section className="py-20 bg-institute-purple/10">
        <div className="container">
          <div className="bg-gradient-to-r from-institute-indigo to-institute-purple rounded-2xl p-10 text-white shadow-xl">
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
    </MainLayout>
  );
};

// Course data
const courses = [
  {
    title: "Introduction to Cheminformatics",
    description: "Learn the foundations of chemical information handling and computational methods for chemical data analysis.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Free" as const,
    duration: "6 weeks",
    students: 1250,
    rating: 4,
    maxRating: 5
  },
  {
    title: "Advanced Computational Chemistry",
    description: "Master advanced techniques in molecular modeling, quantum chemistry, and drug discovery algorithms.",
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Paid" as const,
    duration: "10 weeks",
    students: 856,
    rating: 5,
    maxRating: 5
  },
  {
    title: "Data Science for Chemists",
    description: "Apply machine learning and data analytics approaches to solve complex chemical problems and derive insights.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Paid" as const,
    duration: "8 weeks",
    students: 1120,
    rating: 4,
    maxRating: 5
  },
  {
    title: "Scientific Python Programming",
    description: "Learn Python programming with focus on scientific libraries like NumPy, SciPy, and Matplotlib for scientific computing.",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Free" as const,
    duration: "6 weeks",
    students: 2350,
    rating: 5,
    maxRating: 5
  },
  {
    title: "Molecular Visualization Techniques",
    description: "Explore tools and techniques for effective visualization of molecular structures and simulation data.",
    image: "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Paid" as const,
    duration: "4 weeks",
    students: 780,
    rating: 4,
    maxRating: 5
  },
  {
    title: "Research Methods in Informatics",
    description: "Develop essential research skills for conducting and publishing scientific studies in informatics.",
    image: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Free" as const,
    duration: "5 weeks",
    students: 925,
    rating: 4,
    maxRating: 5
  }
];

export default Index;
