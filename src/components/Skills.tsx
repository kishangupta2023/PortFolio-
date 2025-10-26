import { Card } from "@/components/ui/card";
import { Code2, Database, Wrench, Rocket } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "TailwindCSS", "ShadCN UI"]
  },
  {
    title: "Backend",
    icon: Database,
    skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "NeonDB", "Prisma", "REST APIs"]
  },
  {
    title: "Tools & Systems",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Postman", "Vercel", "Docker", "Clerk"]
  },
  {
    title: "Expertise",
    icon: Rocket,
    skills: ["Data Structures & Algorithms", "OOP", "Performance Optimization", "Secure Systems", "Event-Driven Architecture"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-gradient-hero">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Proficient in modern web technologies and best practices
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index} 
                className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-gradient-primary">
                    <Icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
        
        <div className="mt-12 text-center animate-fade-in">
          <Card className="inline-block p-6 bg-card border-border">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold text-foreground mb-2">Competitive Programming</h3>
                <p className="text-muted-foreground mb-4">
                  Solved 200+ DSA problems across platforms
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">1600+</p>
                    <p className="text-sm text-muted-foreground">LeetCode Rating</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-secondary">1400+</p>
                    <p className="text-sm text-muted-foreground">CodeChef Rating</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-accent">Top 22%</p>
                    <p className="text-sm text-muted-foreground">Contest Rank</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
