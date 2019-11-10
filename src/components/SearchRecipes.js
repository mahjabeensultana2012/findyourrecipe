import React, {Component} from 'react';
import {Form, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap'

class SearchRecipes extend Component{
  render (){
    return(
      <Form>
        <FormGroup>
          <ControlLabel>Ingredients</ControlLabel>
          <FormControl type= "text" placeholder="mashroom" />>
        </FormGroup>
        {' '}
        <FormGroup>
        <ControlLabel>Dish</ControlLabel>
        <FormControl type= "text" placeholder="pizza" />
        </FormGroup>
      </Form>
    )
  }
}

export default SearchRecipes;
