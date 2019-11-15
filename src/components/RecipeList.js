import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeItem from './RecipeItem';

class RecipeList extends Component {
  render() {
    //console.log('this.props', this.props);
    return (
      <div>
        {this.props.recipes.map((recipe, index) => {
          return <RecipeItem key={index} recipe={recipe} recipeButton={true} />;
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  //console.log('statezzzz:', state);
  return state;
}

export default connect(
  mapStateToProps,
  null
)(RecipeList);
