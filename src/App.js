import React, { Component } from 'react';
import Axios from 'axios';

import logo from './logo.svg';
import './App.css';

import Movie from './components/movies'

// parent class for the app.
class App extends Component {

  // declaring the cosntructor and
  // setting an array withe the name movies.
  constructor() {
    super();
    this.state = { movies: [] }
  };

  // creating a function to hanlde the search form,
  // makes a request to the API using Axios.
  handleSubmit(event) {
    event.preventDefault();

    var formData = this.refs.movieTitle;

    Axios.get(`http://www.omdbapi.com/?s=${formData.value}`)
    .then((response) => {
      this.setState({
        movies: response.data.Search
      })
    })
    .catch((errors) => {
      console.log(error)
    })
  };

  // renders the hmtl body with a Movie component
  render() {
    return (
      <div className="App">
        <h1>Welcome to <img src={logo} className="App-logo" alt="logo" /> all Movies</h1>
        <form id='search-form'  onSubmit={this.handleSubmit.bind(this)} >
          <input ref="movieTitle" type='text' name='title' placeholder='Search by Movie name' /><br/>
          <input type='submit' value='Search'/>
        </form>
        <Movie movies={this.state.movies}/>
      </div>
    );
  };
};

export default App;
