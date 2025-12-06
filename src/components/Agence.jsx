import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import { gsap } from 'gsap';

const Agence = () => {

  const imageDivRef=useRef(null);
  const imageRef=useRef(null);

  const imageArr=['Images/Carl_480x640.jpg',
    'Images/CAMILLE_480X640_2.jpg',
    'Images/ChantalG_480x640.jpg',
    'Images/HugoJoseph_480x640.jpg',
    'Images/joel_480X640_3.jpg',
    'Images/Lawrence_480x640.jpg',
    'Images/MEGGIE_480X640_2.jpg',
    'Images/MEL_480X640.jpg',
    'Images/Michele_480X640.jpg',
    'Images/Olivier_480x640.jpg',
    'Images/SophieA_480x640.jpg'


  ];
   
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(function(){
    gsap.to(imageDivRef.current,{
      scrollTrigger:{
        trigger:imageDivRef.current,
        // markers:true,
        pin:true,
        start:'top 35%',
        end:'top -70%',
        pinSpacing:true,
        scrub:1,
        pinReparent:true,
        pinType:'transform',
        anticipatePin:1,
        invalidateOnRefresh:true,
        onUpdate:(elem)=>{
          let progress=Math.floor(elem.progress*imageArr.length
          );
          if(progress<imageArr.length){
            imageRef.current.src=imageArr[progress];
          }
          else{
            progress=imageArr.length-1;
            imageRef.current.src=imageArr[progress];
          }
        }
      }
    })
  })

  return (
    <div>
      <div className='font-[font2] section-1 py-1 '>
        
        <div className='absolute overflow-hidden left-[31.25vw] lg:top-[20vw] lg:h-[20vw] h-[30vw] ' ref={imageDivRef}>
          <img className='lg:w-[14vw] w-[15vw] lg:rounded-3xl rounded-xl object-cover 'ref={imageRef}  src='Images/Carl_480x640.jpg '></img>
        </div>

        <div className='relative'>
        <div className='lg:mt-[28vw] mt-[80vw]'>

        <h1 className='text-white font-[font2] text-[18vw] text-center leading-[15vw] '>SEVEN7Y<br></br>
        TWO</h1>
        </div>
        <div className='p-2'>
          <p className='text-white lg:text-[3.25vw] text-[6vw] lg:pl-[40%] lg:leading-[4vw] leading-[7vw] '>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.</p>
        </div>
        </div>
      </div>
     
    </div>
  )
};

export default Agence
