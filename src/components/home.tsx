import React from "react";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-900 via-purple-900 to-indigo-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold tracking-wider">
            YUVRAJ
          </a>
          <div className="hidden md:flex space-x-8">
            <a href="#hero" className="hover:text-purple-300 transition-colors">
              Home
            </a>
            <a
              href="#about"
              className="hover:text-purple-300 transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="hover:text-purple-300 transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-purple-300 transition-colors"
            >
              Contact
            </a>
          </div>
          <button className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-menu"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <section id="hero">
          <HeroSection />
        </section>

        <motion.section
          id="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <AboutSection />
        </motion.section>

        <motion.section
          id="projects"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <ProjectsSection />
        </motion.section>

        {/* Technical Proficiency Section */}
        <motion.section
          id="skills"
          className="py-20 px-6 md:px-12 lg:px-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Technical Proficiency
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Skills with Bar Graphs */}
              <div>
                <h3 className="text-2xl font-semibold mb-6">Skills</h3>

                {/* HTML, CSS, JS */}
                <div className="mb-6">
                  <div className="flex justify-between mb-1">
                    <span>HTML, CSS, JS</span>
                    <span>90%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-gradient-to-r from-red-500 to-purple-500 h-2.5 rounded-full"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>

                {/* Python, React, C++ */}
                <div className="mb-6">
                  <div className="flex justify-between mb-1">
                    <span>Python, React, C++</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-gradient-to-r from-red-500 to-purple-500 h-2.5 rounded-full"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>

                {/* Networking & OSINT */}
                <div className="mb-6">
                  <div className="flex justify-between mb-1">
                    <span>Networking & OSINT</span>
                    <span>80%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-gradient-to-r from-red-500 to-purple-500 h-2.5 rounded-full"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Tools & Certifications */}
              <div>
                <h3 className="text-2xl font-semibold mb-6">
                  Tools & Certifications
                </h3>

                <div className="mb-8">
                  <h4 className="text-xl mb-3">Tools Known</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "VS Code",
                      "Git",
                      "BurpSuite",
                      "Nmap",
                      "Wireshark",
                      "Metasploit",
                      "Docker",
                    ].map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 bg-purple-900/50 rounded-full text-sm"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl mb-3">Certifications</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 text-purple-400"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                      Certified Ethical Hacker (CEH)
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 text-purple-400"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                      OSCP (In Progress)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Education & Qualifications */}
        <motion.section
          className="py-20 px-6 md:px-12 lg:px-24 bg-black/20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Education & Qualifications
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-purple-900/30 p-6 rounded-lg border border-purple-500/30">
                <h3 className="text-2xl font-semibold mb-4">Education</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-medium">
                      B.Tech in Computer Science
                    </h4>
                    <p className="text-purple-300">
                      University of Petroleum and Energy Studies (UPES)
                    </p>
                    <p className="text-sm text-gray-300">2022 - 2026</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium">
                      Cybersecurity Internship
                    </h4>
                    <p className="text-purple-300">ONGC</p>
                    <p className="text-sm text-gray-300">
                      June 2022 - Aug 2026
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-900/30 p-6 rounded-lg border border-purple-500/30">
                <h3 className="text-2xl font-semibold mb-4">
                  Courses & Duration
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-medium">Courses</h4>
                    <ul className="list-disc list-inside text-purple-300 space-y-1">
                      <li>Web Development</li>
                      <li>Vulnerability Assessment & Penetration Testing</li>
                      <li>Networking</li>
                      <li>Cybersecurity Fundamentals</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium">Duration</h4>
                    <p className="text-purple-300">2022 - 2026</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* My Services */}
        <motion.section
          className="py-20 px-6 md:px-12 lg:px-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">
              My Services
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Web Development",
                  icon: "code",
                  description:
                    "Creating responsive and dynamic websites with modern frameworks and clean code.",
                },
                {
                  title: "Bug Bounty & Research",
                  icon: "bug",
                  description:
                    "Finding and reporting security vulnerabilities in web applications and networks.",
                },
                {
                  title: "OSINT Investigation",
                  icon: "search",
                  description:
                    "Gathering intelligence from publicly available sources for security assessments.",
                },
                {
                  title: "Penetration Testing",
                  icon: "shield",
                  description:
                    "Simulating cyber attacks to identify and fix security weaknesses.",
                },
                {
                  title: "Cyber Awareness Sessions",
                  icon: "users",
                  description:
                    "Educating teams about cybersecurity best practices and threat prevention.",
                },
                {
                  title: "UI/UX Design",
                  icon: "layout",
                  description:
                    "Creating intuitive and visually appealing user interfaces and experiences.",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-900/40 to-red-900/40 p-6 rounded-lg border border-purple-500/30 hover:border-purple-400 transition-all hover:shadow-lg hover:shadow-purple-500/20 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {service.icon === "code" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="16 18 22 12 16 6" />
                        <polyline points="8 6 2 12 8 18" />
                      </svg>
                    )}
                    {service.icon === "bug" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect width="8" height="14" x="8" y="6" rx="4" />
                        <path d="m19 7-3 2" />
                        <path d="m5 7 3 2" />
                        <path d="m19 19-3-2" />
                        <path d="m5 19 3-2" />
                        <path d="M20 13h-4" />
                        <path d="M4 13h4" />
                        <path d="m10 4 1 2" />
                        <path d="m14 4-1 2" />
                      </svg>
                    )}
                    {service.icon === "search" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.3-4.3" />
                      </svg>
                    )}
                    {service.icon === "shield" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                      </svg>
                    )}
                    {service.icon === "users" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    )}
                    {service.icon === "layout" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect
                          width="18"
                          height="18"
                          x="3"
                          y="3"
                          rx="2"
                          ry="2"
                        />
                        <line x1="3" x2="21" y1="9" y2="9" />
                        <line x1="9" x2="9" y1="21" y2="9" />
                      </svg>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Work Experience */}
        <motion.section
          className="py-20 px-6 md:px-12 lg:px-24 bg-black/20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Work Experience
            </h2>

            <div className="max-w-3xl mx-auto">
              <div className="relative pl-8 pb-12 border-l-2 border-purple-500">
                <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-purple-500"></div>
                <div className="mb-4">
                  <h3 className="text-2xl font-semibold">
                    Intern Oil Natural And Gas
                  </h3>
                  <p className="text-purple-300">ONGC</p>
                  <p className="text-sm text-gray-300">June 2024 - Aug 2024</p>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-200">
                  <li>
                    Developed a full-stack machine failure prediction system
                    using Python and ML models (Random Forest, XGBoost) on
                    Kaggle sensor data
                  </li>
                  <li>
                    Applied data preprocessing, feature selection, and trained
                    models using scikit-learn
                  </li>
                  <li>
                    Developed a web interface with HTML/CSS to allow user input
                    and display predictions
                  </li>
                  <li>
                    Integrated the frontend with a Python backend to provide
                    real-time prediction results
                  </li>
                </ul>
              </div>

              <div className="text-center mt-8">
                <button className="px-6 py-3 bg-gradient-to-r from-red-600 to-purple-600 rounded-full hover:from-red-500 hover:to-purple-500 transition-all transform hover:scale-105 font-medium">
                  View Work History
                </button>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <ContactSection />
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="bg-black/40 py-12 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <a
              href="#"
              className="text-3xl font-bold tracking-wider mb-4 md:mb-0"
            >
              YUVRAJ
            </a>
            <div className="flex space-x-6">
              <a
                href="#hero"
                className="hover:text-purple-300 transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="hover:text-purple-300 transition-colors"
              >
                About
              </a>
              <a
                href="#skills"
                className="hover:text-purple-300 transition-colors"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="hover:text-purple-300 transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="hover:text-purple-300 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p>© Yuvraj Singh Mehra | All Rights Reserved</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-purple-400 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
