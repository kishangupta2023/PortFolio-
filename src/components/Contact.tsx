import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-card border-border shadow-card">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
                
                <div className="flex items-center gap-4 group">
                  <div className="p-3 rounded-full bg-gradient-primary group-hover:shadow-glow transition-all">
                    <Mail className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a href="mailto:kishangupta3003@gmail.com" className="text-foreground hover:text-primary transition-colors">
                      kishangupta3003@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 group">
                  <div className="p-3 rounded-full bg-gradient-primary group-hover:shadow-glow transition-all">
                    <Phone className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <a href="tel:+918467962202" className="text-foreground hover:text-primary transition-colors">
                      +91 8467962202
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 group">
                  <div className="p-3 rounded-full bg-gradient-primary group-hover:shadow-glow transition-all">
                    <MapPin className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground">Uttar Pradesh, India</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground mb-6">Connect With Me</h3>
                
                <div className="space-y-4">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start border-primary/50 hover:bg-primary/10 hover:shadow-glow"
                    asChild
                  >
                    <a href="https://github.com/kishangupta2023" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-3 h-5 w-5" />
                      GitHub Profile
                    </a>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full justify-start border-primary/50 hover:bg-primary/10 hover:shadow-glow"
                    asChild
                  >
                    <a href="https://www.linkedin.com/in/kishan-gupta-22a780310/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-3 h-5 w-5" />
                      LinkedIn Profile
                    </a>
                  </Button>
                  
                  <Button 
                    variant="default" 
                    className="w-full justify-start bg-gradient-primary hover:opacity-90 shadow-glow"
                    asChild
                  >
                    <a href="mailto:kishangupta3003@gmail.com">
                      <Mail className="mr-3 h-5 w-5" />
                      Send Email
                    </a>
                  </Button>
                </div>
                
                <div className="pt-6 border-t border-border">
                  <h4 className="text-sm font-semibold text-muted-foreground mb-3">Education</h4>
                  <div className="space-y-2">
                    <p className="text-foreground font-semibold">B.Tech in Computer Science</p>
                    <p className="text-sm text-muted-foreground">
                      Indian Institute of Information Technology, Ranchi
                    </p>
                    <p className="text-sm text-muted-foreground">
                      CGPA: 8.93 | 2023-2027
                    </p>
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

export default Contact;
