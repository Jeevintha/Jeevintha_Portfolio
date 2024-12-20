import { motion } from "framer-motion";
import { Vortex } from "../ui/vortex.jsx";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const socialLinks = [
  { icon: <FaGithub size={24} />, url: "https://github.com/yourusername", label: "GitHub" },
  { icon: <FaLinkedin size={24} />, url: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
  { icon: <FaTwitter size={24} />, url: "https://twitter.com/yourusername", label: "Twitter" }
];

export default function Contact() {
  return (
    <div id="contact" className="relative w-full min-h-screen overflow-hidden bg-black">
      <Vortex
        backgroundColor="black"
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />


      <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-screen">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-4xl text-center space-y-12"
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Let's Connect
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center space-y-8"
          >
            <motion.a
              href="mailto:jeevithajeevi6234@gmail.com"
              className="group relative inline-flex items-center gap-2 px-6 py-3 text-lg md:text-xl bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEnvelope className="text-xl" />
              <span>jeevithajeevi6234@gmail.com</span>
            </motion.a>

            <div className="flex flex-wrap justify-center gap-6 mt-8">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white/5 rounded-full hover:bg-white/10 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
      </Vortex>
    </div>

  );
}