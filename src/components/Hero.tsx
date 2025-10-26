import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import profileAvatar from "@/assets/profile-avatar.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col items-center text-center animate-fade-in">
          <div className="mb-8 relative">
            <div className="absolute inset-0 bg-primary rounded-full blur-3xl opacity-20 animate-float"></div>
            <img 
              src={profileAvatar} 
              alt="Kishan Gupta" 
              className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-primary shadow-glow relative z-10"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Kishan Gupta
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-2xl">
            Full-Stack Developer
          </p>
          
          <p className="text-base md:text-lg text-foreground/80 mb-8 max-w-3xl leading-relaxed">
            Passionate about building dynamic web applications using React, Next.js, Node.js, and MongoDB. 
            Strong understanding of computer science fundamentals with a focus on creating scalable and impactful software solutions.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Button variant="default" size="lg" className="bg-gradient-primary hover:opacity-90 shadow-glow" asChild>
              <a href="#projects">View Projects</a>
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10" asChild>
              <a href="/Resume_Kishan_Gupta.docx" download>
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>
          
          <div className="flex gap-4">
            <a href="https://github.com/kishangupta2023" target="_blank" rel="noopener noreferrer" 
               className="p-3 rounded-full bg-card hover:bg-card/80 border border-border transition-all hover:shadow-glow">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/kishan-gupta-22a780310/" target="_blank" rel="noopener noreferrer"
               className="p-3 rounded-full bg-card hover:bg-card/80 border border-border transition-all hover:shadow-glow">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:kishangupta3003@gmail.com"
               className="p-3 rounded-full bg-card hover:bg-card/80 border border-border transition-all hover:shadow-glow">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
