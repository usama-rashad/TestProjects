import React , {forwardRef, useEffect, useState} from 'react'
import CarouselTimer from '../CarouselTimer/CarouselTimer'
import {animate} from 'motion'

import "../AddCarousel/AdvertCarousel.css"

type carouselProps = {
  moveTrigger? : () => boolean;
}

function AdvertCarousel  (props : carouselProps){
  const [move,setMove] = useState(false);


  const setInMotion = ()=>{
    console.log("SM fired.")
    if(move)
    {
      setMove(false);
      console.log("Move set to false");
    }
    else
    {
      setMove(true);
      console.log("Move set to true");
    }
  }



  useEffect(()=>{
    if(move)
    {
      console.log("Moving to x=-100")
      animate(".advertCarousel_Tile",
      { x: -100},
      { duration: 0.5 })
    }
    else
    {
      console.log("Moving to x=100")
      animate(".advertCarousel_Tile",
      { x: 100},
      { duration: 0.5 })
    }
  },[move])

  



  return (
    <div className='advertCarousel__Main'>
        <div className="advertCarousel_Tile"> 
        <CarouselTimer interval={1} output={setInMotion}/>         
        </div>
    </div>
  )
}

export default AdvertCarousel