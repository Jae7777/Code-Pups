import hero_image from '../assets/hero_image.jpg'

export default function Hero() {
  return (
    <>
     <div className="flex">
        <div className='absolute h-[85vh] bg-gradient-to-t from-[#2e0656] 
        via-transparent to-transparent w-full'></div>
        <div className='absolute mt-[400px] md:mt[350px] 
          px-10 md:px-24'>
           
          <h2 className='text-white text-[36px]
            lg:text-[47px] font-bold'>We aim for serious impact.</h2>
          <div className='flex gap-5 mt-5'>
              <button className='bg-transparent border-2 border-white
              text-white cursor-pointer hover:border-gray-500'>WHAT WE DO</button>

          </div>
        </div>
        <img src={hero_image} alt='hero'
        width={1920} height={1080} className="h-[85vh] object-cover" />
     </div>
    </>
  )
}