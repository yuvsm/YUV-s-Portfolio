import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  demoLink: string;
  githubLink: string;
}

interface ProjectsSectionProps {
  projects?: Project[];
}

const ProjectsSection = ({
  projects = defaultProjects,
}: ProjectsSectionProps) => {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 min-h-screen flex flex-col justify-center"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 to-purple-600 text-transparent bg-clip-text">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work in web development and cybersecurity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button className="bg-purple-600 text-white hover:bg-purple-700 rounded-md px-8 py-4 text-lg font-semibold transition-all duration-300 border-0 shadow-lg hover:shadow-xl transform hover:scale-105">
            View My Projects →
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <Card className="h-full overflow-hidden border border-slate-800 bg-slate-900/50 hover:border-slate-700 transition-all duration-300">
        <div className="aspect-video overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <CardHeader>
          <CardTitle className="text-xl font-bold text-white">
            {project.title
              .split(" ")
              .map(
                (word) =>
                  word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
              )
              .join(" ")}
          </CardTitle>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.techStack.map((tech, index) => (
              <Badge
                key={index}
                variant="outline"
                className="bg-slate-800/60 text-white border-slate-600 text-xs px-3 py-1 rounded-md hover:bg-slate-700/60 transition-colors duration-200"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-gray-400">
            {project.description}
          </CardDescription>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            variant="ghost"
            size="sm"
            className="text-purple-400 hover:text-purple-300 hover:bg-purple-900/20"
            asChild
          >
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </a>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-red-400 hover:text-red-300 hover:bg-red-900/20"
            asChild
          >
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" />
              Code
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

const defaultProjects: Project[] = [
  {
    id: 1,
    title: "machine failure prediction",
    description:
      "Built a Python-based ML model during my ONGC internship to predict machine failures using real-time sensor data. Used Scikit-learn for training and Flask for deployment. The system helps reduce downtime through early failure alerts.",
    image:
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&q=80",
    techStack: ["React", "Node.js", "Socket.io", "Python"],
    demoLink: "https://example.com/demo1",
    githubLink: "https://github.com/example/project1",
  },
  {
    id: 2,
    title: "Light weight Hashing algorithmn",
    description:
      "Developed a lightweight hashing algorithm for IoT devices by enhancing PHOTON-CES.Improved entropy, avalanche effect, and collision resistance.Documented findings in a research paper.",
    image:
      "https://images.unsplash.com/photo-1563089145-599997674d42?w=800&q=80",
    techStack: ["Linux", "Python", "Metasploitable", "Burpsuite"],
    demoLink: "https://example.com/demo2",
    githubLink: "https://github.com/example/project2",
  },
  {
    id: 3,
    title: "Deployment of Vulnerable Machine",
    description:
      "Deployed a vulnerable virtual machine to simulate real-world security flaws.Enabled penetration testers to perform ethical hacking in a safe, controlled environment.",
    image:
      "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=800&q=80",
    techStack: ["DVWA", "Metasploitable", "Kali-Linux"],
    demoLink: "https://example.com/demo3",
    githubLink: "https://github.com/example/project3",
  },
];

export default ProjectsSection;
