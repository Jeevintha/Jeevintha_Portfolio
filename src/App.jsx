import { lazy, Suspense, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import LoadingComponent from "./Components/LoadingComponent";

const Nav = lazy(() => import('./Components/Nav'));
const Home = lazy(() => import('./Components/Home'));
const About = lazy(() => import('./Components/About'));
const Skills = lazy(() => import('./Components/Skills'));
const Projects = lazy(() => import('./Components/Projects'));
const Contact = lazy(() => import('./Components/Contact'));


function App() {

  return (
    <div className='bg-black text-white overflow-x-hidden w-full relative'>
      <Suspense fallback={<LoadingComponent />}>
        <Nav />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </Suspense>
    </div>
  );
}

export default App;