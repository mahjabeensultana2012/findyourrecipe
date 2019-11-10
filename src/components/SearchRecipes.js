import React, { Component } from 'react';
import {
  Form,
  FormGroup,
  FormControl,
  FormLabel,
  Button,
} from 'react-bootstrap';

class SearchRecipes extends Component {
  render() {
    return (
      <Form inline>
        <FormGroup>
          <FormLabel>Ingredients</FormLabel>{' '}
          <FormControl type="text" placeholder="mashroom" />
        </FormGroup>
        {'  '}
        <FormGroup>
          <FormLabel>Dish</FormLabel>{' '}
          <FormControl type="text" placeholder="pizza" />
        </FormGroup>
        {'  '}
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default SearchRecipes;
