import HeroSection from './Hero/HeroSection';
import CasesSection from './Cases/CasesSection';
import VideoSection from './Video/VideoSection';
import ContactSection from './Contact/ContactSection';
import Footer from './Footer/Footer';

export default function LandingPageContainer() {
  return (
    <div>
      <HeroSection />
      <CasesSection />
      <VideoSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
