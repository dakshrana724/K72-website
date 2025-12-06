import React from 'react'

const ProjectImage = (props) => {
  return (
    <>
          <div className='lg:w-1/2 h-full group transition-all rounded-none  hover:rounded-[50px] overflow-hidden relative'>
            <img src={props.image1} className='  object-cover h -full w-full '></img>
            <div className='h-full w-full absolute bg-black/20 top-0 flex justify-center items-center opacity-0 group-hover:opacity-100' >
              <h2 className='text-white uppercase text-[3vw] border-white   rounded-full px-3 border-4 '>View project</h2>
            </div>

          </div>
          <div className='lg:w-1/2 h-full group transition-all rounded-none  hover:rounded-[50px] overflow-hidden relative'>
            <img src={props.image2} className='  object-cover h -full w-full '></img>
            <div className='h-full w-full absolute bg-black/20 top-0 flex justify-center items-center opacity-0 group-hover:opacity-100' >
              <h2 className='text-white uppercase text-[3vw] border-white   rounded-full px-3 border-4 '>View project</h2>
            </div>

          </div>
    </>
          
        
  )
}

export default ProjectImage
