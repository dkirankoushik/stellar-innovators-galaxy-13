
import { useIsMobile } from '@/hooks/use-mobile';

export interface TimelineItem {
  date: string;
  year: string;
  title: string;
  description: string;
}

export const Timeline = () => {
  const isMobile = useIsMobile();
  
  const timelineItems: TimelineItem[] = [
    {
      date: "June",
      year: "2021",
      title: "MSME Registered",
      description: "Stellarix Space - Formerly M.A.T.R.I.X Established with Vision & Mission"
    },
    {
      date: "Jan",
      year: "2022",
      title: "ISRO - InSpace",
      description: "CANSAT-INDIA Listed in Top 20 Teams out of 142 Teams Nationally"
    },
    {
      date: "April",
      year: "2024",
      title: "Won 3rd Prize",
      description: "1st National CanSat contest by Isro <> InSpace only team from South India"
    },
    {
      date: "April",
      year: "2024",
      title: "PD-1",
      description: "Satellite Launch By NAL Team with drone"
    },
    {
      date: "April",
      year: "2024",
      title: "Incorporated",
      description: "Stellarix Space Private Limited is Incorporated"
    }
  ];

  return (
    <section className="py-16 relative">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center tracking-tight leading-none">
          <span className="text-gradient">STELLARIX HISTORY</span>
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-stellar-blue/30 z-10"></div>
          
          <div className="relative z-20 space-y-12 md:space-y-0">
            {timelineItems.map((item, index) => (
              <div 
                key={index} 
                className={`flex flex-col md:flex-row md:items-center relative ${
                  isMobile ? 'pl-12' : index % 2 === 0 ? 'md:justify-end' : ''
                }`}
              >
                {/* Timeline node */}
                <div 
                  className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-stellar-blue z-20"
                  style={{ boxShadow: "0 0 10px rgba(63, 135, 255, 0.7)" }}
                ></div>
                
                {/* Content */}
                <div 
                  className={`glass-card p-5 md:max-w-xs lg:max-w-sm animate-fade-up ${
                    isMobile ? '' : index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center mb-3">
                    <span className="text-stellar-blue font-medium">{item.date}</span>
                    <div className="w-2 h-2 rounded-full bg-stellar-blue/50 mx-2"></div>
                    <span className="text-stellar-blue font-medium">{item.year}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                  <p className="text-white/70">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Rocket illustration */}
        <div className="absolute bottom-0 right-0 md:w-1/3 max-w-xs opacity-80 pointer-events-none">
          <img 
            src="/lovable-uploads/4d013023-00c5-48a2-a015-6bcc536ae283.png" 
            alt="Rocket launch illustration" 
            className="w-full h-auto"
            style={{ 
              transform: "scaleX(-1)",
              filter: "brightness(0.9) saturate(1.2)"
            }}
          />
        </div>
      </div>
    </section>
  );
};
