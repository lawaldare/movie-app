import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './MovieList.css';
import Overdrive from 'react-overdrive';

const IMAGE_PATH = 'http://image.tmdb.org/t/p/w154';

const Movie = props => {
  const { title, poster_path, id } = props.movie;

  return (
    <Link to={`/${id}`}>
      <Overdrive id={id}>
        <img src={`${IMAGE_PATH}${poster_path}`} alt={title} />
      </Overdrive>
    </Link>
  );
};

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired
  }).isRequired
};

export default Movie;
