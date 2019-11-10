import React, { Component } from 'react';
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
    const url = 'http://www.recipepuppy.com/api/';
    console.log('state', this.state);
  }
  render() {
    return (
      <Form inline>
        <FormGroup>
          <FormLabel>Ingredients</FormLabel>{' '}
          <FormControl
            type="text"
            placeholder="mashroom"
            onChange={event =>
              this.setState({ ingredients: event.target.value })
            }
          />
        </FormGroup>
        {'  '}
        <FormGroup>
          <FormLabel>Dish</FormLabel>{' '}
          <FormControl
            type="text"
            placeholder="pizza"
            onChange={event => this.setState({ dish: event.target.value })}
          />
        </FormGroup>
        {'  '}
        <Button onClick={() => this.search()}>Submit</Button>
      </Form>
    );
  }
}

export default SearchRecipes;
