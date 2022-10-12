import React , {forwardRef, useEffect, useState} from 'react'
import CarouselTimer from '../CarouselTimer/CarouselTimer'
import {animate} from 'motion'

import "../AddCarousel/AdvertCarousel.css"

type carouselProps = {
  slideshowPictureURLS  : string[];
  moveTrigger?          : () => boolean;
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


  /* Motion loader */
  useEffect(()=>{
    if(move)
    {
      console.log("Moving to x=-100")
      animate(".advertCarousel_Tile",
      { x: -1095},
      { duration: 0.5 })
    }
    else
    {
      console.log("Moving to x=100")
      animate(".advertCarousel_Tile",
      { x: 0},
      { duration: 0.5 })
    }
  },[move])


  return (
    <div className='advertCarousel__Main'>
        <div className="advertCarousel_Tile"> 
        <CarouselTimer interval={5} output={setInMotion}/>         
        </div>
    </div>
  )
}

export default AdvertCarousel