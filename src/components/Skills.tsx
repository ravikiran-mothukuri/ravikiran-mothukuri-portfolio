import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "Python", "JavaScript", "C"]
    },
    {
      title: "Web Development",
      skills: ["React", "Node.js", "Express.js", "Spring Boot", "MongoDB", "Flask", "HTML", "CSS"]
    },
    {
      title: "Databases",
      skills: ["MySQL", "MongoDB", "SQLite", "SQL"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "GitHub", "VS Code", "Postman", "Bootstrap"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Skills</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit of technologies and programming languages I use to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl font-semibold text-center mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    className="skill-tag px-3 py-1 text-sm font-medium hover:scale-105 transition-transform"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-6">Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="p-4 bg-card rounded-lg border">
              <h4 className="font-semibold">CS50</h4>
              <p className="text-sm text-muted-foreground">Harvard University</p>
            </div>
            <div className="p-4 bg-card rounded-lg border">
              <h4 className="font-semibold">Programming in Java</h4>
              <p className="text-sm text-muted-foreground">NPTEL (IIT)</p>
            </div>
            <div className="p-4 bg-card rounded-lg border">
              <h4 className="font-semibold">Python Programming</h4>
              <p className="text-sm text-muted-foreground">HackerRank</p>
            </div>
            <div className="p-4 bg-card rounded-lg border">
              <h4 className="font-semibold">SQL</h4>
              <p className="text-sm text-muted-foreground">HackerRank</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;