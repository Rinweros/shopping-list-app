
import React from 'react';
import './ItemList.css';

const ItemList = ({ items, onToggleItemResolved }) => {
  return (
    <ul className="item-list">
      {items.map((item) => (
        <li
          key={item.id}
          className={item.resolved ? "resolved" : ""}
          onClick={() => onToggleItemResolved(item.id)}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
