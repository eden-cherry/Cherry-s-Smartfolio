import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Users, Award } from "lucide-react";
import Layout from "@/components/layout/Layout";
import teacherPhoto from "@/assets/teacher-photo.jpg";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-5rem)] flex items-center bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Photo */}
            <div className="order-2 lg:order-1 opacity-0 animate-slide-in-left">
              <div className="relative group">
                <div className="absolute -inset-4 bg-accent/20 rounded-2xl transform rotate-3 transition-transform duration-500 group-hover:rotate-6" />
                <img
                  src={teacherPhoto}
                  alt="Professional educator portrait"
                  className="relative w-full max-w-md mx-auto lg:mx-0 rounded-2xl shadow-lg object-cover aspect-[3/4] transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6 opacity-0 animate-fade-in-down" style={{ animationDelay: '0.1s' }}>
                Professional Educator
              </span>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-foreground leading-tight mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Inspiring Minds,<br />
                <span className="text-primary">Shaping Futures</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                With over 10 years of dedicated teaching experience, I am passionate about creating engaging learning environments where every student can thrive and reach their full potential.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-navy-light transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Learn More About Me
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Why Choose Me
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Committed to excellence in education through innovative teaching methods and personalized attention.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: BookOpen, title: "Innovative Curriculum", desc: "Developing engaging lesson plans that combine traditional methods with modern educational technology.", delay: "0.1s" },
              { icon: Users, title: "Student-Centered", desc: "Creating inclusive classrooms where every student feels valued, supported, and motivated to succeed.", delay: "0.2s" },
              { icon: Award, title: "Proven Results", desc: "Track record of improving student performance and fostering a genuine love for learning.", delay: "0.3s" },
            ].map((item, index) => (
              <div
                key={index}
                className="group p-8 bg-background rounded-xl border border-border hover:shadow-lg hover:border-accent/30 transition-all duration-500 hover:-translate-y-2 opacity-0 animate-fade-in-up"
                style={{ animationDelay: item.delay }}
              >
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-all duration-300 group-hover:scale-110">
                  <item.icon className="text-accent transition-transform duration-300 group-hover:rotate-6" size={28} />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 text-center relative">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary-foreground rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-primary-foreground rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
          </div>
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-primary-foreground mb-6 relative opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Let's Connect
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 relative opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Interested in learning more about my teaching approach or discussing potential opportunities? I'd love to hear from you.
          </p>
          <Link
            to="/contact"
            className="relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-warmBrown-light transition-all duration-300 hover:scale-105 hover:shadow-xl opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.3s' }}
          >
            Contact Me Today
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
