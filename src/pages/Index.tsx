
import MainLayout from '@/layout/MainLayout';
import HeroSection from '@/components/HeroSection';
import FeaturedProject from '@/components/FeaturedProject';
import Partners from '@/components/Partners';
import CoursesSection from '@/components/courses/CoursesSection';
import SupervisionSection from '@/components/supervision/SupervisionSection';
import TestimonialsSection from '@/components/testimonials/TestimonialsSection';
import CTASection from '@/components/cta/CTASection';
import { courses } from '@/data/coursesData';

const Index = () => {
  return (
    <MainLayout>
      <HeroSection />
      <CoursesSection courses={courses} />
      <FeaturedProject />
      <TestimonialsSection />
      <SupervisionSection />
      <Partners />
      <CTASection />
    </MainLayout>
  );
};

export default Index;
