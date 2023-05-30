import React from 'react';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/navbar';


const App = () => {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda en línea!" />
    </div>
  );
};

export default App;
