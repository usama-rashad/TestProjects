import React, { useEffect, useState } from 'react'
import './CarouselTimer.css'


/*
 This timer triggers an output flag once an interval of 'interval' seconds 
 has passed. Note that the interval is only a rough amount of time, since the 
 browser may place the timer into "sleep" when not in focus.
 */

type timerProps = {
    interval : number;
    output : ()=>void;
}

function CarouselTimer(props:timerProps) {
    const [intervalSeconds,setIntervalSeconds] = useState(0);
    const [seconds,setSeconds] = useState(0);
    const [timeout,setTimeout] = useState(false);

    let timer:NodeJS.Timer;
    useEffect(()=>{
        timer = setInterval(()=>{
                let secondsSinceEpoch = Date.now();
                if(seconds != secondsSinceEpoch)
                {
                    setSeconds(secondsSinceEpoch);
                    setIntervalSeconds(intervalSeconds+1);
                    setTimeout(false);
                }
                if(intervalSeconds>= props.interval)
                {
                    setSeconds(0);
                    setIntervalSeconds(0);
                    setTimeout(true);
                    props.output();           
                    console.log("Timer fired.")      
                }                              
        },1000)


        // Un-mount the previous timer instance
        return (()=>{
            clearInterval(timer);
        })
    })



  return (
    <div className='timer__Main'>
        <div className="timer__time">
            <div className='timer__Title'>            
                {timeout? (<div className='greenCircle'></div>) : (<div className='redCircle'></div>)}
                <h1>Timer {props.interval} s</h1>
            </div>
            <h1>{(intervalSeconds<10)?("0"+intervalSeconds):(intervalSeconds)}</h1>
        </div>
    </div>
  )
}

export default CarouselTimer