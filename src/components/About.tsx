import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 section-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate computer science student with a strong foundation in web development 
            and a drive to create innovative solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="border-2 border-primary/10 hover:border-primary/30 transition-colors">
            <CardContent className="p-6 text-center">
              <Target className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Objective</h3>
              <p className="text-muted-foreground">
                Aspiring Web Developer with strong enthusiasm for Java and Python, passionate about 
                building clean, responsive, and user-friendly web applications using the MERN stack.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/10 hover:border-primary/30 transition-colors">
            <CardContent className="p-6 text-center">
              <GraduationCap className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Education</h3>
              <div className="space-y-3 text-left">
                <div>
                  <h4 className="font-semibold">B.Tech CSE (2021-2025)</h4>
                  <p className="text-sm text-muted-foreground">Vasireddy Venkatadri Institute</p>
                  <p className="text-sm font-medium">GPA: 8.4</p>
                </div>
                <div>
                  <h4 className="font-semibold">MPC (2018-2020)</h4>
                  <p className="text-sm text-muted-foreground">Sri Chaitanya College</p>
                  <p className="text-sm font-medium">GPA: 9.44</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/10 hover:border-primary/30 transition-colors">
            <CardContent className="p-6 text-center">
              <Award className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Achievements</h3>
              <div className="space-y-2 text-left">
                <div className="flex justify-between">
                  <span>Chess Rating</span>
                  <span className="font-semibold">1500</span>
                </div>
                <div className="flex justify-between">
                  <span>LeetCode Problems</span>
                  <span className="font-semibold">450+</span>
                </div>
                <div className="text-sm text-muted-foreground mt-3">
                  Multiple certifications from Harvard (CS50), NPTEL, and HackerRank
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;