import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [itemName, setitemName] = useState('')
  const [itemCategory, setitemCategory] = useState('Produce')

  function onItemFormChange(event) {
    setitemName(event.target.value)
  }

  function onItemCategoryChange(event) {
    setitemCategory(event.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    // pass an object to onItemFormSubmit
    onItemFormSubmit(
      {
        id: uuid(),
        name: itemName,
        category: itemCategory
      })
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={itemName} onChange={onItemFormChange} />
      </label>

      <label>
        Category:
        <select name="category" onChange={onItemCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" >Add to List</button>
    </form>
  );
}

export default ItemForm;
