import { useState } from 'react'

import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import puppy from './assets/puppy.png'
import justin from './assets/justin.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Hero />
      <div class="min-h-screen justify-center items-center">
        <div class="text-sky-500 dark:text-sky-400 text-center">
          THE TEAM
        </div>
        <figure class="md:flex rounded-xl p-8 md:p-0">
          <img class="w-32 h-32 rounded-full" src={justin} alt="" />
          <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p class="text-lg font-medium">
                "Poeple who choose to pursue the arts have a unique brain. 
                They either fully believe in their pursuits, or fall short in confidence. 
                I am of the latter. That's why I am coding."
              </p>
            </blockquote>
            <figcaption class="font-medium">
              <div class="text-sky-500 dark:text-sky-400">
                Justin Chen
              </div>
              <div class="text-slate-700 dark:text-slate-500">
                Head Developer
              </div>
            </figcaption>
          </div>
        </figure>

        <div class="flex">
          <img src={puppy} alt="Ascii Puppy" class="w-64 h-64 center"/>
        </div>
      </div>
      
    </>
  )
}

export default App
