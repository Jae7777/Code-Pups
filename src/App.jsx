import { useState } from 'react'
import puppy from './assets/puppy.png'
import justin from './assets/justin.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="min-h-screen justify-center items-center">
        <div class="text-sky-500 dark:text-sky-400 text-center">
          THE TEAM
        </div>
        <figure class="md:flex rounded-xl p-8 md:p-0">
          <img class="w-32 h-32 rounded-full" src={justin} alt="" />
          <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p class="text-lg font-medium">
                “Tailwind CSS is the only framework that I've seen scale
                on large teams. It’s easy to customize, adapts to any design,
                and the build size is tiny.”
              </p>
            </blockquote>
            <figcaption class="font-medium">
              <div class="text-sky-500 dark:text-sky-400">
                Sarah Dayan
              </div>
              <div class="text-slate-700 dark:text-slate-500">
                Staff Engineer, Algolia
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
