import React from 'react'
import Navbar from '../components/News/Navbar'
import NewsDetail from '../components/DetailNews/NewsDetail'
import Similararticles from '../components/DetailNews/Similararticles'

const DetailNews = () => {
  return (
    <div className='font-Inter'>
        <Navbar/>
        <NewsDetail/>
        <Similararticles />
    </div>
  )
}

export default DetailNews