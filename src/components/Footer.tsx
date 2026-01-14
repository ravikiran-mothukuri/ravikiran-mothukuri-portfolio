import { Github, Linkedin, Code, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-primary mb-2">Ravi Kiran Mothukuri</h3>
            <p className="text-muted-foreground">Aspiring Web Developer | JAVA Full Stack Enthusiast</p>
          </div>

          <div className="flex gap-6">
            <a 
              href="https://github.com/ravikiran-mothukuri/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/ravikiran-mothukuri/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://leetcode.com/u/RAVIKIRAN_MOTHUKURI/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
            >
              <Code size={20} />
            </a>
            <a 
              href="mailto:ravikiranmothukuri699@gmail.com"
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Ravi Kiran Mothukuri. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;