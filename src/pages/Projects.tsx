
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { SectionHeading } from '@/components/ui/section-heading';

const Projects = () => {
  const projects = [
    {
      title: "NanoSat Constellation",
      category: "Satellite Manufacturing",
      image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      description: "Development of a constellation of nanosatellites for global IoT connectivity and data relay services.",
      year: "2023"
    },
    {
      title: "Lunar Agri-Pod",
      category: "Space Agriculture",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      description: "Prototype of a self-contained agricultural pod designed for lunar surface operations with minimal resource consumption.",
      year: "2022"
    },
    {
      title: "OrbitalEye",
      category: "Earth Observation",
      image: "https://images.unsplash.com/photo-1614313511397-bbf8629c2204?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      description: "High-resolution imaging satellite platform for environmental monitoring and disaster response applications.",
      year: "2022"
    },
    {
      title: "StratoGrow Chamber",
      category: "Microgravity Research",
      image: "https://images.unsplash.com/photo-1509515837298-2c67a3933321?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      description: "Advanced plant growth chamber for testing agricultural techniques in stratospheric conditions.",
      year: "2021"
    }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Navbar */}
      <Navbar />
      
      {/* Main Content */}
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            overline="Our Work"
            title="Featured Projects"
            description="Explore our groundbreaking projects that are pushing the boundaries of space technology and exploration."
          />
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="glass-card overflow-hidden rounded-lg group">
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-space-black to-transparent opacity-70"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-stellar-blue/20 backdrop-blur-sm text-xs px-3 py-1 rounded-full text-white">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <span className="text-white/60 text-sm">{project.year}</span>
                  </div>
                  <p className="text-white/70 mb-4">{project.description}</p>
                  <a href="#" className="text-stellar-blue hover:text-stellar-blue/80 font-medium flex items-center">
                    View Project Details
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 glass-card p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Looking for More?</h3>
            <p className="text-white/70 mb-6">
              These are just a few highlights from our extensive portfolio of space technology projects. 
              Contact us to learn more about our full range of projects and capabilities.
            </p>
            <a href="#contact" className="px-6 py-2 rounded-full bg-stellar-blue hover:bg-stellar-blue/90 text-white font-medium transition-all stellar-shadow hover:translate-y-[-2px] inline-block">
              View All Projects
            </a>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Projects;
