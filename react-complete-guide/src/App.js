import React, { useState } from "react";
//import logo from './logo.svg';
import "./App.css";
import Person from "./Person/Person";

const app = (props) => {
  const [personState, setPersonsState] = useState({
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 },
    ],
  });

  const [otherState, setOtherState] = useState("some other value");

  console.log(personState,otherState);
  
  const switchNameHandler = () => {
    //console.log('was Clicked !!!');
    //DONT DO THIS this.state.persons[0].namyoue  = 'Maximilian';
    setPersonsState({
      persons: [
        { name: "Maximilians", age: 29 },
        { name: "Manu", age: 30 },
        { name: "Stephanie", age: 25 },
      ],
      //,lotherState: personState.otherState
    });
  };

  return (
    <div className="App">
      <h1> I am react app </h1>
      <p>This is really working !!!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personState.persons[0].name}
        age={personState.persons[0].age}
      />
      <Person
        name={personState.persons[1].name}
        age={personState.persons[1].age}
      >
        {" "}
        My hobbies : Racing{" "}
      </Person>
      <Person
        name={personState.persons[2].name}
        age={personState.persons[2].age}
      />
    </div>
  );
  //return React.createElement('div',{className: 'App'},React.createElement('h1',null,' Hi, I\'m a React App !!!'));
};

export default app;
