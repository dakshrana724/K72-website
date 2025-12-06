import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import useScrollDirection from './scroller/DetectScroll';


const Contact = () => {
  const scrollDir = useScrollDirection();

console.log(scrollDir); // "up" or "down"

  return (
    <div className='text-white'>
      <div className='upperInfo flex items-end justify-between   mx-30 font-[font1]  mt-3'>
        <div className='w-[12vw]'>Onscreen or in an office. 
            <div className='text-center'>Here.There.</div>
            <div className='text-center'>Anywhere.</div>
            </div>
        <div className='font-[font2] uppercase leading-[.9]'><div className='text-[10vw] text-center'>To talk</div>
                <div className='text-[10vw] text-center'>about</div>
                <div className='text-[10vw] text-center'>your</div>
               <div className='text-[10vw] text-center'>project</div> 
        </div>
        <div className="flex flex-wrap break-all w-[10vw] "> <a href='https://github.com/dakshrana724' target='_blank'>https://github.com/dakshrana724</a></div>
      </div>

    <div className='overflow-hidden pb-[10vw] pt-[2vw]'>
      <div className={`w-full  uppercase  font-[font2] flex mt-[8vw] moveZ  ${scrollDir?"rotate-[-7deg]":"rotate-[7deg]"}`}>
        <div className='w-full flex shrink-0'>

        <div className='text-[11.4vw] bg-[#D3FD50] text-black leading-none'>

          <FontAwesomeIcon icon={faHeart} />
          </div>
          <p className='text-[11.4vw] flex justify-center items-center bg-[#D3FD50]  leading-none text-black '>hello@k72.ca </p>
        </div>
        <div className='w-full flex shrink-0'>

        <div className='text-[11.4vw] bg-[#D3FD50] text-black leading-none'>

          <FontAwesomeIcon icon={faHeart} />
          </div>
          <p className='text-[11.4vw] flex justify-center items-center bg-[#D3FD50]  leading-none text-black '>hello@k72.ca </p>
        </div>
       
      </div>
    </div>
    <div className='  w-full pb-2 mb-5 '>
      <div className='uppercase font-font[2] w-full text-center text-[1.3vw] hover:text-[#D3FD50]'>follow me</div>
      <div className='flex gap-3 justify-center items-center mt-2'>

      <div className='text-[6vw] font-font[2] leading-[5vw] border-white border-2 w-[9vw] h-[6vw] flex items-center justify-center rounded-full pb-2 hover:text-[#D3FD50] hover:border-[#D3FD50]'><a href='https://www.linkedin.com/in/daksh-rana/' target='_blank' >IN</a></div>
      <div className='text-[6vw] font-font[2] leading-[5vw] border-white border-2 w-[9vw] h-[6vw] flex items-center justify-center rounded-full pb-2 hover:text-[#D3FD50] hover:border-[#D3FD50]'><a href='https://www.instagram.com/daksh7452?igsh=OHdud3VycmtkZzg3'target='_blank' >IG</a></div>
      <div className='text-[6vw] font-font[2] leading-[5vw] border-white border-2 w-[9vw] h-[6vw] flex items-center justify-center rounded-full pb-2 hover:text-[#D3FD50] hover:border-[#D3FD50]'><a href='https://github.com/dakshrana724'target='_blank'>GI  </a></div>
      </div>
    </div>
    </div>
  )
}
{/* <script src="https://kit.fontawesome.com/2d8107b9e6.js" crossorigin="anonymous"></script> */}

export default Contact
