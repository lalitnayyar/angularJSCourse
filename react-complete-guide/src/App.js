import React, { Component } from "react";
//import logo from './logo.svg';
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 },
    ],
    otherState: "some other value",
  };

  switchNameHandler = (newName) => {
    //console.log('was Clicked !!!');
    //DONT DO THIS this.state.persons[0].name  = 'Maximilian';
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Manu", age: 29 },
        { name: "Stephanie", age: 25 },
      ],
    });
  };
  render() {
    return (
      <div className="App">
        <h1> I am react app </h1>
        <p>This is really working !!!</p>
        <button onClick={this.switchNameHandler.bind(this,'Maximillion')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
         click={this.switchNameHandler.bind(this,'Maxi!!!!!')}>
          {" "}
          My hobbies : Racing{" "}
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
    //return React.createElement('div',{className: 'App'},React.createElement('h1',null,' Hi, I\'m a React App !!!'));
  }
}

export default App;
