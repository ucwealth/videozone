import React, { Component } from 'react';

class Movies extends Component {
  render(){
    return (
      <div >
        {this.props.title && 
          <div>
            <p>Movie Title: {this.props.title}</p>
            <p>Adult Movie: {this.props.adult}</p>
            <p>Release Date: {this.props.releaseDate}</p>
            <p>Description: {this.props.description}</p>
          </div>
        }
      </div>
    );
  }
}

export default Movies;
