import justin from '.././assets/justin.jpg'

export default function About() {
  return (
    <>
      <div className="justify-center items-center">
        <div className="text-indigo-400 text-center pt-5">
          <h1 className="text-[40px] md:text-[60px] lg:text-[70px] 
          font-bold">THE TEAM</h1>
        </div>
        <div className="md:flex rounded-xl px-20 sm:px-16 lg:px-[200px] py-8">
          <img className="mx-auto my-auto w-32 h-32 rounded-full " src={justin} alt="" />
          <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p className="text-lg font-medium">
                "People who choose to pursue the arts have a unique brain. 
                They either fully believe in their pursuits, or fall short in confidence. 
                I am of the latter. That's why I am coding."
              </p>
            </blockquote>
            <figcaption className="font-medium">
              <div className="text-sky-500 dark:text-sky-400">
                Justin Chen
              </div>
              <div className="text-slate-700 dark:text-slate-500">
                Head Developer
              </div>
            </figcaption>
          </div>
        </div>

        
      </div>
    </>
  )
}