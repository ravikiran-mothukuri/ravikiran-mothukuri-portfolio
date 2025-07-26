import { Button } from "@/components/ui/button";
import { Github, Linkedin, Code, Mail } from "lucide-react";
// import profilePhoto from "/lovable-uploads/9a57bcc3-c9c2-43a0-917c-6ceec882bc7f.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm <span className="text-primary-glow">Ravi Kiran</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl font-light mb-6 opacity-90">
              Aspiring Web Developer
            </h2>
            <p className="text-lg lg:text-xl mb-8 opacity-80 max-w-2xl">
              Passionate about building clean, responsive, and user-friendly web applications using the MERN stack. 
              Committed to continuous learning and contributing effectively to dynamic development teams.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <Button size="lg" variant="secondary" asChild>
                <a href="#projects" className="flex items-center gap-2">
                  <Code size={20} />
                  View Projects
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <a href="#contact" className="flex items-center gap-2">
                  <Mail size={20} />
                  Contact Me
                </a>
              </Button>
            </div>
            <div className="flex gap-6 justify-center lg:justify-start">
              <a 
                href="https://github.com/ravikiran-mothukuri/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/ravikiran-mothukuri/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://leetcode.com/u/RAVIKIRAN_MOTHUKURI/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Code size={24} />
              </a>
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                <img 
                  src="" 
                  alt="Ravi Kiran Mothukuri" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary-glow/30 to-accent/30 blur-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;