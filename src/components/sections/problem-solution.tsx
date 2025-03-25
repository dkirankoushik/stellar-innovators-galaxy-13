
import { SectionHeading } from '../ui/section-heading';

export const ProblemSolution = () => {
  return (
    <section id="solution" className="py-24 relative">
      <div className="container">
        <SectionHeading
          overline="Space Food System"
          title="Problem & Solution"
          description="Addressing the challenges of food production and safety in space environments."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div className="glass-card p-8 relative overflow-hidden animate-fade-up">
            <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-stellar-blue/5 backdrop-blur-xl"></div>
            
            <h3 className="text-2xl font-semibold mb-6 relative z-10">The Problem</h3>
            
            <div className="space-y-6 relative z-10">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-stellar-blue/10 text-stellar-blue mr-4 mt-1">1</div>
                <div>
                  <h4 className="text-lg font-medium mb-2">Expensive Meals</h4>
                  <p className="text-white/80">
                    Astronaut food costs approximately $114,000 for just 1.7 kg per meal.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-stellar-blue/10 text-stellar-blue mr-4 mt-1">2</div>
                <div>
                  <h4 className="text-lg font-medium mb-2">Contamination Risks</h4>
                  <p className="text-white/80">
                    Bacterial contamination poses significant health risks to astronauts.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-stellar-blue/10 text-stellar-blue mr-4 mt-1">3</div>
                <div>
                  <h4 className="text-lg font-medium mb-2">Limited Fresh Food</h4>
                  <p className="text-white/80">
                    Lack of fresh, nutritious food for long-duration space missions.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-8 relative overflow-hidden animate-fade-up" style={{ animationDelay: '100ms' }}>
            <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-stellar-blue/5 backdrop-blur-xl"></div>
            
            <h3 className="text-2xl font-semibold mb-6 relative z-10">Our Solution</h3>
            
            <div className="space-y-6 relative z-10">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-stellar-blue/10 text-stellar-blue mr-4 mt-1">1</div>
                <div>
                  <h4 className="text-lg font-medium mb-2">IoT-Enabled Biosensors</h4>
                  <p className="text-white/80">
                    Real-time contamination monitoring system to ensure food safety.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-stellar-blue/10 text-stellar-blue mr-4 mt-1">2</div>
                <div>
                  <h4 className="text-lg font-medium mb-2">Advanced Cultivation Systems</h4>
                  <p className="text-white/80">
                    Hydroponic & Aeroponic systems for efficient in-space fresh food production.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-stellar-blue/10 text-stellar-blue mr-4 mt-1">3</div>
                <div>
                  <h4 className="text-lg font-medium mb-2">AI-Driven Automation</h4>
                  <p className="text-white/80">
                    Smart systems that monitor and maintain optimal plant health.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-stellar-blue/10 text-stellar-blue mr-4 mt-1">4</div>
                <div>
                  <h4 className="text-lg font-medium mb-2">Sustainable Resources</h4>
                  <p className="text-white/80">
                    Solar-powered, closed-loop water recycling to reduce operational costs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <SectionHeading
            title="Our Product - SS-PC1"
            align="left"
            className="mb-12"
          />
          
          <div className="glass-card p-8 animate-fade-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Specifications</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-24 text-sm font-medium text-white/60">Size</div>
                    <div className="flex-1">100 cm x 100 cm x 200 cm (customizable)</div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-24 text-sm font-medium text-white/60">Weight</div>
                    <div className="flex-1">115 kg</div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-24 text-sm font-medium text-white/60">Material</div>
                    <div className="flex-1">6061-T6 aerospace-grade aluminum</div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-24 text-sm font-medium text-white/60">Power</div>
                    <div className="flex-1">Solar/onboard energy systems (110V/220V AC)</div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-6">Features</h3>
                
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-stellar-blue mr-3"></div>
                    <span>Advanced lighting system</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-stellar-blue mr-3"></div>
                    <span>Precision robotic arm</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-stellar-blue mr-3"></div>
                    <span>Automation & monitoring systems</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-stellar-blue mr-3"></div>
                    <span>Water recycling technology</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-stellar-blue mr-3"></div>
                    <span>Climate control system</span>
                  </li>
                </ul>
                
                <div className="mt-6">
                  <h4 className="text-lg font-medium mb-3">Plant Varieties</h4>
                  <p className="text-white/80">
                    Legumes, pulses, leafy greens, herbs, vegetables, fruits
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <SectionHeading
            title="Roadmap & Future Plans"
            align="center"
            className="mb-12"
          />
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-stellar-blue/30 transform -translate-x-1/2 z-0"></div>
            
            <div className="relative z-10 space-y-20">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 text-right mb-8 md:mb-0 animate-fade-right">
                  <div className="inline-block px-3 py-1 rounded-full bg-stellar-blue/10 text-stellar-blue text-sm font-medium mb-2">
                    Year 1
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Infrastructure & Partnerships</h3>
                  <p className="text-white/70">
                    Establishing infrastructure and forming strategic partnerships with key industry players.
                  </p>
                </div>
                
                <div className="w-10 h-10 rounded-full bg-space-dark border-2 border-stellar-blue flex items-center justify-center z-20 mb-8 md:mb-0">
                  <div className="w-3 h-3 rounded-full bg-stellar-blue"></div>
                </div>
                
                <div className="md:w-1/2 md:pl-12 animate-fade-left">
                  {/* Empty for alignment */}
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 text-right mb-8 md:mb-0 order-1 md:order-1">
                  {/* Empty for alignment */}
                </div>
                
                <div className="w-10 h-10 rounded-full bg-space-dark border-2 border-stellar-blue flex items-center justify-center z-20 mb-8 md:mb-0 order-2 md:order-2">
                  <div className="w-3 h-3 rounded-full bg-stellar-blue"></div>
                </div>
                
                <div className="md:w-1/2 md:pl-12 order-3 md:order-3 animate-fade-right">
                  <div className="inline-block px-3 py-1 rounded-full bg-stellar-blue/10 text-stellar-blue text-sm font-medium mb-2">
                    Year 3
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Satellite Module Launch</h3>
                  <p className="text-white/70">
                    Launch of satellite module with Controlled Environment Agriculture technology.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 text-right mb-8 md:mb-0 animate-fade-right">
                  <div className="inline-block px-3 py-1 rounded-full bg-stellar-blue/10 text-stellar-blue text-sm font-medium mb-2">
                    Year 5
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Space Food System Supply</h3>
                  <p className="text-white/70">
                    Full-scale production and supply of space food systems to commercial and government partners.
                  </p>
                </div>
                
                <div className="w-10 h-10 rounded-full bg-space-dark border-2 border-stellar-blue flex items-center justify-center z-20 mb-8 md:mb-0">
                  <div className="w-3 h-3 rounded-full bg-stellar-blue"></div>
                </div>
                
                <div className="md:w-1/2 md:pl-12 animate-fade-left">
                  {/* Empty for alignment */}
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 text-right mb-8 md:mb-0 order-1 md:order-1">
                  {/* Empty for alignment */}
                </div>
                
                <div className="w-10 h-10 rounded-full bg-space-dark border-2 border-stellar-blue flex items-center justify-center z-20 mb-8 md:mb-0 order-2 md:order-2">
                  <div className="w-3 h-3 rounded-full bg-stellar-blue"></div>
                </div>
                
                <div className="md:w-1/2 md:pl-12 order-3 md:order-3 animate-fade-right">
                  <div className="inline-block px-3 py-1 rounded-full bg-stellar-blue/10 text-stellar-blue text-sm font-medium mb-2">
                    Year 9
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Planetary Food Production</h3>
                  <p className="text-white/70">
                    Development of space pods for sustainable food production on planets and moons.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
