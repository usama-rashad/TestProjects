import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addNewDoc } from "./firebase";
import axios from "axios";

export interface IPokemonData {
  data: {
    pokemon: { name: string; URL: string };
    slot: number;
  }[];
}

const pokemonDataInit: IPokemonData = { data: [] };

export const getPokemonData = createAsyncThunk("PokeData", async () => {
  let thunk = await axios.get("http://localhost:5000/api/v1/createNewUser");
  return thunk;
});

const pokemonSlice = createSlice({
  name: "doc",
  initialState: pokemonDataInit,
  reducers: {
    reset(state) {
      console.log("Reset...");
    },
  },
  extraReducers(builder) {
    builder.addCase(getPokemonData.pending, () => {
      console.log("Request pending...");
    });
    builder.addCase(getPokemonData.rejected, (state, actions) => {
      console.log("Request rejected...");
    });
    builder.addCase(getPokemonData.fulfilled, (state, actions) => {
      console.log("Request fullfilled...");
      state.data = actions.payload.data.pokemon;
    });
  },
});

export const pokemonReducer = pokemonSlice.reducer;
export const { reset } = pokemonSlice.actions;
