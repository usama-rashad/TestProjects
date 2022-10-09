import './App.css'
import { useState } from 'react'
import AdvertCarousel from './Components/AddCarousel/AdvertCarousel'
import CarouselTimer from './Components/CarouselTimer/CarouselTimer'

function App() {

  const timer1trigger = () =>{
  }


  return (
    <div className="App__Main">
      {/* <CarouselTimer interval={1} output ={timer1trigger}/> */}
      <AdvertCarousel />
    </div>    
  )
}

export default App
