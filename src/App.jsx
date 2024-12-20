import Nav from './Components/Nav'
import Home from './Components/Home'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact  from './Components/Contact'

function App() {

  return (
    <div className='bg-black text-white overflow-x-hidden w-full'>
      <Nav />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
