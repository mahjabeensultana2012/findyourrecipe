import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setRecipes } from '../actions';
import {
  Form,
  FormGroup,
  FormControl,
  FormLabel,
  Button,
} from 'react-bootstrap';

class SearchRecipes extends Component {
  constructor() {
    super();
    this.state = {
      ingredients: '',
      dish: '',
    };
  }

  search() {
    let { ingredients, dish } = this.state;
    console.log('AAAA:', this.state);
    console.log('BBB:', this.props);
    const url = `http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}`;

    fetch(url, {
      method: 'GET',
    })
      .then(response => response.json())
      //.then(json => console.log('recipes', json));
      .then(json => this.props.setRecipes(json.results));
  }

  render() {
    return (
      <Form inline>
        <FormGroup>
          <FormLabel>Ingredients</FormLabel>
          {'  '}
          <FormControl
            type="text"
            placeholder="mashroom"
            onChange={event =>
              this.setState({ ingredients: event.target.value })
            }
          />
        </FormGroup>
        {'    '}
        <FormGroup>
          <FormLabel>Dish</FormLabel>
          {'  '}
          <FormControl
            type="text"
            placeholder="pizza"
            onChange={event => this.setState({ dish: event.target.value })}
          />
        </FormGroup>
        {'   '}
        <Button onClick={() => this.search()}>Submit</Button>
      </Form>
    );
  }
}

export default connect(
  null,
  { setRecipes }
)(SearchRecipes);
