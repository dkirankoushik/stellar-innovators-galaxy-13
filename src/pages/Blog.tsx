
import { StarField } from '@/components/ui/star-field';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { SectionHeading } from '@/components/ui/section-heading';
import { format } from 'date-fns';

const Blog = () => {
  const blogPosts = [
    {
      title: "The Future of Satellite Manufacturing in India",
      excerpt: "Explore how India is positioning itself as a global leader in satellite technology and what this means for the future of space exploration.",
      author: "Dr. Anand Kumar",
      date: new Date("2023-10-15"),
      category: "Industry Insights",
      image: "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Advancements in Microgravity Plant Cultivation",
      excerpt: "Recent breakthroughs in growing food in space environments and how they could support long-duration space missions.",
      author: "Dr. Priya Sharma",
      date: new Date("2023-09-28"),
      category: "Research",
      image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "How Small Satellites Are Revolutionizing Earth Observation",
      excerpt: "The impact of miniaturized satellite technology on our ability to monitor climate change, urbanization, and natural disasters.",
      author: "Raj Patel",
      date: new Date("2023-09-10"),
      category: "Technology",
      image: "https://images.unsplash.com/photo-1446776858070-70c3d5ed6758?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Space Sustainability: Addressing the Orbital Debris Challenge",
      excerpt: "Examining solutions to the growing problem of space debris and how responsible satellite design can help mitigate risks.",
      author: "Sunita Rao",
      date: new Date("2023-08-22"),
      category: "Sustainability",
      image: "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-space-black overflow-x-hidden">
      {/* Enhanced Animated Star Background with shooting stars */}
      <StarField starCount={250} glowIntensity={3} shootingStarFrequency={0.05} />
      
      {/* Navbar */}
      <Navbar />
      
      {/* Main Content */}
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            overline="News & Insights"
            title="Our Space Technology Blog"
            description="The latest insights, research findings, and industry trends from the Stellarix Space team."
          />
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="glass-card rounded-lg overflow-hidden group transition-transform hover:translate-y-[-8px] duration-300">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-space-black to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-stellar-blue/20 backdrop-blur-sm text-xs px-3 py-1 rounded-full text-white">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-stellar-blue transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-white/70 mb-4">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex justify-between items-center mt-6">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-stellar-blue to-stellar-cyan flex items-center justify-center text-white text-xs font-bold">
                        {post.author.split(' ').map(name => name[0]).join('')}
                      </div>
                      <span className="ml-2 text-sm text-white/80">{post.author}</span>
                    </div>
                    <span className="text-white/60 text-sm">
                      {format(post.date, 'MMM d, yyyy')}
                    </span>
                  </div>
                </div>
                
                <a href="#" className="absolute inset-0" aria-label={`Read more about ${post.title}`}></a>
              </article>
            ))}
          </div>
          
          <div className="mt-12 flex justify-center">
            <a href="#" className="px-6 py-2 rounded-full border border-white/20 hover:border-white/40 backdrop-blur-sm hover:bg-white/5 text-white font-medium transition-all hover:translate-y-[-2px]">
              View All Articles
            </a>
          </div>
          
          <div className="mt-20 glass-card p-8 rounded-lg">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h3 className="text-2xl font-bold mb-2">Subscribe to Our Newsletter</h3>
                <p className="text-white/70">
                  Stay updated with the latest news, research findings, and insights from our team.
                </p>
              </div>
              <div className="w-full md:w-auto">
                <div className="flex flex-col sm:flex-row">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="bg-white/10 border border-white/20 px-4 py-2 rounded-full text-white placeholder:text-white/50 focus:outline-none focus:border-stellar-blue mb-3 sm:mb-0 sm:mr-3"
                  />
                  <button className="px-6 py-2 rounded-full bg-stellar-blue hover:bg-stellar-blue/90 text-white font-medium transition-all stellar-shadow hover:translate-y-[-2px]">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Blog;
