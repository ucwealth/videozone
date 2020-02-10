import React, { Component } from 'react';
import './App.css';
import Movies from './components/movies';
import Form from './components/form';

class App extends Component {
  state = {
    title: undefined,
    adult: undefined,
    releaseDate: undefined,
    description: undefined
}

getMovie = (e) => {
    e.preventDefault();
    const title = e.target.elements.title.value;
    const api = `https://api.themoviedb.org/3/search/movie?api_key=b466c0709aeb3839181a3a77c5a0b0ab&query=${title}`;

    fetch(api)
    .then(response => response.json())
    .then(data => {
      if(title) {
        this.setState({
          title: data.results[0].title,
          adult: data.results[0].adult,
          releaseDate: data.results[0].release_date,
          description: data.results[0].overview
        })
        console.log(data);
      }

    })
    .catch(err => console.log(err));
}
  
  render(){
    const {title, adult, releaseDate, description} = this.state;
    return (
      <div className="App">
        <Form  getMovie={this.getMovie}/>
        <Movies title={title} adult={adult} 
        releaseDate={releaseDate} description={description}
        />

      </div>
    );
  }
}

export default App;
