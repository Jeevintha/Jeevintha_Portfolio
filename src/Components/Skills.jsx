import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiBootstrap } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js", icon: <FaReact className="text-[#61DAFB]" /> },
      { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" /> },
      { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" /> },
    ]
  },
  {
    title: "UI Frameworks and Tools",
    skills: [
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
      { name: "Bootstrap", icon: <SiBootstrap className="text-[#7952B3]" /> },
      { name: "UI/UX Design", icon: <MdDesignServices className="text-[#FF7F50]" /> },
      { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
      { name: "GitHub", icon: <FaGithub className="text-white" /> },
    ]
  }
];

export default function Skills() {
  return (
    <div id="skills" className="relative min-h-screen w-full bg-black py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Technical Expertise
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800"
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-6 text-gray-200">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center p-4 rounded-xl bg-black/50 backdrop-blur-sm border border-gray-800 hover:border-gray-700 transition-all duration-300"
                  >
                    <div className="text-4xl md:text-5xl mb-3 transition-transform duration-300 hover:scale-110">
                      {skill.icon}
                    </div>
                    <span className="text-sm md:text-base text-gray-300">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}