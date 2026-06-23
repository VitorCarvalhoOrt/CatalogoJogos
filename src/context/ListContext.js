import React, { createContext, useContext, useState } from 'react';

const ListContext = createContext(null);

export function ListProvider({ children }) {
  const [lista, setLista] = useState([]);

  function addItem(item) {
    setLista(prev => [...prev, item]);
  }

  function removeItem(id) {
    setLista(prev => prev.filter(i => i.id !== id));
  }

  return (
    <ListContext.Provider value={{ lista, addItem, removeItem }}>
      {children}
    </ListContext.Provider>
  );
}

export function useList() {
  const ctx = useContext(ListContext);
  if (!ctx) throw new Error('useList must be used within ListProvider');
  return ctx;
}
