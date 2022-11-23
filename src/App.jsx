import './App.css';
import foodJson from './foods.json';
import React, { useState } from 'react';
import FoodBox from './components/FoodBox/FoodBox';
import AddFoodForm from './components/AddFoodForm/AddFoodForm';
import Search from './components/Search/Search';

function App() {
  const [food, setFood] = useState(foodJson)
  const [ search, setSearch ] = useState('')



  const showFood = food.filter((food) => food.name.includes(search))

  return <div className="App">
    <Search search={search} setSearch={setSearch} />
  	<AddFoodForm setFood={setFood} />
  {showFood.map((foodItem) => {
    return (<FoodBox key={foodItem.name} food={foodItem} />)
  })}
  </div>;
}
export default App;
