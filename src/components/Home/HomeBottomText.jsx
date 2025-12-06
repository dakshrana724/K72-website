import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className=' flex items-center justify-center gap-5 mb-3'>
      <p className='text-white absolute lg:w-80 w-60 right-0 lg:bottom-40 lg:leading-[1.2vw] leading-[5vw] bottom-15 lg:text-[1vw] font-[font1] text-[4.2vw]'>K72 is an agency that builds brands from every angle. Today, tomorrow and years from now. We think the best sparks fly when comfort zones get left behind and friction infuses our strategies, brands and communications with real feeling. We’re transparent, honest and say what we mean, and when we believe in something, we’re all in.

</p>

      <Link to="/projects" className='text-[6.5vw] uppercase font-[font1] border-2 border-white lg:px-6 px-3 lg:pt-3  pt-1 text-white rounded-full leading-[7vw] hover:border-[#D3FD50] hover:text-[#D3FD50]' >Projects</Link>
      
      <Link to="/agence"   className='text-[6.5vw] uppercase font-[font1] border-2 border-white lg:px-6 px-3 lg:pt-3 pt-1  text-white rounded-full leading-[7vw] hover:border-[#D3FD50] hover:text-[#D3FD50]'>Agency</Link>
    </div>
  )
}

export default HomeBottomText
