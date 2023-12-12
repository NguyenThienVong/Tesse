import React from 'react'
import Navbar from '../components/News/Navbar'
import Metting from '../components/News/Metting'
import NewTesse from '../components/News/NewTesse'
import Event from '../components/News/Event'

const News = () => {
  return (
    <div className='font-Inter'>
      <Navbar/>
      <Metting/>
      <NewTesse/>
      <div className='bg-Neutral mb-20'>
      <Event/>
      </div>
    </div>
  )
}

export default News