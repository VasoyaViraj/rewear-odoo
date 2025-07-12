import React from 'react'
import { Button } from './ui/button'

const Navbarr = () => {
  return (
    <header className="w-full bg-background/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-moss-green">
          ReWear
        </div>
        
        <nav className="flex items-center space-x-6">
          <Button variant="ghost" className="text-charcoal hover:text-moss-green transition-colors w-10 text-xs lg:w-auto lg:text-sm ">
            Log In
          </Button>
          <Button className="bg-moss-green hover:bg-moss-green/90 text-white w-14 text-xs lg:w-auto lg:text-sm">
            Sign Up
          </Button>
        </nav>
      </div>
    </header>
  )
}

export default Navbarr