import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items,onItemsUpdated }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const[search ,setSearch]= useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  function onSearchChange(e){
    setSearch(e.target.value);
  }
  function onItemFormSubmit(newItem){
onItemsUpdated(newItem);
  }

  const itemsToDisplay = items
  .filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  })
  .filter((item) => {
    if(search ==="") {return true;}
    if( item.name.toLowerCase().includes(search.toLowerCase())
    ){return true;}})
    .map((item) => (
      <Item key={item.id} name={item.name} category={item.category} />
     
    ))

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter 
    search={search}
      onCategoryChange={handleCategoryChange}
      onSearchChange= {onSearchChange}/>
      <ul className="Items">
       {itemsToDisplay}
      </ul>
    </div>
  );
}

export default ShoppingList;
