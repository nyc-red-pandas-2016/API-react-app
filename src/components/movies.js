import React, { Component } from 'react';
import Axios from 'axios';

// children class of App class.
export default class Movie extends Component {

  constructor() {
    super();
  };

  // rendering a list of movies names with a poster.
  render() {
      return (
        <div id='movies'>
          <ul>
          {this.props.movies.map((movie,i) =>
          <li id={i} ><a href=""><h2> Movie Title: {movie.Title}</h2></a>
            <img src= {movie.Poster} />
            </li>
          )}
          </ul>
        </div>
    )
  };
};
