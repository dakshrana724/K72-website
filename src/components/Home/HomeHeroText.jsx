import React from 'react'
import Video from '../Home/Video'
import './herostyle.css'

const HomeHeroText = () => {
  return (
    <div className='font-[font1] text-white pt-4  text-center  mt-[90%] lg:mt-0 lg:mr-10'>
      <div className='lg:text-[9.5vw] text-[11.5vw] uppercase lg:leading-[8vw] leading-[5vw]  flex justify-center items-center gap-2'>The spark for
      </div>
      <div className='lg:text-[9.5vw] text-[11.5vw] uppercase lg:leading-[8vw] leading-[5vw]  flex justify-center items-center gap-2 pb-4 pt-4'>
        all  <div className='h-[8vw] hero-video' >
          <Video/>
          </div>
        things
      </div>
      <div className='lg:text-[9.5vw] text-[11.5vw] uppercase lg:leading-[8vw] leading-[5vw]  flex justify-center items-center gap-2'>
        creative
      </div>
    </div>
  
  )
}

export default HomeHeroText
