
import { useState, useRef, useEffect } from 'react';
import { SectionHeading } from '../ui/section-heading';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  const photos = [
    {
      title: 'Satellite Development',
      image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      description: 'Our team working on advanced satellite technology for Earth observation.'
    },
    {
      title: 'Hydroponic System Testing',
      image: 'https://images.unsplash.com/photo-1577042939454-8b29d442b402?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80',
      description: 'Testing innovative hydroponic systems for space agriculture.'
    },
    {
      title: 'CANSAT Competition',
      image: 'https://images.unsplash.com/photo-1518364538800-6bae3c2ea0f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
      description: 'Our team at the CANSAT-India competition where we ranked in the top 20.'
    },
    {
      title: 'Product Prototype',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      description: 'Early prototype of our SS-PC1 space agriculture system.'
    },
    {
      title: 'Research Laboratory',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      description: 'Our state-of-the-art research facility for developing space technologies.'
    },
    {
      title: 'Team Workshop',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80',
      description: 'Collaborative workshop session with our engineering team.'
    }
  ];
  
  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };
  
  const handleNext = () => {
    setActiveIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };
  
  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };
  
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${activeIndex * 100}%)`;
    }
  }, [activeIndex]);
  
  return (
    <section id="gallery" className="py-24 relative">
      <div className="container">
        <SectionHeading
          overline="Gallery"
          title="Innovators' Spotlight"
          description="Explore our journey through the development of cutting-edge space technology."
        />
        
        <div className="mt-12 relative">
          <div className="overflow-hidden rounded-xl glass-card">
            <div
              ref={sliderRef}
              className="flex transition-transform duration-500 ease-out"
              style={{ width: `${photos.length * 100}%` }}
            >
              {photos.map((photo, index) => (
                <div
                  key={index}
                  className="relative"
                  style={{ width: `${100 / photos.length}%` }}
                >
                  <div className="aspect-video">
                    <img
                      src={photo.image}
                      alt={photo.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold mb-2">{photo.title}</h3>
                    <p className="text-white/80">{photo.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <button
              onClick={handlePrev}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/70 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} />
            </button>
            
            <button
              onClick={handleNext}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/70 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          
          <div className="flex justify-center mt-6 gap-2">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all",
                  activeIndex === index ? "bg-stellar-blue w-6" : "bg-white/30 hover:bg-white/50"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <div 
              key={index} 
              className="aspect-square overflow-hidden rounded-lg relative glass-card stellar-glow animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={photo.image}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-space-dark/90 via-space-dark/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div>
                  <h4 className="text-lg font-medium">{photo.title}</h4>
                  <p className="text-sm text-white/70">{photo.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
