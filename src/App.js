import React from "react";
import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      personName: '',
      foodName: '',
      favFoods: []
    }
    this.handleUserInput = this.handleUserInput.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleUserInput(e) {
    console.log(e.target.name)
    this.setState({ [e.target.name]: e.target.value})
  }

  handleClick() {
    const newFavFoods = [...this.state.favFoods];
    newFavFoods.push(this.state.foodName)

    this.setState({ favFoods: newFavFoods, foodName: '' })
  }

  render() {

    const favFoodsMapped = this.state.favFoods.map((food, i) => {
      const taintedFood = 'i touched your ' + food;

      return <p key={i}>{taintedFood}</p>
    });


    return (
      <div className="App">
        {/* <h1>Hello Lovely</h1>
        <h2>Start editing to see some magic happen!</h2> */}

        <input 
          name='personName'
          placeholder='type your name here..'
          onChange={this.handleUserInput} 
        /><br />
        {this.state.personName}
        <br />
        <input 
          value={this.state.foodName}
          name='foodName'
          placeholder='food goes here'
          onChange={this.handleUserInput} 
        />
        <button onClick={this.handleClick}>submit food</button>
        {favFoodsMapped}
      </div>
    );
  }
}

export default App