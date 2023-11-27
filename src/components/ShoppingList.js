import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react/cjs/react.production.min";
import { v4 as uuid } from "uuid";

function ShoppingList({ items }) {

  // states and handlers for ItemForm compnent
  // const [itemName, setitemName] = useState('')
  // const [itemCategory, setitemCategory] = useState('Produce')

  // function onItemFormChange(event) {
  //   setitemName(event.target.value)
  // }

  // function onItemCategoryChange(event) {
  //   setitemCategory(event.target.value)
  // }

  // states and handlers for Filter compnent
  const [itemList, setItemList] = useState(items)
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filterString, setFilterString] = useState("");

  function onFilterCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function onSearchChange(event) {
    setFilterString(event.target.value);
  }

  function onItemFormSubmit(itemToAdd) {
    setItemList((itemList) => {
      return [...itemList, itemToAdd]
    }
    )
  }

  // create an array of JSX 
  const itemsToDisplay = itemList.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  })
    .filter((item) => {
      return (item.name.includes(filterString));
    });

  return (
    <div className="ShoppingList">
      <ItemForm
        onItemFormSubmit={onItemFormSubmit}
      />
      <Filter
        search={filterString}
        onFilterCategoryChange={onFilterCategoryChange}
        onSearchChange={onSearchChange}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
