import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../features/landing/Hero';
import Features from '../features/landing/Features';
import CallToAction from '../features/landing/CallToAction';
import Testimonials from '../features/landing/Testimonials';
import '../pages/LandingPage.css';
import HeroStats from '../features/landing/HeroStats';

export default function LandingPage() {
  return (
    <div className="landing-page">
      <Header />
      <Hero />
      <HeroStats/>
      <Features />
      <CallToAction />
      <Testimonials />
      <Footer />
    </div>
  );
}
