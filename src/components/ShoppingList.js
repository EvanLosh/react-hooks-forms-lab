import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react/cjs/react.production.min";
import { v4 as uuid } from "uuid";

function ShoppingList({ items }) {

  // const itemList = items;
  const [itemName, setitemName] = useState('')
  const [itemCategory, setitemCategory] = useState('Produce')
  const [itemList, updateItemList] = useState(items)
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filterString, setFilterString] = useState("");

  function onItemFormChange(event) {
    setitemName(event.target.value)
  }

  function onItemCategoryChange(event) {
    setitemCategory(event.target.value)
  }

  function onFilterCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function onSearchChange(event) {
    setFilterString(event.target.value);
  }

  function onItemFormSubmit(e) {
    e.preventDefault();

    updateItemList((itemList) => {
      return [...itemList, {
        id: uuid(),
        name: itemName,
        category: itemCategory
      }]
    })
   
  }

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
        itemName={itemName}
        onItemFormSubmit={onItemFormSubmit}
        onItemFormChange={onItemFormChange}
        onItemCategoryChange={onItemCategoryChange}
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
