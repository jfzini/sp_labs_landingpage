import React from 'react';
import HeroSection from './Hero/HeroSection';
import CasesSection from './Cases/CasesSection';
import VideoSection from './Video/VideoSection';
import ContactSection from './Contact/ContactSection';

export default function Container() {
  return (
    <div>
      <HeroSection />
      <CasesSection />
      <VideoSection />
      <ContactSection />
    </div>
  );
}
