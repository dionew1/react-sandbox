import React, { Component } from 'react';
import '../styles/FoodForm.css';

class FoodForm extends Component {

  render() {
    return (
      <div className="food-form">
        <h2>Add A Food</h2>
        <form className="add-food-form">
          <input
            className="input"
            type="text"
            placeholder="Food Name"
          />
          <input
            className="input"
            type="number"
            placeholder="Calories"
          />
          <button
            className="add-food-btn"
          >
          </button>
        </form>
      </div>
    );
  }
}

export default FoodForm;
