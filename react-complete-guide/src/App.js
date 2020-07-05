import React, { useState } from 'react';
import Person from './Person/Person';
import './App.css';

const app = props => {
  //state is an inside component 
  // smart  container statement 
  const [ personsState, setPersonsState] = useState({
    persons: [
      {name: 'Max', age: 29},
      {name: 'Menu', age: 26}
    ],
    otherState: 'some other value'
  });

  console.log(personsState);

  // it will update the old state
  const switchNameHandler = (newName) => {
    setPersonsState({
      persons: [
      {name: newName, age: 45},
      {name: 'Menu', age: 26}
    ]
    })
  }

   const nameChangedHandler = (event) => {
    setPersonsState({
      persons: [
      {name: event.target.value, age: 145},
      {name: event.target.value, age: 26},
      {name: 'sean', age: 26}
    ]
    })
  }

  
  
 
    return (
      <div className="App">
        <h1>
          Hi, I am React App!
        </h1>
        <p> This is actually work!</p>
        <button
          style = {style} 
          onClick={() => switchNameHandler('maxxxcx!!')}> Switch Name</button>
        <Person 
          name = {personsState.persons[0].name} 
          age = {personsState.persons[0].age} 
          click = {switchNameHandler.bind(this, 'Max!')}
          changed={nameChangedHandler}> My hobby is ... </Person>
        <Person 
          name = "Max2" 
          age = "28" > My Hobbies: Racing </Person>
        <Person 
          name = "Max3" 
          age = "28" />

      </div>
    );
    }



export default app;



