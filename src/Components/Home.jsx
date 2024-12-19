import { motion } from "framer-motion";
const Home = () => {
  return (
    <div id="home">
        <motion.div className="text-white flex flex-col justify-center items-center min-h-screen">
          <h1 className="font-extrabold bg-black font-montez tracking-wider text-9xl z-10">Jeevintha</h1>
          <motion.div className=" text-2xl font-pridi tracking-tight text-neutral-700 z-5"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 1 }}>
            web developer</motion.div>
        </motion.div>
    </div>
  )
}

export default Home