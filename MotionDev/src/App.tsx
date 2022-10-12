import './App.css'
import { useState } from 'react'
import AdvertCarousel from './Components/AddCarousel/AdvertCarousel'
import CarouselTimer from './Components/CarouselTimer/CarouselTimer'

function App() {

  const slideShowPics: string[] = [
    "https://reelcinemas.com/tridion/en-ae/Images/Amsterdam%20%20hero_tcm307-149897.jpg",
    "https://reelcinemas.com/tridion/en-ae/Images/Black%20Panther%20%20Wakanda%20Forever%20hero_tcm307-149963.png",
    "https://reelcinemas.com/tridion/en-ae/Images/Woman-Hero_tcm307-149887.jpg"
  ];

  return (
    <div className="App__Main">
      <AdvertCarousel slideshowPictureURLS={slideShowPics}/>
    </div>    
  )
}

export default App
