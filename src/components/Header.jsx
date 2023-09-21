import { useState } from 'react'
import { ImMenu3, ImMenu4 } from 'react-icons/im'


export default function Header() {
  const [toggle, setToggle] = useState(false)
  const menu=[
    {
      id:1,
      name: 'Home',
    },
    {
      id:2,
      name: 'About',
    },
    {
      id:3,
      name: 'Projects'
    }
  ]
  return (
    <>
      <div className='flex justify-between align-center p-3'>
        <img src='/favicon.ico' alt='logo' className='w-14 h-14' />
        {/* desktop menu */}
        <ul className='hidden sm:flex gap-8 pr-10'>
          {menu.map((item)=>(
            <li className='text-violet-400 text-[18px] 
            font-medium font-sans cursor-pointer hover:underline 
            hover:text-white px-3 pb-3 py-1 transition-all duration--500' 
            key={item.id}>
              {item.name}
            </li>
          ))}
        </ul>
        {/* mobile menu */}
        <div className='sm:hidden pr-5'>
          {!toggle ? <ImMenu3 className='w-8 h-8 text-violet-400 cursor-pointer' onClick={()=>setToggle(!toggle)} />
                      : <ImMenu4 className='w-8 h-8 text-violet-300 cursor-pointer' onClick={()=>setToggle(!toggle)} /> }
          {toggle && 
            <ul className='absolute bg-slate-700 mt-3 right-5 px-3 cursor-pointer'>
              {menu.map((item)=>(
              <li className='text-violet-300 text-[16px] cursor-pointer mb-3 mt-2
            hover:text-white px-3 pb-2 transition-all duration-500 text-right' key={item.id}>
                {item.name}
              </li>
            ))}
            </ul>
          }
        </div>
      </div>
    </>
  )
}
