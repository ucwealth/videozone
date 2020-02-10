import React, { Component } from 'react';

class Form extends Component {
  render(){    
    return (
      <form onSubmit={this.props.getMovie}>
        <input type="text" name="title" placeholder="Enter Movie Name.."/>
        <button type="submit">Get Movie</button>
      </form>
    );
  }
}

export default Form;
