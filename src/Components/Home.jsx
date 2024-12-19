import { motion } from "framer-motion";
import { useState, useEffect, useRef } from 'react'


const Home = () => {
  const [vantaEffect, setVantaEffect] = useState(null)
  const myRef = useRef(null)

  useEffect(() => {
    if (!vantaEffect && window.VANTA) {
      setVantaEffect(window.VANTA.BIRDS({
        el: myRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0x000000,
        color1: 0x34eded,
        color2: 0x50acff,
        colorMode: "variance",
        birdSize: 1.80,
        wingSpan: 22.00,
        speedLimit: 6.00,
        separation: 55.00,
        alignment: 28.00,
        cohesion: 47.00,
        quantity: 3.00
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <div id="home" ref={myRef} className="min-h-screen">
      <motion.div className="text-white flex flex-col justify-center items-center min-h-screen">
        <h1 className="font-extrabold font-montez tracking-wider text-9xl z-10">Jeevintha</h1>
        <motion.div 
          className="text-2xl font-pridi tracking-tight text-neutral-700 z-5"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 1 }}
        >
          web developer
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Home