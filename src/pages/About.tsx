import Layout from "@/components/layout/Layout";
import teacherPhoto from "@/assets/teacher-photo.jpg";
import { GraduationCap, Heart, Target, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Photo */}
            <div className="opacity-0 animate-slide-in-left">
              <div className="relative group">
                <div className="absolute -inset-4 bg-primary/10 rounded-2xl transform -rotate-3 transition-transform duration-500 group-hover:-rotate-6" />
                <img
                  src={teacherPhoto}
                  alt="Professional educator portrait"
                  className="relative w-full max-w-md mx-auto rounded-2xl shadow-lg object-cover aspect-[3/4] transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </div>

            {/* Content */}
            <div className="opacity-0 animate-slide-in-right">
              <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
                About Me
              </span>
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight mb-6">
                Passionate About<br />
                <span className="text-primary">Transforming Lives</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Hello! I'm a dedicated educator with over a decade of experience in shaping young minds. My journey in education began with a simple belief: every child deserves access to quality education that nurtures their unique potential.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Throughout my career, I've had the privilege of working with diverse student populations, adapting my teaching methods to meet individual learning needs while maintaining high academic standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              My Teaching Philosophy
            </h2>
            <p className="text-muted-foreground opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Education is not just about imparting knowledge—it's about inspiring curiosity, building confidence, and preparing students for life's challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Heart, title: "Nurturing Environment", desc: "Creating a safe, supportive classroom where students feel comfortable taking risks and expressing themselves.", delay: "0.1s" },
              { icon: Lightbulb, title: "Critical Thinking", desc: "Encouraging students to question, analyze, and develop independent thinking skills for lifelong learning.", delay: "0.2s" },
              { icon: Target, title: "Goal-Oriented", desc: "Setting clear objectives and working collaboratively with students to achieve meaningful academic milestones.", delay: "0.3s" },
              { icon: GraduationCap, title: "Continuous Growth", desc: "Staying current with educational research and methodologies to provide the best learning experience.", delay: "0.4s" },
            ].map((item, index) => (
              <div key={index} className="flex gap-4 p-6 bg-background rounded-xl border border-border hover:shadow-lg hover:border-accent/30 transition-all duration-500 hover:-translate-y-1 opacity-0 animate-fade-in-up group" style={{ animationDelay: item.delay }}>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-accent/20 group-hover:scale-110">
                  <item.icon className="text-accent transition-transform duration-300 group-hover:rotate-6" size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-8 text-center opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              My Journey
            </h2>
            
            <div className="space-y-8">
              {[
                { color: "bg-primary", title: "The Beginning", desc: "My passion for teaching started during my university years when I volunteered as a tutor. Seeing the spark of understanding in a student's eyes was transformative and set me on this fulfilling path.", delay: "0.2s" },
                { color: "bg-accent", title: "Growing Experience", desc: "Over the years, I've taught in various educational settings, from rural schools to urban institutions, gaining invaluable experience in adapting to diverse student needs and educational contexts.", delay: "0.3s" },
                { color: "bg-gold", title: "Present Day", desc: "Today, I continue to evolve as an educator, embracing new technologies and methodologies while staying true to the fundamental belief that every student has the potential for greatness.", delay: "0.4s", isLast: true },
              ].map((item, index) => (
                <div key={index} className="flex gap-6 opacity-0 animate-fade-in-up" style={{ animationDelay: item.delay }}>
                  <div className="flex flex-col items-center">
                    <div className={`w-4 h-4 rounded-full ${item.color} animate-pulse-soft`} />
                    {!item.isLast && <div className="w-0.5 h-full bg-border" />}
                  </div>
                  <div className={!item.isLast ? "pb-8" : ""}>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {item.desc}
                    </p>
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

export default About;
