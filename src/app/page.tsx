import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/featuredCourses";
import WhyChooseUs from "@/components/WhyChooseUs";

import Image from "next/image";
import TestimonialCards from "@/components/TestimonialCards";
import UpcommingWebinar from "@/components/UpcommingWebinar";
import Instructor from "@/components/Instructor";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div >
      <main className=" min-h-screen bg-black/[0.9] antialiased  bg-grid-white/[0.02]">
        <HeroSection/>
        <FeaturedCourses/>
        <WhyChooseUs/>
        <TestimonialCards/>
        <UpcommingWebinar/>
        <Instructor/>
        <Footer/>
      </main>
    </div>  
  );
}
