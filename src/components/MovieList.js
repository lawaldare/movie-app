import React, { Component } from 'react';
import './MovieList.css';
import Movie from './Movie';
import { connect } from 'react-redux';
import { getMovies } from '../actions';
//import Loading from './Loading';

class MovieList extends Component {
  componentDidMount() {
    const { getMovies, moviesLoaded } = this.props;
    if (!moviesLoaded) {
      getMovies();
    }
  }

  render() {
    const { movies, moviesLoaded } = this.props;
    if (!moviesLoaded) return <h1>Loading</h1>;
    return (
      <div className="container">
        {movies.map(movie => (
          <Movie movie={movie} key={movie.id} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies.movies,
    moviesLoaded: state.movies.moviesLoaded
  };
};

export default connect(
  mapStateToProps,
  { getMovies }
)(MovieList);
