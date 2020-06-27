import React, { useState } from 'react';
import Person from './Person/Person';
import './App.css';

const app = props => {
  //state is an inside component 
  const [ personsState, setPersonsState] = useState({
    persons: [
      {name: 'Max', age: 29},
      {name: 'Menu', age: 26}
    ],
    otherState: 'some other value'
  });

  console.log(personsState);
  
  const switchNameHandler = () => {
    setPersonsState({
      persons: [
      {name: 'Max', age: 33},
      {name: 'Menu', age: 26}
    ]
    });
  };
 

    return (
      <div className="App">
        <h1>
          Hi, I am React App!
        </h1>
        <p> This is actually work!</p>
        <button onClick={switchNameHandler}> Switch Name</button>
        <Person name = {personsState.persons[0].name} age = {personsState.persons[0].age} />
        <Person name = "Max2" age = "28" > My Hobbies: Racing </Person>
        <Person name = "Max3" age = "28" />

      </div>
    );
  }

export default app;



