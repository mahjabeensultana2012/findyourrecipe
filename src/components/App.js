import React, { Component } from 'react';
import SearchRecipes from './SearchRecipes';
import RecipeList from './RecipeList';

import '../styles/index.css';

class App extends Component {
  render() {
    return (
      <div>
        <h2>Find your Recipe</h2>
        <SearchRecipes />
        <RecipeList />
      </div>
    );
  }
}

export default App;
