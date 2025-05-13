import CaseStudies from "./components/features/caseStudies/CaseStudies";
import ContactUs from "./components/features/contactUs/ContactUs";
import Footer from "./components/features/Footer";
import Hero from "./components/features/hero/Hero";
import Navbar from "./components/features/Navbar";
import Services from "./components/features/services/Services";
import Team from "./components/features/team/Team";
import Testmonials from "./components/features/testmonials/Testmonials";
import WorkProcess from "./components/features/WorkProcess/WorkProcess";






export default function Home() {
  return (
    <div className="bg-white relative container p-2 pb-0 max-md:w-full">
      <Navbar/>
      <Hero />
      <Services/>
      <CaseStudies/>
      <WorkProcess/>
      <Team/>
      <Testmonials/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}
