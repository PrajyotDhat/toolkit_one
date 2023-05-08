import { configureStore } from "@reduxjs/toolkit";
import { songsReducer, addSong, removeSong } from "./slices/songsSlice";
import { moviesReducer, addMovie, removeMovie } from "./slices/moviesSlice";
import { reset } from "./action";

const store = configureStore({
  reducer: {
    songs: songsReducer,
    movies: moviesReducer
  }
});

export { store, reset, addSong, removeSong, addMovie, removeMovie };



// console.log(songsSlice.actions.addSong("Some Song"));

// const startingState = store.getState();
// console.log(JSON.stringify(startingState));

// store.dispatch(
//    songsSlice.actions.addSong('Some song!')
// );

// const finalState = store.getState();
// console.log(JSON.stringify(finalState));




