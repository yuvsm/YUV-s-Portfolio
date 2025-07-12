import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Mail, Github, Linkedin, Send } from "lucide-react";
import { motion } from "framer-motion";

interface ContactSectionProps {
  id?: string;
}

const ContactSection = ({ id = "contact" }: ContactSectionProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id={id}
      className="py-20 bg-gradient-to-b from-purple-900/20 to-red-900/20 min-h-screen flex items-center justify-center px-4 md:px-8"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
            Contact Me
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="bg-black/40 border border-gray-800 shadow-xl backdrop-blur-sm">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-gray-900/60 border-gray-700 text-white placeholder:text-gray-400 focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-gray-900/60 border-gray-700 text-white placeholder:text-gray-400 focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="bg-gray-900/60 border-gray-700 text-white placeholder:text-gray-400 focus:border-purple-500 min-h-[150px]"
                    />
                  </div>
                  <div>
                    <Button
                      type="submit"
                      className="w-full bg-purple-600 text-white hover:bg-purple-700 font-medium py-3 px-6 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      <Send className="mr-2 h-5 w-5" /> Send Message
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Card className="bg-black/40 border border-gray-800 shadow-xl backdrop-blur-sm h-full">
              <CardContent className="p-6 flex flex-col justify-between h-full">
                <div className="space-y-8">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Get In Touch
                  </h3>

                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-red-500 to-purple-600 p-3 rounded-full">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">
                        Location
                      </h4>
                      <p className="text-gray-400">
                        Dehradun Uttrakhand, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-red-500 to-purple-600 p-3 rounded-full">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">
                        Email
                      </h4>
                      <p className="text-gray-400">
                        contact yuviraz01@gmail.com
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-white mb-4">
                    Follow Me
                  </h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors duration-300"
                    >
                      <Github className="h-5 w-5 text-white" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/yuvraj-mehra-209aa0243"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors duration-300"
                    >
                      <Linkedin className="h-5 w-5 text-white" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
