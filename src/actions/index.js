import axios from 'axios';

export const GET_MOVIES = 'get-movies';
export const GET_MOVIE = 'get-movie';

export const getMovies = () => async dispatch => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/discover/movie?api_key=e2c9a3d41283d947b045b4c4eba1bbb1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'
  );
  dispatch({
    type: GET_MOVIES,
    payload: response
  });
};

export const getMovie = id => {
  const response = axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=e2c9a3d41283d947b045b4c4eba1bbb1&language=en-US`
  );
  return {
    type: GET_MOVIE,
    payload: response
  };
};
