import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin, Code } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm always interested in new opportunities and collaborations. 
            Feel free to reach out if you'd like to work together!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-2 border-primary/10 hover:border-primary/30 transition-colors">
              <CardContent className="p-8 text-center">
                <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Email</h3>
                <p className="text-muted-foreground mb-4">ravikiranmothukuri699@gmail.com</p>
                <Button asChild>
                  <a href="mailto:ravikiranmothukuri699@gmail.com" className="flex items-center gap-2">
                    <Mail size={16} />
                    Send Email
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/10 hover:border-primary/30 transition-colors">
              <CardContent className="p-8 text-center">
                <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Phone</h3>
                <p className="text-muted-foreground mb-4">+91-8179974018</p>
                <Button asChild>
                  <a href="tel:+918179974018" className="flex items-center gap-2">
                    <Phone size={16} />
                    Call Now
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-6">Connect With Me</h3>
            <div className="flex justify-center gap-6">
              <Button size="lg" variant="outline" asChild>
                <a 
                  href="https://github.com/ravikiranmothukuri" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github size={20} />
                  GitHub
                </a>
              </Button>
              
              <Button size="lg" variant="outline" asChild>
                <a 
                  href="https://linkedin.com/in/ravikiranmothukuri" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Linkedin size={20} />
                  LinkedIn
                </a>
              </Button>
              
              <Button size="lg" variant="outline" asChild>
                <a 
                  href="https://leetcode.com/ravikiranmothukuri" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Code size={20} />
                  LeetCode
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;