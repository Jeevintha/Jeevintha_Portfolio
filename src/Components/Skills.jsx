import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiBootstrap } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js", icon: <FaReact />, level: 90 },
      { name: "HTML5", icon: <FaHtml5 />, level: 95 },
      { name: "CSS3", icon: <FaCss3Alt />, level: 90 },
      { name: "JavaScript", icon: <FaJs />, level: 85 },
    ]
  },
  {
    title: "UI Frameworks",
    skills: [
      { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 90 },
      { name: "Bootstrap", icon: <SiBootstrap />, level: 85 },
    ]
  },
  {
    title: "Tools & Version Control",
    skills: [
      { name: "Git", icon: <FaGitAlt />, level: 88 },
      { name: "GitHub", icon: <FaGithub />, level: 90 },
    ]
  },
  {
    title: "Design",
    skills: [
      { name: "UI/UX Design", icon: <MdDesignServices />, level: 85 },
    ]
  }
];

const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-lg p-6 rounded-xl border border-gray-800 group hover:border-purple-500/50 transition-all duration-300"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="text-4xl text-purple-500 group-hover:scale-110 transition-transform duration-300">
          {skill.icon}
        </div>
        <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
      </div>
      
      <div className="relative h-2 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-500"
        />
      </div>
      <span className="text-sm text-gray-400 mt-2 inline-block">
        {skill.level}%
      </span>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <div id="skills" className="min-h-screen bg-black py-20 px-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Technical Skills
          </span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          My technical toolkit and expertise in various technologies
        </p>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-white mb-6 pl-2 border-l-4 border-purple-500">
                {category.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, index) => (
                  <SkillCard key={index} skill={skill} index={index} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;