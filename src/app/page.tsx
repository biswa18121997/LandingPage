import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SectionI from "@/components/SectionI";
import SectionII from "@/components/SectionII";
import './globals.css';
import Banner from "@/components/Banner";
import Brands from "@/components/Brands";
import SectionIII from "@/components/SectionIII";
import Frame from "@/components/Frame";
import Form from "@/components/Forms";
import Mockup from "@/components/Mockup";
import NoLimits from "@/components/NoLimits";
import SectionNine from "@/components/SectionNine";
import Slider from "@/components/Slider";
import HandShake from "@/components/HandShake";
import SectionSix from "@/components/SectionSix";
import BikersHi from "@/components/BikersHi";
import FAQAccordion from "@/components/FAQAccordion";
import SectionSeven from "@/components/SectionSeven";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SectionI />
      <SectionII />
      <Banner />
      <Brands />
      <SectionIII />
      <Frame />
      <Form />
      <Mockup />
      <NoLimits />
      <SectionNine />
      <Slider />
      <HandShake />
      <SectionSix />
      <BikersHi />
      <FAQAccordion />
      <SectionSeven />
      
    </>
  );
}
