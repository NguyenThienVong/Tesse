import React from 'react'
import Header from '../Layout/Header'
import TesseTeach from '../components/TesseEcosystem/TesseTeach'
import Connect from '../components/TesseEcosystem/Connect'
import Pioneers from '../components/TesseEcosystem/Pioneers'
import TinTuc from './../components/HomePages/TinTuc';


const TesseEcosystem = () => {
  return (
    <div className='font-Inter '>
    <div className="bg-BG h-[702px] w-auto bg-center bg-cover">
        <Header/>   
        <Connect/>
      </div>
      <TesseTeach/>
      <Pioneers/>
      <TinTuc/>
    </div>
  )
}

export default TesseEcosystem