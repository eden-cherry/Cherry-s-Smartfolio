import Layout from "@/components/layout/Layout";
import { Quote } from "lucide-react";

const testimonials = [
  { id: 1, quote: "An exceptional educator who truly understands how to connect with students. My daughter's confidence in mathematics improved dramatically under her guidance.", author: "Mrs. Adeyemi", role: "Parent", highlight: true },
  { id: 2, quote: "She made learning fun! I used to struggle with science, but now it's my favorite subject. She never gave up on me.", author: "Emmanuel O.", role: "Former Student", highlight: false },
  { id: 3, quote: "A dedicated colleague who consistently goes above and beyond for her students. Her innovative teaching methods have inspired our entire department.", author: "Mr. Okonkwo", role: "Fellow Educator", highlight: false },
  { id: 4, quote: "Working with her has been transformative. She helped me develop not just academic skills, but also confidence and leadership abilities that I carry with me today.", author: "Grace A.", role: "Former Student, Now University Student", highlight: true },
  { id: 5, quote: "Her patience and dedication are unmatched. She takes time to ensure every child understands the material before moving forward.", author: "Mr. & Mrs. Nnamdi", role: "Parents", highlight: false },
  { id: 6, quote: "A true professional who brings passion and expertise to education. Her students consistently achieve outstanding results.", author: "Dr. Eze", role: "School Principal", highlight: false }
];

const Testimonials = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6 opacity-0 animate-fade-in-down" style={{ animationDelay: '0.1s' }}>
            What People Say
          </span>
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Testimonials
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Hear from students, parents, and colleagues about their experiences.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`relative p-6 lg:p-8 rounded-xl border transition-all duration-500 hover:shadow-lg hover:-translate-y-2 group opacity-0 animate-fade-in-up ${
                  testimonial.highlight
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background border-border hover:border-accent/30"
                }`}
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <Quote
                  className={`mb-4 transition-transform duration-300 group-hover:scale-110 ${
                    testimonial.highlight ? "text-primary-foreground/30" : "text-accent/30"
                  }`}
                  size={40}
                />
                
                <blockquote className={`text-lg leading-relaxed mb-6 ${
                  testimonial.highlight ? "text-primary-foreground" : "text-foreground"
                }`}>
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-semibold transition-transform duration-300 group-hover:scale-110 ${
                    testimonial.highlight
                      ? "bg-primary-foreground/20 text-primary-foreground"
                      : "bg-accent/10 text-accent"
                  }`}>
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className={`font-semibold ${testimonial.highlight ? "text-primary-foreground" : "text-foreground"}`}>
                      {testimonial.author}
                    </div>
                    <div className={`text-sm ${testimonial.highlight ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 lg:py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse-soft" />
          </div>
          <div className="max-w-3xl mx-auto text-center relative">
            <Quote className="mx-auto text-accent/20 mb-6 animate-float" size={60} />
            <blockquote className="text-2xl lg:text-3xl font-serif italic text-foreground leading-relaxed mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              "Education is the most powerful weapon which you can use to change the world."
            </blockquote>
            <cite className="text-muted-foreground opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>— Nelson Mandela</cite>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;
