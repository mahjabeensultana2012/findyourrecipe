import React, { Component } from 'react';
import SearchRecipes from './SearchRecipes';

class App extends Component {
  render() {
    return (
      <div>
        <h2>Find your Recipe</h2>
        <SearchRecipes />
      </div>
    );
  }
}

export default App;
