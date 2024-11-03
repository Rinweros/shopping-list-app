
import React, { useState } from 'react';
import MemberList from './components/MemberList';
import ItemList from './components/ItemList';
import './ShoppingListDetail.css';
import { shoppingListData as initialData } from './initialData';

const ShoppingListDetail = () => {
  const [shoppingList, setShoppingList] = useState(initialData);

  // Funkce pro přepnutí stavu položky
  const toggleItemResolved = (itemId) => {
    setShoppingList((prevList) => ({
      ...prevList,
      items: prevList.items.map((item) =>
        item.id === itemId ? { ...item, resolved: !item.resolved } : item
      ),
    }));
  };

  return (
    <div className="shopping-list-detail">
      <h2>{shoppingList.name}</h2>
      <MemberList members={shoppingList.members} />
      <ItemList items={shoppingList.items} onToggleItemResolved={toggleItemResolved} />
    </div>
  );
};

export default ShoppingListDetail;
