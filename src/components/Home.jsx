import React from 'react'
import Video from './Home/Video.jsx'
import HomeHeroText from './Home/HomeHeroText.jsx'
import HomeBottomText from './Home/HomeBottomText.jsx'


const Home = () => {
  return (
    <div >
      <div className='h-screen w-screen fixed'>
      <Video />

      </div>
      <div className='h-screen w-screen relative flex flex-col  justify-between'>
        <HomeHeroText/>
        <HomeBottomText/>
      </div>
    </div>
  )
}

export default Home
