import React, { Component } from 'react';
import FoodForm from './FoodForm';
import FoodList from './FoodList';
import { getFoods } from '../utils/requests';
import '../styles/App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      foods: []
    }
  }

  updateFoods = (name, calories) => {
    this.setState({ foods: [...this.state.foods, { name, calories }] })
  }

  componentDidMount() {
    getFoods()
      .then((foods) => this.setState({ foods }))
      .catch((error) => console.error({ error }))
  }

  render() {
    return (
      <div className="app">
        <h1 className="my-foods-header">Manage Foods</h1>
        <FoodList foods={ this.state.foods } />
        <FoodForm updateFoods={ this.updateFoods } />
      </div>
    );
  }
}

export default App;
