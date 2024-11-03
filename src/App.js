
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import ShoppingListDetail from './routes/ShoppingListDetail/ShoppingListDetail';

function App() {
  return (
    <div>
      <h1>Nákupní Seznam</h1>
      <Routes>
        {/* Přesměrování z kořenové URL na stránku shopping-list */}
        <Route path="/" element={<Navigate to="/shopping-list" replace />} />
        {/* Stránka detailu nákupního seznamu */}
        <Route path="/shopping-list" element={<ShoppingListDetail />} />
      </Routes>
    </div>
  );
}

export default App;
