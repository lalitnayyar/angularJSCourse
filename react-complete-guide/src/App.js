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
    showPersons: false,
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Max", age: 28 },
        { name: event.target.value, age: 29 },
        { name: "Stephanie", age: 26 },
      ],
    });
  };

  deletePersonalHandler = (personIndex) => { 
    const persons = this.state.persons;
    persons.splice(personIndex,1);
    this.setState({persons: persons});
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    //console.log(doesShow);
    this.setState({ showPersons: !doesShow });
  };
  render() {
    const style = {
      backgroundColor: "blue",
      font: "inherit",
      border: "1x solid yellow",
      padding: "8px",
      cursor: "pointer",
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person,index) => {
            return <Person 
            click={()=>this.deletePersonalHandler(index)}
            name={person.name} 
            age={person.age} />;
          })}
          ;
        </div>
      );
    }

    return (
      <div className="App">
        <h1> I am react app </h1>
        <p>This is really working !!!</p>
        <button style={style} onClick={this.togglePersonHandler}>
          Toggle Person
        </button>
        {persons}
      </div>
    );
    //return React.createElement('div',{className: 'App'},React.createElement('h1',null,' Hi, I\'m a React App !!!'));
  }
}

export default App;
