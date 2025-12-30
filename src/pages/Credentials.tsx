import Layout from "@/components/layout/Layout";
import { Download, Eye, FileText, Award, GraduationCap, Medal } from "lucide-react";
import { Button } from "@/components/ui/button";

const certificates = [
  {
    id: 1,
    title: "Master of Education",
    issuer: "Stanford University",
    date: "2018",
    icon: GraduationCap,
    description: "Advanced degree in Educational Leadership and Curriculum Development",
    url: "/certificates/master-of-education.pdf"
  },
  {
    id: 2,
    title: "Teaching Certification",
    issuer: "State Board of Education",
    date: "2015",
    icon: Award,
    description: "Professional teaching license for K-12 education",
    url: "/certificates/teaching-certification.pdf"
  },
  {
    id: 3,
    title: "Advanced Pedagogy Certificate",
    issuer: "National Teaching Institute",
    date: "2020",
    icon: Medal,
    description: "Specialized training in modern teaching methodologies",
    url: "/certificates/advanced-pedagogy.pdf"
  },
  {
    id: 4,
    title: "Digital Learning Specialist",
    issuer: "EdTech Academy",
    date: "2022",
    icon: Award,
    description: "Certification in educational technology and online instruction",
    url: "/certificates/digital-learning-specialist.pdf"
  },
  {
    id: 5,
    title: "Special Education Endorsement",
    issuer: "Department of Education",
    date: "2019",
    icon: GraduationCap,
    description: "Qualified to teach students with diverse learning needs",
    url: "/certificates/special-education-endorsement.pdf"
  },
  {
    id: 6,
    title: "Curriculum Design Excellence",
    issuer: "American Educational Association",
    date: "2021",
    icon: Medal,
    description: "Recognition for innovative curriculum development",
    url: "/certificates/curriculum-design-excellence.pdf"
  },
];

const Credentials = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 
              className="font-serif text-4xl lg:text-5xl font-bold text-primary mb-6 opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
            >
              Credentials & Documents
            </h1>
            <p 
              className="text-lg text-muted-foreground opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
            >
              View and download my professional certifications, qualifications, and curriculum vitae.
            </p>
          </div>
        </div>
      </section>

      {/* CV Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto bg-card rounded-2xl p-8 lg:p-12 border border-border shadow-elegant opacity-0 animate-fade-in-up"
               style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="w-24 h-24 bg-secondary rounded-2xl flex items-center justify-center animate-float">
                <FileText className="w-12 h-12 text-primary" />
              </div>
              <div className="flex-1 text-center lg:text-left">
                <h2 className="font-serif text-2xl lg:text-3xl font-bold text-primary mb-3">
                  Curriculum Vitae
                </h2>
                <p className="text-muted-foreground mb-6">
                  Download my complete CV with detailed information about my education, 
                  teaching experience, publications, and professional achievements.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a
                    href="/CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-primary rounded-lg hover:bg-primary/10 transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                    View CV
                  </a>
                  <a
                    href="/CV.pdf"
                    download="CV.pdf"
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Download PDF
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 
              className="font-serif text-3xl lg:text-4xl font-bold text-primary text-center mb-4 opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
            >
              Professional Certificates
            </h2>
            <p 
              className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
            >
              A collection of my professional certifications and qualifications that demonstrate 
              my commitment to excellence in education.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificates.map((cert, index) => (
                <div
                  key={cert.id}
                  className="bg-card rounded-xl p-6 border border-border shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 opacity-0 animate-fade-in-up group"
                  style={{ animationDelay: `${0.6 + index * 0.1}s`, animationFillMode: "forwards" }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <cert.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif font-semibold text-foreground mb-1">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-accent font-medium">{cert.issuer}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{cert.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full">
                      {cert.date}
                    </span>
                    <div className="flex gap-2">
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-muted-foreground hover:text-primary hover:bg-secondary rounded-lg transition-colors flex items-center justify-center"
                        aria-label={`View ${cert.title}`}
                      >
                        <Eye className="w-4 h-4" />
                      </a>
                      <a
                        href={cert.url}
                        download
                        className="p-2 text-muted-foreground hover:text-primary hover:bg-secondary rounded-lg transition-colors flex items-center justify-center"
                        aria-label={`Download ${cert.title}`}
                      >
                        <Download className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Note Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center bg-secondary/50 rounded-2xl p-8 opacity-0 animate-fade-in-up"
               style={{ animationDelay: "1.2s", animationFillMode: "forwards" }}>
            <p className="text-muted-foreground italic">
              For official verification of any credentials, please contact me directly through the{" "}
              <a href="/contact" className="text-accent hover:underline">contact page</a>.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Credentials;
