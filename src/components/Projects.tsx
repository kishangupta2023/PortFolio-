import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Vibecode Editor",
    description: "AI-Powered Web IDE with real-time code execution, OAuth login (Google & GitHub), project templates, Monaco Editor features, and AI chat assistant using local LLMs via Ollama.",
    tech: ["Next.js 15", "TypeScript", "MongoDB", "WebContainers", "Monaco Editor", "NextAuth"],
    github: "https://github.com/kishangupta2023/vide-code-editor.git",
    demo: "https://vide-code-editor.vercel.app/",
    status: "Live"
  },
  {
    title: "TripHeaven",
    description: "Full-stack hotel booking platform enabling users to search, list, and book hotels seamlessly. Integrated secure authentication, real-time bookings, and Stripe payment gateway.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Stripe", "Clerk", "TailwindCSS"],
    github: "https://github.com/kishangupta2023/Hotel-booking.git",
    demo: "https://hotel-booking-frontend-pi.vercel.app/",
    status: "Live"
  },
  {
    title: "Auth NextJS",
    description: "Comprehensive authentication system with login, logout, password reset, and user management features built with Next.js and modern security practices.",
    tech: ["Next.js", "NextAuth", "Prisma", "PostgreSQL", "TailwindCSS"],
    github: "https://github.com/kishangupta2023/auth-nextjs.git",
    demo: "https://auth-nextjs-five-eosin.vercel.app/login",
    status: "Live"
  },
  {
    title: "SaaS Dashboard",
    description: "Event-driven SaaS application with intelligent subscription prompts. Features todo management with automatic subscription trigger after 3 tasks.",
    tech: ["React", "Node.js", "MongoDB", "Event-Driven Architecture"],
    github: "https://github.com/kishangupta2023/saas.git",
    demo: "https://saas-three-swart.vercel.app/dashboard",
    status: "Live"
  },
  {
    title: "Currency Converter",
    description: "Real-time currency exchange rate converter with live data integration. Clean UI for seamless currency conversion across multiple currencies.",
    tech: ["React", "REST API", "TailwindCSS"],
    github: "https://github.com/kishangupta2023/Currency-Converter.git",
    demo: "https://currency-converter-blue-five-57.vercel.app/",
    status: "Live"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of my recent work showcasing full-stack development expertise
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow animate-slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <Badge variant={project.status === "Live" ? "default" : "secondary"} className="ml-2">
                  {project.status}
                </Badge>
              </div>
              
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <Badge key={i} variant="outline" className="text-xs border-primary/30">
                    {tech}
                  </Badge>
                ))}
              </div>
              
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1 border-primary/50 hover:bg-primary/10"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
                <Button 
                  variant="default" 
                  size="sm" 
                  className="flex-1 bg-gradient-primary hover:opacity-90"
                  asChild
                >
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
