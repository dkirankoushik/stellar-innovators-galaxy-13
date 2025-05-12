
import { useEffect } from 'react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { About } from '@/components/sections/about';
import { Timeline } from '@/components/sections/timeline';

const AboutPage = () => {
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
    <div className="min-h-screen overflow-x-hidden">
      {/* Navbar */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        {/* About Section */}
        <About />
        
        {/* Timeline Section */}
        <Timeline />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutPage;
