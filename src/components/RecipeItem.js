import React, { Component } from 'react';

class ReactItem extends Component {
  render() {
    console.log('AAA:', this.props);
    return (
      <div>
        <h4>{this.props.recipe.title}</h4>
      </div>
    );
  }
}

export default ReactItem;
