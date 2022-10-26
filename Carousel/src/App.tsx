import './App.css'


import {add,delayedAdd} from './Redux/counterReducer'
import {startCarousel,stopCarousel} from './Redux/carouselReducer'
import {appSelector,appDispatch} from './Redux/hooks'
import { useEffect } from 'react';



function App() {
  let carouselState = appSelector((state)=>state.carousel.isTriggered);
  let dispatch = appDispatch();


  // Carousel actions
  const startCarouselAction = ()=>{
    dispatch(startCarousel());
  }
  const stopCarouselAction = ()=>{
    dispatch(stopCarousel());
  }

  return (
    <div className="App">
      <button onClick={startCarouselAction}>Start</button>
      <button onClick={stopCarouselAction}>Stop</button>
      <h3>{carouselState ? 'Running...' : 'Stopped...'}</h3>
    </div>
  )
}

export default App
