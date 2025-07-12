import AboutSection from '@/components/AboutSection'
import FeaturedItems from '@/components/FeaturedItems'
import HeroSection from '@/components/HeroSection'
import React from 'react'

const LandingPage = () => {
  return (
    <div className="min-h-screen-68 bg-background">
      <HeroSection/>
      <FeaturedItems/>
      <AboutSection/>
    </div>
  )
}

export default LandingPage