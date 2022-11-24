import React, { useState } from "react";
import { Divider, Input } from 'antd';

// Iteration 4
function AddFoodForm({setFood}) {
    const [ name, setName ] = useState('')
    const [ image, setImage ] = useState('')
    const [ calories, setCalories ] = useState('')
    const [ servings, setServings ] = useState('')

    function handleSubmit(event) {
        event.preventDefault()
        setFood((currentState) => {
            const copy = [...currentState]
            copy.unshift({name, image, calories, servings})
            return copy
        })
    }


  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} type="text" onChange={(e) => {setName(e.target.value)}} />

      <label>Image</label>
        <Input type='text' value={image} onChange={(e) => {setImage(e.target.value)}} />

      <label>Calories</label>
      <Input type='number' value={calories} onChange={(e) => {setCalories(e.target.value)}} />

      <label>Servings</label>
      <Input type='number' value={servings} onChange={(e) => {setServings(e.target.value)}} />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
