import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'SHED',
      status: 'In Progress',
      description: 'A web app that allows users to find and match with gigs in their location.'
    },
    {
      id: 2,
      title: 'CodePups (This)',
      status: 'In Progress',
      description: 'A development team striving to build technology that changes the way musicians and artists find and create work'
    }
  ]

  const statusFontStyle = 'text-[14px] md:text-[20px] lg:text-[30px] italic'
  return (
    <>
      <div className="justify-center items-center">
        <div className="text-center">
          <h1 className='text-[40px] text-indigo-400 md:text-[60px] lg:text-[70px]
          font-bold'>PROJECTS</h1>
        </div>
        
        <div className="flex justify-center px-[50px] sm:px-[10px] lg:px-[100px] py-8">
          {projects.map((item) => (
            <div key={item.id} className='flex flex-col p-3'>
              <h1 className='text-[20px] md:text-[30px] lg:text-[40px]
              font-bold'>{item.title}</h1>
              {item.status=="In Progress" ? 
              <h2 className={`${statusFontStyle} text-slate-400`}>{item.status}</h2> : 
              <h2 className={`${statusFontStyle} text-violet-400`}>{item.status}</h2>}
              <p className='text-[12px] md:text-[18px] lg:text-[26px]
              text-lg font-medium'>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}