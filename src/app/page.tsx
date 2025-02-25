import Navbar from "./components/Navbar"
import { HeroSection } from "./components/HeroSection"
import WhatIDo from "./components/WhatIDo"

import WhyTrustMe from "./components/WhyTrustMe"
import SkillsSection from "./components/SkillSection"
import ProjectsSection from "./components/ProjectsSection"
import Portfolio2 from "./components/Portfolio2" // Import Portfolio2 komponenty


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

      

      

      {/* Skills Section */}
      <SkillsSection />

     

      

      {/* Footer Component */}
      <Footer />
    </>
  )
}
