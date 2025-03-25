
import { SectionHeading } from '../ui/section-heading';

export const About = () => {
  const milestones = [
    {
      year: '2021',
      title: 'Humble Beginnings',
      description: 'Satellite launch by NAL team with drones.'
    },
    {
      year: '2022',
      title: 'Recognition',
      description: 'Won 3rd Prize at ISRO-InSpace competition.'
    },
    {
      year: '2024',
      title: 'Transformation',
      description: 'Rebranded from M.A.T.R.I.X to Stellarix Space.'
    },
    {
      year: '2024',
      title: 'CANSAT Achievement',
      description: 'Listed in the Top 20 Teams out of 142 in CANSAT-India. Only South Indian team in the 1st National CanSat Contest by ISRO-InSpace.'
    },
    {
      year: '2024',
      title: 'Incorporation',
      description: 'Company Incorporated in April 2024.'
    }
  ];
  
  return (
    <section id="about" className="py-24 relative">
      <div className="container">
        <SectionHeading
          overline="About Us"
          title="Our Journey to the Stars"
          description="Stellarix Space is an Indian space tech company focused on expanding humanity's reach in space through innovative engineering."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-semibold mb-4 text-gradient">Core Areas</h3>
            
            <div className="space-y-6">
              <div className="glass-card p-6 stellar-glow">
                <h4 className="text-xl font-medium mb-2">Satellite Manufacturing</h4>
                <p className="text-white/80">
                  Developing next-gen satellites for global connectivity, research, and environmental monitoring.
                </p>
              </div>
              
              <div className="glass-card p-6 stellar-glow">
                <h4 className="text-xl font-medium mb-2">Microgravity Cultivation</h4>
                <p className="text-white/80">
                  Researching space agriculture to support long-term missions and food security on Earth.
                </p>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <h3 className="text-2xl font-semibold mb-6 text-gradient">Milestones</h3>
            <div className="relative border-l border-stellar-blue/30 pl-6 space-y-8">
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className="relative animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute -left-[25px] w-4 h-4 rounded-full bg-space-dark border-2 border-stellar-blue"></div>
                  <div className="glass-card p-4">
                    <div className="text-xs font-semibold inline-block px-2 py-1 rounded-full bg-stellar-blue/10 text-stellar-blue mb-2">
                      {milestone.year}
                    </div>
                    <h4 className="text-lg font-medium text-white mb-1">{milestone.title}</h4>
                    <p className="text-sm text-white/70">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <SectionHeading
            title="Business Model & Plan"
            align="left"
            className="mb-8"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-6 animate-fade-up">
              <h3 className="text-xl font-semibold mb-4">Market Growth</h3>
              <div className="flex items-center mb-3">
                <div className="text-3xl font-bold text-gradient mr-2">11%</div>
                <div className="text-white/80">CAGR in space economy (2023-2032)</div>
              </div>
              
              <div className="space-y-3">
                <div>
                  <div className="text-sm font-medium text-white/90 mb-1">Total Addressable Market (TAM)</div>
                  <div className="text-xl font-semibold">$121B <span className="text-sm text-white/60">Global Controlled Environment Agriculture</span></div>
                </div>
                
                <div>
                  <div className="text-sm font-medium text-white/90 mb-1">Serviceable Addressable Market (SAM)</div>
                  <div className="text-xl font-semibold">$12.67B <span className="text-sm text-white/60">Space Agriculture</span></div>
                </div>
                
                <div>
                  <div className="text-sm font-medium text-white/90 mb-1">Serviceable Obtainable Market (SOM)</div>
                  <div className="text-xl font-semibold">$300M</div>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6 animate-fade-up" style={{ animationDelay: '100ms' }}>
              <h3 className="text-xl font-semibold mb-4">Business Model</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-stellar-blue/20 flex items-center justify-center text-stellar-blue mr-3 mt-0.5">B2B</div>
                  <div>
                    <div className="font-medium">Business to Business</div>
                    <div className="text-sm text-white/70">Satellite companies, private space agencies, AgriTech firms.</div>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-stellar-blue/20 flex items-center justify-center text-stellar-blue mr-3 mt-0.5">B2G</div>
                  <div>
                    <div className="font-medium">Business to Government</div>
                    <div className="text-sm text-white/70">Government agencies (ISRO, DRDO).</div>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-stellar-blue/20 flex items-center justify-center text-stellar-blue mr-3 mt-0.5">TT</div>
                  <div>
                    <div className="font-medium">Technology Transfer</div>
                    <div className="text-sm text-white/70">ISRO collaborations and MOUs with companies and government agencies.</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <SectionHeading
            title="Support & Recognition"
            align="left"
            className="mb-8"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-6 animate-fade-up">
              <div className="w-12 h-12 rounded-full bg-stellar-blue/20 flex items-center justify-center text-stellar-blue mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">ISRO InSpace</h3>
              <p className="text-white/70">
                Recognition and support from ISRO's InSpace initiative for private space sector.
              </p>
            </div>
            
            <div className="glass-card p-6 animate-fade-up" style={{ animationDelay: '100ms' }}>
              <div className="w-12 h-12 rounded-full bg-stellar-blue/20 flex items-center justify-center text-stellar-blue mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">CANSAT Recognition</h3>
              <p className="text-white/70">
                Top 20 team in CANSAT-India out of 142 participating teams.
              </p>
            </div>
            
            <div className="glass-card p-6 animate-fade-up" style={{ animationDelay: '200ms' }}>
              <div className="w-12 h-12 rounded-full bg-stellar-blue/20 flex items-center justify-center text-stellar-blue mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Industry Partnerships</h3>
              <p className="text-white/70">
                Strategic partnerships with aerospace and agricultural technology companies.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <SectionHeading
            title="Potential Customers"
            align="left"
            className="mb-8"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-6 stellar-glow animate-fade-up">
              <h3 className="text-xl font-semibold mb-3">Space Agencies</h3>
              <p className="text-white/70 mb-4">
                National and international space agencies looking for sustainable food production solutions.
              </p>
              <div className="text-sm font-medium text-stellar-blue">Government & Research</div>
            </div>
            
            <div className="glass-card p-6 stellar-glow animate-fade-up" style={{ animationDelay: '100ms' }}>
              <h3 className="text-xl font-semibold mb-3">Private Space Companies</h3>
              <p className="text-white/70 mb-4">
                Commercial space ventures requiring sustainable food solutions for long-term missions.
              </p>
              <div className="text-sm font-medium text-stellar-blue">Commercial Space</div>
            </div>
            
            <div className="glass-card p-6 stellar-glow animate-fade-up" style={{ animationDelay: '200ms' }}>
              <h3 className="text-xl font-semibold mb-3">Research Institutions</h3>
              <p className="text-white/70 mb-4">
                Academic and scientific institutions focused on space agriculture and microgravity research.
              </p>
              <div className="text-sm font-medium text-stellar-blue">Scientific Research</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
