import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import react from 'react'

export interface CarouselType {
    isTriggered : boolean
    isRunning : boolean
    nIntervalID : number
}

const initialState :CarouselType= {
    isTriggered : false,
    isRunning : false,
    nIntervalID : 0
}



export let carouselID : number =0;

const startCarouselTimer  = () : number =>{
    let intervalId = setInterval(()=>{
        console.log("Timer fired...")
      },1000)
    return intervalId;
}

const stopCarouselTimer  = (id:number) =>{
    clearInterval(id);
}

const carouselSlice = createSlice({
    name : 'carousel',
    initialState,
    reducers: {
       startCarousel(state:CarouselType){
        state.isTriggered = true;
        state.nIntervalID = startCarouselTimer();
        console.log("Carousel started...");
       },
       stopCarousel(state:CarouselType){
        state.isTriggered = false;
        stopCarouselTimer(state.nIntervalID);
        console.log("Carousel stopped...");
       } 
    }
})

export const {startCarousel,stopCarousel} = carouselSlice.actions;
export const carouselReducer = carouselSlice.reducer;



