import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import Foodbox from './components/Foodbox';




function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Foodbox />
      </header>
       
       
   
    </div>
  );
}

export default App;
