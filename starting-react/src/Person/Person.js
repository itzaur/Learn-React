import React from 'react';

const person = (props) => {
  return (
    <div>
      <h1>
        Hello!!!!!!!! My name is {props.name}. I am {props.age} years old{' '}
        {Math.floor(Math.random() * 30)}
      </h1>
      <p>{props.children}</p>
    </div>
  );
};

export default person;
