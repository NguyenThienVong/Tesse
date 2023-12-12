import React from 'react'
import Navbar from '../components/News/Navbar'
import Listnews from '../components/NewsFillter/Listnews'
import Pagination from '../components/NewsFillter/Pagination'

const NewsFillter = () => {
  return (
    <div className='font-Inter'>
        <Navbar/>
        <Listnews/>
        <Pagination/>
    </div>
  )
}

export default NewsFillter