import { motion } from "framer-motion";
import { Vortex } from "../ui/vortex.jsx";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const socialLinks = [
  { icon: <FaGithub />, url: "https://github.com/yourusername" },
  { icon: <FaLinkedin />, url: "https://linkedin.com/in/yourusername" },
  { icon: <FaTwitter />, url: "https://twitter.com/yourusername" }
];

export default function Contact() {
  return (
    <div id="contact" className="w-full mx-auto rounded-md min-h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center w-screen h-screen"
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-center z-10 space-y-8"
        >
          <motion.h2 
            className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Let's Connect
          </motion.h2>

          <motion.a
            href="mailto:jeevithajeevi6234@gmail.com"
            className="group relative inline-block px-8 py-4 text-xl hover:text-purple-400 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">jeevithajeevi6234@gmail.com</span>
            <div className="absolute inset-0 bg-white/10 rounded-lg backdrop-blur-sm transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </motion.a>

          <motion.div 
            className="flex justify-center gap-6 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-400 hover:text-purple-400 transition-colors duration-300"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>

          <motion.p
            className="text-gray-400 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Open for opportunities
          </motion.p>
        </motion.div>
      </Vortex>
    </div>
  );
}