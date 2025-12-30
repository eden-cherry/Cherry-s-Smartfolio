import Layout from "@/components/layout/Layout";
import { MapPin, BookOpen } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Senior Teacher",
    institution: "ST. Marks Model School",
    location: "Abia State, Nigeria",
    period: "2009 - 2011",
    subjects: ["English" , "Literature"],
    description: "Leading curriculum development initiatives and mentoring junior teachers while maintaining excellent student outcomes.",
    highlights: ["Improved student pass rates by 25%", "Introduced innovative STEM programs", "Led teacher training workshops"]
  },
  {
    id: 2,
    role: "Classroom Teacher",
    institution: "Globeth Model school",
    location: "Porthacourt, Nigeria",
    period: "2013 - 2016",
    subjects: ["English", "Literature"],
    description: "Developed engaging lesson plans for diverse learners and implemented technology-enhanced learning strategies.",
    highlights: ["Recognized as Teacher of the Year 2016", "Established after-school tutoring program", "Coordinated annual science fair"]
  },
  {
    id: 3,
    role: "Teacher",
    institution: "National Comprehensive Secondary School",
    location: "Abia State, Nigeria",
    period: "2017 - 2019",
    subjects: ["English", "Literature"],
    description: "Supported lead teachers in classroom management and gained foundational teaching experience.",
    highlights: ["Assisted in curriculum planning", "Provided one-on-one student support", "Organized extracurricular activities"]
  },
  {
    id: 4,
    role: "Teacher",
    institution: "Mayfair Academy",
    location: "Abia State, Nigeria",
    period: "2024 - Present",
    subjects: ["English", "Literature"],
    description: "Delivered engaging lessons and contributed to the academic and personal development of students at Mayfair Academy.",
    highlights: ["Designed and implemented lesson plans aligned with curriculum objectives",
  "Provided personalized support to students to enhance learning outcomes",
  "Coordinated and led extracurricular activities to foster holistic development",
  "Maintained classroom management and a positive learning environment",
  "Collaborated with fellow teachers to refine teaching strategies"]
  }
];

const Experience = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6 opacity-0 animate-fade-in-down" style={{ animationDelay: '0.1s' }}>
            Career Journey
          </span>
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Teaching Experience
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Over 10 years of dedicated service in education, shaping minds and building futures across various institutions.
          </p>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className="relative bg-background rounded-xl border border-border p-6 lg:p-8 hover:shadow-lg hover:border-accent/30 transition-all duration-500 hover:-translate-y-1 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.1 + index * 0.15}s` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="hidden lg:flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-primary animate-pulse-soft" />
                    {index < experiences.length - 1 && (
                      <div className="w-0.5 h-full min-h-[200px] bg-border absolute top-12 left-[1.9rem]" />
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        {exp.period}
                      </span>
                    </div>

                    <h3 className="text-xl lg:text-2xl font-serif font-bold text-foreground mb-2">
                      {exp.role}
                    </h3>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1.5 group">
                        <BookOpen size={16} className="text-accent group-hover:animate-bounce-gentle" />
                        {exp.institution}
                      </span>
                      <span className="flex items-center gap-1.5 group">
                        <MapPin size={16} className="text-accent group-hover:animate-bounce-gentle" />
                        {exp.location}
                      </span>
                    </div>

                    <p className="text-muted-foreground mb-4">{exp.description}</p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-foreground mb-2">Subjects Taught:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.subjects.map((subject) => (
                          <span key={subject} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm hover:bg-accent/10 hover:text-accent transition-colors duration-300">
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">Key Achievements:</h4>
                      <ul className="space-y-1.5">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground group">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-300" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-24 bg-primary overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary-foreground rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-primary-foreground rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center relative">
            {[
              { value: "10+", label: "Years Experience", delay: "0.1s" },
              { value: "500+", label: "Students Taught", delay: "0.2s" },
              { value: "3", label: "Institutions", delay: "0.3s" },
              { value: "5", label: "Subjects", delay: "0.4s" },
            ].map((stat, index) => (
              <div key={index} className="opacity-0 animate-fade-in-up" style={{ animationDelay: stat.delay }}>
                <div className="text-4xl lg:text-5xl font-serif font-bold text-primary-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Experience;
