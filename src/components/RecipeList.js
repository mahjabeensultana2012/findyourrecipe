import React, { Component } from 'react';
import { connect } from 'react-redux';

class RecipeList extends Component {
  render() {
    //console.log('this.props', this.props);
    return (
      <div>
        <h2>Recipe List</h2>
        {this.props.recipes.map((recipe, index) => {
          return (
            <div key={index}>
              <h4>{recipe.title}</h4>
            </div>
          );
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
