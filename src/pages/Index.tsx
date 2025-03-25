
import { useEffect } from 'react';
import { StarField } from '@/components/ui/star-field';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { ProblemSolution } from '@/components/sections/problem-solution';
import { Team } from '@/components/sections/team';
import { Gallery } from '@/components/sections/gallery';
import { Contact } from '@/components/sections/contact';

const Index = () => {
  useEffect(() => {
    // Smooth scroll implementation for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
            behavior: 'smooth'
          });
        }
      });
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function (e) {
          e.preventDefault();
        });
      });
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-space-black overflow-x-hidden">
      {/* Enhanced Animated Star Background with shooting stars */}
      <StarField starCount={250} glowIntensity={3.5} shootingStarFrequency={0.05} />
      
      {/* Navbar */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* About Section */}
        <About />
        
        {/* Problem & Solution Section */}
        <ProblemSolution />
        
        {/* Team Section */}
        <Team />
        
        {/* Gallery Section */}
        <Gallery />
        
        {/* Contact Section */}
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
