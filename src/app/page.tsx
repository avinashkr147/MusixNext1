import FeatureCourses from "./components/FeatureCourses";
import { Footer } from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Instructors from "./components/Instructors";
import TestomonialCards from "./components/TestomonialCards";
import UpcomingWebinars from "./components/UpcomingWebinars";
import WhyChooseUs from "./components/WhyChooseUs";


export default function Home() {
  return (
    <main className="min-h-screen  bg-black/[0.96] antialiased
    bg-grid-white/[0.2]  page-fade ">
    <HeroSection/>
    <FeatureCourses/>
    <WhyChooseUs/>
    <TestomonialCards/>
    <Instructors/>
    <UpcomingWebinars/>
    <Footer/>
    
    </main>

  );
}
