import React from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { useRef } from 'react'
import { useLocation } from 'react-router-dom'

const AnimationStair = (props) => {
    const stairParent=useRef(null);
    const pageRef=useRef(null);
  const t1=gsap.timeline();

  let stairlocation=useLocation().pathname;
//   console.log(stairlocation);  
  useGSAP(function(){

    t1.to(stairParent.current,{
    display:'block'
   })

    t1.from('.stair',{
      height:0,
      // duration:2,
      stagger:{
        amount:-0.25
      }
    })
  
  t1.to('.stair',{
    
    y:'100%', 
    stagger:{
      amount:-0.25
    }
   })
   t1.to(stairParent.current,{
    display:'none'
   })
   t1.to('.stair',{
    
    y:'0', 
   
   })
   gsap.from(pageRef.current,{
    opacity:0,
    delay:1, 
    
    // scale:1.2,
   })

   },[stairlocation])
   console.log(props.children);
  return (
    <div>
        <div className='h-screen w-full  fixed z-20 top-0' ref={stairParent}>
      <div className='  h-full w-full flex fixed z-20 top-0'>
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-black'></div>
      </div>
      
      </div>
      <div className='' ref={pageRef}>
        {props.children}
      </div>
    </div>
  )
}

export default AnimationStair
