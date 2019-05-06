import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';
import Loading from './Loading';

const IMAGE_PATH = 'http://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

class MovieDetails extends Component {
  state = {
    movie: {}
  };
  async componentDidMount() {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${
          this.props.match.params.id
        }?api_key=e2c9a3d41283d947b045b4c4eba1bbb1&language=en-US`
      );
      this.setState({
        movie: response.data
      });
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  }
  render() {
    const {
      title,
      release_date,
      overview,
      poster_path,
      backdrop_path,
      id
    } = this.state.movie;

    if (!this.state.movie) {
      return <Loading />;
    }

    return (
      <MovieWrapper backdrop={`${BACKDROP_PATH}${backdrop_path}`}>
        <MovieInfo>
          <Overdrive id={id}>
            <img src={`${IMAGE_PATH}${poster_path}`} alt={title} />
          </Overdrive>
          <div>
            <h1>{title}</h1>
            <h3>{release_date}</h3>
            <p className="flow-text">{overview}</p>
          </div>
        </MovieInfo>
      </MovieWrapper>
    );
  }
}

export default MovieDetails;

const MovieWrapper = styled.div`
  position: relative;
  padding-top: 50vh;
  background: url(${props => props.backdrop}) no-repeat;
  background-size: cover;
`;

const MovieInfo = styled.div`
  background: white;
  text-align: left;
  padding: 2rem 10%;
  display: flex;
  > div {
    margin-left: 20px;
  }
  img {
    position: relative;
    top: -5rem;
  }
`;
