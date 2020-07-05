import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}


const user = {
  firstName: 'Sean',
  lastName: 'Xu',
  avatarUrl: 'https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
};

const element = (
  <div>
  <h2 tabIndex = "0">{getGreeting(user)}</h2>
  <h2>You opened yaya at {new Date().toLocaleTimeString()}</h2>
  <img src = {user.avatarUrl}></img>
  </div>
);
ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  element,
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
