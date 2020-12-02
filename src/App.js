import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import Search from './components/Search';

class App extends React.Component {
  state = {
    food: [...foods],
    searchedWord: '',
    temporalNewFood: { name: '', calories: '', image: '', quantity: 0 },
    showForm: false,
  };

  changeSearchedWord = (_value) => {
    this.setState({ searchedWord: _value });
  };

  checkForIncludedFood = () => {
    const filteredFoods = this.state.food.filter((food) => {
      return food.name
        .toLowerCase()
        .includes(this.state.searchedWord.toLowerCase());
    });
    return filteredFoods;
  };

  renderFood = () => {
    const finalArrayOfFoods = this.checkForIncludedFood();
    return finalArrayOfFoods.map((food, index) => {
      return (
        <FoodBox
          key={index}
          name={food.name}
          calories={food.calories}
          image={food.image}
          quantity={food.quantity}
        />
      );
    });
  };

  submitForm = (event) => {
    event.preventDefault();
    const copyOfFoods = [...this.state.food];
    copyOfFoods.unshift(this.state.temporalNewFood);

    this.setState({ food: copyOfFoods, showForm: false });
  };



  renderForm = () => {
    return (
      <form onSubmit={this.submitForm}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          onChange={(event) =>
            this.setState({
              temporalNewFood: {
                ...this.state.temporalNewFood,
                name: event.target.value,
              },
            })
          }
        />

        <label htmlFor="calories">Calories: </label>
        <input
          type="text"
          name="calories"
          onChange={(event) =>
            this.setState({
              temporalNewFood: {
                ...this.state.temporalNewFood,
                calories: event.target.value,
              },
            })
          }
        />

        <label htmlFor="image">Image: </label>
        <input
          type="text"
          name="image"
          onChange={(event) =>
            this.setState({
              temporalNewFood: {
                ...this.state.temporalNewFood,
                image: event.target.value,
              },
            })
          }
        />

        <button type="submit">Create</button>
      </form>
    );
  };

 
  render() {
    return (
      <div className="App">
        <button onClick={() => this.setState({ showForm: true })}>
          Add new food
        </button>

        {this.state.showForm && this.renderForm()}

        <Search changeSearchedWord={this.changeSearchedWord} />
        <div className="columns">
          <div className="column">{this.renderFood()}</div>
          <div className="column">
            <h2>Today's foods</h2>
            <ul>
              <li>{this.calories} {this.name}</li>
            </ul>
            <p>Total: ___ cal</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
