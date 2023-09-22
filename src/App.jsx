import { useState } from 'react'

import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import puppy from './assets/puppy.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <div>
        <img src={puppy} alt="Ascii Puppy" className="w-64 h-64 mx-auto"/>
      </div>
      
    </>
  )
}

export default App
