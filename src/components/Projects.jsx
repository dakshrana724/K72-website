import React from 'react'
import ProjectImage from './Project/ProjectImage'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Projects = () => {
  const img=[{image1:'Images/thumbnailimage_opto.jpg'
    ,image2:'Images/thumbnailimage_shelton.jpg'},
    {image1:'Images/WS---K72.ca---Thumbnail.jpg',
    image2:'Images/thumbnailimage_SollioAg.jpg'},
    {
      image1:'Images/thumbnailimage_OSM.jpg',
      image2:'Images/PME-MTL_Thumbnail.jpg'
    },
    {
      image1:'Images/PJC_SiteK72_Thumbnail_1280x960.jpg',
      image2:'Images/opto_thumbnail2.jpg'
    },{
      image1:'Images/OKA_thumbnail.jpg',  
      image2:'Images/K72_article_ChatGPT_blogue.jpg'
    }
  ]
 gsap.registerPlugin(ScrollTrigger);
  useGSAP(function(){
    gsap.from('.hero',{
      height:'100px',
      stagger:{
        amount:0.4,             
      },
      scrollTrigger:{
        trigger:'.lol',
        // markers:true,
        start:'top 100%',
        end:'top -250%',
        scrub:true
      }

        

  })})



  return (
    <div className='lg:p-4 p-2 '>
      <div className=' pt-[45vh]'>
        <h1 className='font-[font1] text-white lg:text-[8.5vw] text-5xl uppercase'>Projects</h1>
      </div>
      <div className='lol -lg:mt-10'>

        {img.map((props,idx)=>
        <div className=' hero w-full  lg:h-[500px]  flex lg:flex-row flex-col lg:gap-3 gap-2    mb-4 ' key={idx}>
          <ProjectImage image1={props.image1} image2={props.image2}/>
        </div>
        )}
        
       
      </div>
    </div>
  )
}

export default Projects
