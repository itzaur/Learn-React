import { useEffect, useState } from 'react';

export const People = () => {
  const [people, setPeople] = useState([]);

  const getPeople = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    const data = await response.json();

    setPeople(data);
  };

  useEffect(() => {
    getPeople();
  }, []);

  return (
    <>
      <ul>
        {people.map((person) => {
          return <li key={person.id}>{person.name}</li>;
          //   return <img key={person.id} src={person.url} />;
        })}
      </ul>
    </>
  );
};
