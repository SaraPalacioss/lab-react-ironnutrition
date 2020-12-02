import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import Foodbox from './components/Foodbox';




class App extends React.Component {
  state={
    foodsList: foods

  };

render(){
  return (
    <div className="App">
      <header className="App-header">
      <Foodbox 
        foodsList={this.state.foodsList}
        />
      </header>
       
    </div>
  );
}
}

export default App;
