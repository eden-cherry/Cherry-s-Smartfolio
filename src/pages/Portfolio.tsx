import Layout from "@/components/layout/Layout";
import { FileText, Users, Award, Lightbulb } from "lucide-react";

const portfolioItems = [
  { id: 1, category: "Lesson Plans", icon: FileText, title: "Interactive STEM Curriculum", description: "A comprehensive mathematics and science curriculum designed to engage students through hands-on experiments and real-world applications.", highlights: ["Project-based learning", "Cross-curricular integration", "Assessment rubrics included"] },
  { id: 2, category: "Student Projects", icon: Users, title: "Annual Science Fair", description: "Coordinated and mentored students for the regional science fair, with 3 projects advancing to the state level competition.", highlights: ["15 student participants", "3 state-level qualifiers", "Award-winning presentations"] },
  { id: 3, category: "Achievements", icon: Award, title: "Teacher of the Year 2019", description: "Recognized for outstanding dedication to student success, innovative teaching methods, and positive community impact.", highlights: ["School-wide recognition", "Community involvement", "Peer nominations"] },
  { id: 4, category: "Innovation", icon: Lightbulb, title: "Digital Learning Initiative", description: "Pioneered the integration of educational technology in the classroom, improving student engagement and learning outcomes.", highlights: ["EdTech implementation", "Virtual learning resources", "Student progress tracking"] },
  { id: 5, category: "Lesson Plans", icon: FileText, title: "Reading Comprehension Workshop", description: "Developed a specialized reading program for struggling readers, incorporating phonics, vocabulary building, and comprehension strategies.", highlights: ["Differentiated instruction", "Progress monitoring", "Parent involvement guides"] },
  { id: 6, category: "Student Projects", icon: Users, title: "Community Service Learning", description: "Led student-driven community service projects connecting classroom learning to real-world community needs.", highlights: ["20+ volunteer hours per student", "Local partnerships", "Leadership development"] }
];

const Portfolio = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6 opacity-0 animate-fade-in-down" style={{ animationDelay: '0.1s' }}>
            Work Samples
          </span>
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Portfolio & Achievements
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            A showcase of lesson plans, student projects, and professional achievements.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="group bg-background rounded-xl border border-border overflow-hidden hover:shadow-lg hover:border-accent/30 transition-all duration-500 hover:-translate-y-2 opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                        <Icon className="text-accent" size={20} />
                      </div>
                      <span className="text-sm font-medium text-accent">{item.category}</span>
                    </div>
                    
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{item.description}</p>

                    <ul className="space-y-2">
                      {item.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground group/item">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-8 text-center opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Professional Skills
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { skill: "Curriculum Development", percent: 95, delay: "0.2s" },
                { skill: "Classroom Management", percent: 90, delay: "0.25s" },
                { skill: "Student Assessment", percent: 88, delay: "0.3s" },
                { skill: "Educational Technology", percent: 85, delay: "0.35s" },
                { skill: "Parent Communication", percent: 92, delay: "0.4s" },
                { skill: "Professional Development", percent: 90, delay: "0.45s" },
              ].map((item, index) => (
                <div key={index} className="opacity-0 animate-fade-in-up" style={{ animationDelay: item.delay }}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-foreground">{item.skill}</span>
                    <span className="text-muted-foreground">{item.percent}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-1000 ease-out ${index % 2 === 0 ? 'bg-primary' : 'bg-accent'}`} 
                      style={{ width: `${item.percent}%`, transitionDelay: item.delay }} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
