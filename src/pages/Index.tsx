
import MainLayout from '@/layout/MainLayout';
import HeroSection from '@/components/HeroSection';
import FeaturedProject from '@/components/FeaturedProject';
import Partners from '@/components/Partners';
import CoursesSection from '@/components/courses/CoursesSection';
import SupervisionSection from '@/components/supervision/SupervisionSection';
import TestimonialsSection from '@/components/testimonials/TestimonialsSection';
import CTASection from '@/components/cta/CTASection';
import FeaturedCourseAnnouncement from '@/components/courses/FeaturedCourseAnnouncement';
import ScienceHubSection from '@/components/ScienceHubSection';
import TradChemDBSection from '@/components/TradChemDBSection';
import { courses } from '@/data/coursesData';

const Index = () => {
  return (
    <MainLayout>
      <HeroSection />
      <FeaturedCourseAnnouncement />
      <ScienceHubSection />
      <CoursesSection courses={courses} />
      <FeaturedProject />
      <TradChemDBSection />
      <Partners />
      <TestimonialsSection />
      <SupervisionSection />
      <CTASection />
    </MainLayout>
  );
};

export default Index;
