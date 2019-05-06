import { GET_MOVIES, GET_MOVIE } from '../actions';

const initialState = {
  movie: {},
  movieLoaded: false,
  movies: [],
  moviesLoaded: false
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: payload.data.results,
        moviesLoaded: true
      };
    case GET_MOVIE:
      return {
        ...state,
        movie: payload.data
      };
    default:
      return state;
  }
}
