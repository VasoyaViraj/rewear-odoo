import AboutSection from '@/components/AboutSection'
import FeaturedItems from '@/components/FeaturedItems'
import HeroSection from '@/components/HeroSection'
import { userContext } from '@/contexts/UserContext'
import React, { useContext } from 'react'


const LandingPage = () => {

  const {user} = useContext(userContext)
  console.log(user)

  return (
    <div className="min-h-screen-68 bg-background">
      <HeroSection/>
      <FeaturedItems/>
      <AboutSection/>
    </div>
  )
}

export default LandingPage