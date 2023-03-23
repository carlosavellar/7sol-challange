import { createSlice } from '@reduxjs/toolkit';

export const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    isLoading: false,
    message: '',
  },
  reducers: {
    fetchMovies: (state) => {
      state.isLoading = true;
      state.message = '';
    },
    fetchMoviesSuccess: (state, { payload }) => {
      console.log(payload.results);
      state.movies = payload.results;
      state.isLoading = false;
    },
    fetchMoviesReject: (state, { payload }) => {
      state.isLoading = false;
      state.message = payload;
    },
  },
});

export const { fetchMovies, fetchMoviesSuccess, fetchMoviesReject } = moviesSlice.actions;

export default moviesSlice.reducer;
