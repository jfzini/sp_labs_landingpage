import { useDispatch, useSelector } from 'react-redux';
import { closeChat, closingChat } from '../../redux/actions';
import HeroSection from './Hero/HeroSection';
import CasesSection from './Cases/CasesSection';
import VideoSection from './Video/VideoSection';
import ContactSection from './Contact/ContactSection';
import Footer from './Footer/Footer';

export default function LandingPageContainer() {
  const { open } = useSelector((state) => state.chatReducer);
  const dispatch = useDispatch();

  const handleChat = async () => {
    if (open) {
      dispatch(closingChat())
      await setTimeout(() => {
        dispatch(closeChat());
      }, 300);
    }
  };

  return (
    <div onClick={() => dispatch(handleChat())}>
      <HeroSection />
      <CasesSection />
      <VideoSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
