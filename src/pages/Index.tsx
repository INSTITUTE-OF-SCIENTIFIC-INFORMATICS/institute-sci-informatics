import HeroSection from '@/components/HeroSection';
import CommunitySection from '@/components/CommunitySection';
import ScienceHubSection from '@/components/ScienceHubSection';
import FeaturedProject from '@/components/FeaturedProject';
import Partners from '@/components/Partners';
import CTASection from '@/components/cta/CTASection';

const Index = () => {
  return (
    <main>
      <HeroSection />
      <ScienceHubSection />
      <CommunitySection />
      <FeaturedProject />
      <Partners />
      <CTASection />
    </main>
  );
};

export default Index;
