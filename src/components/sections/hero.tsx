
import { ArrowDown } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-space-darker via-space-blue/50 to-space-purple/30"></div>
        
        {/* Blue orbital path */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-stellar-blue/20 rounded-full opacity-30 animate-rotate-slow"></div>
        
        {/* Inner orbital path */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-stellar-cyan/10 rounded-full opacity-20" style={{ animationDuration: '15s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-white/5 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-white/80 mb-8 animate-fade-down">
            <span className="inline-block w-2 h-2 rounded-full bg-stellar-blue mr-2 animate-pulse"></span>
            Innovating space technology since 2021
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-fade-up leading-tight">
            <span className="text-gradient">Expanding Humanity's Reach</span> 
            <br /> 
            <span className="text-white">in Space</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12 animate-fade-up" style={{ animationDelay: '200ms' }}>
            Pioneering satellite manufacturing and microgravity cultivation through innovative engineering and sustainable solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-up" style={{ animationDelay: '400ms' }}>
            <a href="#about" className="px-8 py-3 rounded-full bg-stellar-blue hover:bg-stellar-blue/90 text-white font-medium transition-all stellar-shadow hover:translate-y-[-2px]">
              Learn More
            </a>
            <a href="#contact" className="px-8 py-3 rounded-full border border-white/20 hover:border-white/40 backdrop-blur-sm hover:bg-white/5 text-white font-medium transition-all hover:translate-y-[-2px]">
              Contact Us
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white/80 hover:text-white transition-colors">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};
