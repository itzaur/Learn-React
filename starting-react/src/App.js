// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Person from './Person/Person';

function App() {
  // return (
  //   <div className='App'>
  //     <header className='App-header'>
  //       <img src={logo} className='App-logo' alt='logo' />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className='App-link'
  //         href='https://reactjs.org'
  //         target='_blank'
  //         rel='noopener noreferrer'
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //     <h1>Hello! I'm Preneur</h1>
  //   </div>
  // );

  // return React.createElement(
  //   'div',
  //   { className: 'App' },
  //   React.createElement('h1', null, "I'm a real react project")
  // );
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Ted', age: 35 },
    ],
  });

  console.log(personsState);
  console.log(setPersonsState);

  return (
    <div
      className='App'
      style={{
        margin: 'auto',
        width: 800,
        paddingTop: '1rem',
      }}
    >
      <Person name='Max' age='30' />
      <Person name='Ted' age='35' />
      <Person>some text</Person>
      <button onClick={click}>Text</button>
    </div>
  );
}

function click(e) {
  console.log(e.target);
}

export default App;
