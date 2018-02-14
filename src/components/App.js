import React, { Component } from 'react';
import '../styles/App.css';
import FoodList from './FoodList';
import FoodForm from './FoodForm';
import {getFoods, addFoods} from '../utils/requests'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      foods: []
    }
  }

  componentDidMount() {
      getFoods()
        .then((foods) => this.setState({foods: foods}))
        .catch((error) => console.error({error}))
  }

  render() {
    return (
      <div className="app">
        <h1 className="my-foods-header">Manage Foods</h1>
        <FoodList foods= { this.state.foods }/>
        <FoodForm />
      </div>
    );
  }
}

export default App;
