import { useEffect, useMemo, useState } from 'react';
import './App.css';
import { Clicker } from './components/Clicker';
import { Main } from './components/Main';
import { People } from './components/People';

export default function App({ clickersCount, children }) {
  const [hasClicker, setHasClicker] = useState(true);
  const [count, setCount] = useState(
    parseInt(localStorage.getItem('countAll') ?? 0)
  );

  const toggleClickerEvent = () => {
    setHasClicker(!hasClicker);
  };

  const increment = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    localStorage.setItem('countAll', count);
  }, [count]);

  const colors = useMemo(() => {
    const colors = [];

    for (let i = 0; i < clickersCount; i++) {
      colors.push(`hsl(${Math.random() * 360}deg, 100%, 70%)`);
    }

    return colors;
  }, [clickersCount]);

  return (
    <>
      {children}
      <Main />
      {hasClicker && <div>Total count:{count}</div>}

      <button type='button' onClick={toggleClickerEvent}>
        {hasClicker ? 'Hide' : 'Show'} clicker
      </button>
      {hasClicker && (
        <>
          {Array.from({ length: clickersCount }).map((el, i) => {
            return (
              <Clicker
                increment={increment}
                keyName={`count${i}`}
                key={i}
                color={colors[i]}
              />
            );
          })}
        </>
      )}
      {/* {hasClicker && (
        <>
          <Clicker
            increment={increment}
            keyName='countA'
            color={`hsl(${Math.random() * 360}deg, 100%, 70%)`}
          />
          <Clicker
            increment={increment}
            keyName='countB'
            color={`hsl(${Math.random() * 360}deg, 100%, 70%)`}
          />
          <Clicker increment={increment} keyName='countC' />
        </>
      )} */}
      <People />
    </>
  );
}
