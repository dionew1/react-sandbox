import React from 'react';
import '../styles/FoodList.css';
import FoodCard from './FoodCard'

const createFoodCards = (foods) => {
  return foods.map((food) => {
      return (<FoodCard
      key={ food.id }
      food={ food }/>
    )
  })
}

const FoodList = (props) => {
  let foods = props.foods;
  return (
    <div>
      { createFoodCards(foods) }
    </div>
  )
}

export default FoodList;
