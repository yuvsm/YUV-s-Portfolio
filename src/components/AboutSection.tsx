import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Github, Linkedin, Twitter, Download } from "lucide-react";

interface AboutSectionProps {
  title?: string;
  bio?: string;
  resumeUrl?: string;
  socialLinks?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

const AboutSection = ({
  title = "About Me",
  bio = "Hi, I am Yuvraj, passionate about full-stack development and penetration testing. I enjoy turning complex problems into simple, beautiful, and intuitive designs. I've worked on various security projects and web applications. I thrive on solving problems and improving systems.",
  resumeUrl = "#",
  socialLinks = {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
}: AboutSectionProps) => {
  return (
    <section
      id="about"
      className="py-20 bg-slate-50 min-h-screen flex items-center justify-center"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
            {title}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Animated Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full md:w-1/3 flex justify-center"
          >
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-purple-500 shadow-xl">
              <img
                src="https://i.imgur.com/Fy43Y2k.jpeg"
                alt="Yuvraj Singh Mehra"
                className="w-full h-full object-cover"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-purple-600/20"
                animate={{
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>

          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full md:w-2/3"
          >
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {bio}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <Button
                  className="bg-gradient-to-r from-red-500 to-purple-600 hover:from-red-600 hover:to-purple-700 text-white px-6 py-2 rounded-full flex items-center gap-2 transition-all transform hover:scale-105"
                  asChild
                >
                  <a
                    href="https://drive.google.com/file/d/1UwYkn1CxFi7QIERgnLiX30xbQiSUGBcp/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download size={18} />
                    View Resume
                  </a>
                </Button>

                <div className="flex gap-4">
                  {socialLinks.github && (
                    <motion.a
                      href={socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2 }}
                      className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-900 transition-colors"
                    >
                      <Github size={20} />
                    </motion.a>
                  )}

                  {socialLinks.linkedin && (
                    <motion.a
                      href={socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2 }}
                      className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
                    >
                      <Linkedin size={20} />
                    </motion.a>
                  )}

                  {socialLinks.twitter && (
                    <motion.a
                      href={socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2 }}
                      className="bg-blue-400 text-white p-3 rounded-full hover:bg-blue-500 transition-colors"
                    >
                      <Twitter size={20} />
                    </motion.a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
