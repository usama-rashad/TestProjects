import React , {useState} from 'react'

import {animate} from 'motion'

import "../AddCarousel/AdvertCarousel.css"

function AdvertCarousel() {
  const [move,setMove] = useState(false);

  const moveBox = () => {
    setMove(!move);
    console.log(move);

    if(move)
    {
      animate(".advertCarousel_Tile",
      { x: -200},
      { duration: 0.5 })
    }
    else
    {
      animate(".advertCarousel_Tile",
      { x: 10},
      { duration: 0.5 })
    }
  }


  return (
    <div className='advertCarousel__Main'>
        <div className="advertCarousel_Tile">
          
        </div>
        <div>
          <button className='move__Button' onClick={moveBox}>Move</button>
        </div>
    </div>
  )
}

export default AdvertCarousel