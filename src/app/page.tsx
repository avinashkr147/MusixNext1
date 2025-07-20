import FeatureCourses from "./components/FeatureCourses";
import { Footer } from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Instructors from "./components/Instructors";
import TestomonialCards from "./components/TestomonialCards";
import UpcomingWebinars from "./components/UpcomingWebinars";
import WhyChooseUs from "./components/WhyChooseUs";
import { main } from "motion/react-client";


export default function Home() {
  return (
    <main className="min-h-screen  bg-black/[0.96] antialiased
    bg-grid-white/[0.2]">
    <HeroSection/>
    <FeatureCourses/>
    <WhyChooseUs/>
    <TestomonialCards/>
    <UpcomingWebinars/>
    <Instructors />
    <Footer/>
    
    </main>

  );
}
