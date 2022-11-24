import './App.css';
import foodJson from './foods.json';
import React, { useState } from 'react';
import FoodBox from './components/FoodBox/FoodBox';
import AddFoodForm from './components/AddFoodForm/AddFoodForm';
import Search from './components/Search/Search';
import { Button, Divider, Row } from 'antd';

function App() {
  const [food, setFood] = useState(foodJson);
  const [search, setSearch] = useState('');

  const showFood = food.filter((food) => food.name.includes(search));

  function removeFood(foodToRemove) {
    const remainingFood = food.filter((food) => food !== foodToRemove)
    setFood(remainingFood)
  }

  return (
    <div className="App">
      <AddFoodForm setFood={setFood} />
      <Button> Hide Form / Add New Food </Button>
      <Search search={search} setSearch={setSearch} />
      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {showFood.map((foodItem) => {
          return <FoodBox key={foodItem.name} food={foodItem} removeFood={removeFood} />;
        })}
      </Row>
    </div>
  );
}
export default App;
