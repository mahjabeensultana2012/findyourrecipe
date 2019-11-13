import React, { Component } from 'react';

class ReactItem extends Component {
  render() {
    console.log('AAA:', this.props);
    let { recipe } = this.props;
    return (
      <div>
        <a href={recipe.href}>
          <h4>{recipe.title}</h4>
        </a>
      </div>
    );
  }
}

export default ReactItem;
