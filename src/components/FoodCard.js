import React from 'react';
import '../styles/FoodCard.css';

const FoodCard = (props) => {
  const food = props.food;
  return(
    <div className="food-row">
      <p className="food-name">{ food.name }</p>
      <p className="food-name">{ food.calories }</p>
    </div>
  )
}

export default FoodCard
