import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Calendar } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "GoCart",
      description: "A Java-based e-commerce web application similar to Zepto, using Spring Boot and React. Creating REST APIs for core e-commerce features such as product catalog, cart, wishlist, and order management. Implemented a layered backend architecture using Controller, Service, and Repository layers. Currently implementing the delivery workflow, including order assignment, delivery status updates, and order tracking.",
      technologies: ["Spring Boot", "React", "MySQL", "Java", "REST APIs", "CRUD Operations"],
      period: "Oct 2025 - Present",
      github:"",
      frontend: "https://github.com/ravikiran-mothukuri/GoCart-website",
      backend: "https://github.com/ravikiran-mothukuri/GoCart-Backend",
      demo: "https://mygocartmini.vercel.app/",
      isLive: true
    },
    {
      title: "Cataract Diagnosis and Classification",
      description: "A web-based cataract detection system using Flask, SQLite and Deep Learning. Uses VGG-16 and Inception V3 models for phase 1 detection, and MobileNet V2 and ResNet 101 for classification.",
      technologies: ["Flask", "SQLite", "Deep Learning", "VGG-16", "Inception V3", "MobileNet V2", "ResNet 101"],
      period: "Dec 2024 - Apr 2025",
      github: "https://github.com/ravikiran-mothukuri/Cataract_Diagnosis_and_Classification",
      // demo: "#"
    },
    {
      title: "Finance App",
      description: "A stock trading simulation platform enabling users to register, log in, and manage a virtual portfolio. Features real-time stock quotes via IEX API and secure session management.",
      technologies: ["Python", "Flask", "SQLite", "Bootstrap", "IEX API"],
      period: "Mar 2024 - Jul 2024",
      github: "https://github.com/ravikiran-mothukuri/Finance_app",
      // demo: "#"
    },
    {
      title: "Healing Hands",
      description: "A full-stack telemedicine web application that streamlines patient care. Classifies symptoms as critical or minor, with doctors providing prescriptions within 24 hours for minor cases.",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "Telemedicine"],
      period: "Feb 2025 - Apr 2025",
      github: "https://github.com/ravikiran-mothukuri/Healing_Hands",
      // demo: "#"
    },
    {
      title: "File Transfer",
      description: "A React + Vite frontend with Supabase integration for file storage and real-time updates. Features email delivery via Mailgun with secure link generation and responsive UI.",
      technologies: ["React", "Vite", "Supabase", "Mailgun", "CSS Modules"],
      period: "May 2025 - Jun 2025",
      github: "https://github.com/ravikiran-mothukuri/File_Transfer",
      // demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 section-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of projects showcasing my skills in web development, machine learning, and full-stack applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="project-card border-2 border-primary/10 hover:border-primary/30">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                    {project.isLive && (
                      <Badge variant="default" className="text-xs bg-green-600 hover:bg-green-700">
                        Live
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar size={14} />
                    <span>{project.period}</span>
                  </div>
                </div>
                <p className="text-muted-foreground">{project.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button size="sm" variant="outline" asChild>
                      {project.github ? (
                        <Button size="sm" variant="outline" asChild>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <Github size={16} />
                            Code
                          </a>
                        </Button>
                      ) : (
                        <>
                          <Button size="sm" variant="outline" asChild>
                            <a
                              href={project.frontend}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2"
                            >
                              <Github size={16} />
                              Frontend
                            </a>
                          </Button>

                          <Button size="sm" variant="outline" asChild>
                            <a
                              href={project.backend}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2"
                            >
                              <Github size={16} />
                              Backend
                            </a>
                          </Button>
                        </>
                      )}

                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <ExternalLink size={16} />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;