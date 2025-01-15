import Navbar from "./components/Navbar"
import { HeroSection } from "./components/HeroSection"
import WhatIDo from "./components/WhatIDo"
import HowItWorks from "./components/HowItWorks"
import WhyTrustMe from "./components/WhyTrustMe"
import SkillsSection from "./components/SkillSection"
import ProjectsSection from "./components/ProjectsSection"
import Portfolio2 from "./components/Portfolio2" // Import Portfolio2 komponenty
import OnlineCourses from "./components/OnlineCourses"
import ContactForm from "./components/ContactForm"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <>
      {/* Navbar Component */}
      <Navbar />

      {/* Hero Section Component */}
      <HeroSection />

      {/* What I Do Section */}
      <WhatIDo />

      {/* Why Trust Me Section */}
      <WhyTrustMe />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Portfolio2 Section */}
      <Portfolio2 /> {/* Portfolio2 přidáno sem */}

      {/* How It Works Section */}
      <HowItWorks />

      {/* Skills Section */}
      <SkillsSection />

      {/* Online Courses Section */}
      <OnlineCourses />

      {/* Contact Form Component */}
      <ContactForm />

      {/* Footer Component */}
      <Footer />
    </>
  )
}
