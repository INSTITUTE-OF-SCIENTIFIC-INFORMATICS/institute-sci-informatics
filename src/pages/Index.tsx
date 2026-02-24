import HeroSection from '@/components/HeroSection';
import CoursesSection from '@/components/CoursesSection';
import CommunitySection from '@/components/CommunitySection';
import FeaturedProject from '@/components/FeaturedProject';
import Partners from '@/components/Partners';
import CTASection from '@/components/cta/CTASection';

const Index = () => {
  return (
    <main>
      <HeroSection />
      <CoursesSection />
      <CommunitySection />
      <FeaturedProject />
      <Partners />
      <CTASection />
    </main>
  );
};

export default Index;
