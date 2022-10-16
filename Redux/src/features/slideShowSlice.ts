import { createSlice } from "@reduxjs/toolkit";

interface IslideShow {
    slideNumber : number;
}


const initialState : IslideShow = {
    slideNumber : 0
}


const slideShowSlice = createSlice({
    name : 'slideShow',
    initialState,
    reducers:{
        nextSlide(state) {
            state.slideNumber +=1;
        }
    }
})

export const {nextSlide} = slideShowSlice.actions;
export const slideShowReducer = slideShowSlice.reducer;