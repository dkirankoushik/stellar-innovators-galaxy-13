
import { SectionHeading } from '../ui/section-heading';

export const Team = () => {
  const founders = [
    {
      name: 'Kiran Koushik',
      title: 'Founder & CEO',
      bio: 'Satellite Systems Engineer with expertise in aerospace technology.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
    },
    {
      name: 'Dr. Rajamurugu N',
      title: 'Co-Founder',
      bio: 'Aerospace Academician with extensive research experience.',
      image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80'
    },
    {
      name: 'Garva Mishra',
      title: 'CTO',
      bio: 'CFD & Lead Propulsion Engineer specializing in fluid dynamics.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
    },
    {
      name: 'Sanandhu Santhosh',
      title: 'CFO',
      bio: 'Structures & Aerodynamics Engineer with financial expertise.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
    }
  ];
  
  const advisors = [
    {
      name: 'Sundaramurthy T K',
      title: 'Former ISRO Mission Director',
      bio: 'Provides strategic guidance on space mission planning and execution.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
    },
    {
      name: 'Dr. S Pandiyan',
      title: 'Aerodynamics Advisor (IIT Madras)',
      bio: 'Expert in aerodynamics and fluid mechanics for aerospace applications.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
    },
    {
      name: 'Dr. G Ramesh',
      title: 'Satellite Architecture Advisor (NAL)',
      bio: 'Specialist in satellite design and system architecture.',
      image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
    }
  ];
  
  return (
    <section id="team" className="py-24 relative">
      <div className="container">
        <SectionHeading
          overline="Our Team"
          title="The Innovators"
          description="Meet the talented individuals who are pushing the boundaries of space technology."
        />
        
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-8 text-gradient">Founding Team</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {founders.map((member, index) => (
              <div 
                key={index} 
                className="glass-card p-6 stellar-glow animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative mb-6 aspect-square overflow-hidden rounded-lg">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform hover:scale-110 duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-space-dark/80 to-transparent pointer-events-none"></div>
                </div>
                
                <h4 className="text-xl font-semibold mb-1">{member.name}</h4>
                <div className="text-sm text-stellar-blue mb-3">{member.title}</div>
                <p className="text-white/70 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-20">
          <h3 className="text-2xl font-semibold mb-8 text-gradient">Advisory Board</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {advisors.map((advisor, index) => (
              <div 
                key={index} 
                className="glass-card p-6 stellar-glow animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-stellar-blue/30">
                    <img 
                      src={advisor.image} 
                      alt={advisor.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">{advisor.name}</h4>
                    <div className="text-xs text-stellar-blue">{advisor.title}</div>
                  </div>
                </div>
                <p className="text-white/70 text-sm">{advisor.bio}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-20">
          <div className="glass-card p-8 animate-fade-up">
            <h3 className="text-2xl font-semibold mb-6 text-gradient">Technical Board</h3>
            <p className="text-white/80 mb-8">
              Our technical board comprises experts from diverse fields, bringing together specialized knowledge to drive innovation:
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <div className="w-10 h-10 rounded-full bg-stellar-blue/10 flex items-center justify-center text-stellar-blue mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h4 className="text-lg font-medium mb-2">Microbiology</h4>
                <p className="text-white/70 text-sm">
                  Experts in microbial ecosystems and food safety.
                </p>
              </div>
              
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <div className="w-10 h-10 rounded-full bg-stellar-blue/10 flex items-center justify-center text-stellar-blue mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
                <h4 className="text-lg font-medium mb-2">Aerospace</h4>
                <p className="text-white/70 text-sm">
                  Specialists in spacecraft design and orbital mechanics.
                </p>
              </div>
              
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <div className="w-10 h-10 rounded-full bg-stellar-blue/10 flex items-center justify-center text-stellar-blue mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-medium mb-2">Avionics</h4>
                <p className="text-white/70 text-sm">
                  Experts in electronic systems and controls for space applications.
                </p>
              </div>
              
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <div className="w-10 h-10 rounded-full bg-stellar-blue/10 flex items-center justify-center text-stellar-blue mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-medium mb-2">Plant Sciences</h4>
                <p className="text-white/70 text-sm">
                  Specialists in plant growth and sustainability in extreme environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
