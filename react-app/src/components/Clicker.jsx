import { useEffect, useRef, useState } from 'react';

export const Clicker = (prop) => {
  const { keyName, color = 'cyan', increment } = prop;

  const checkCountState = useRef(true);
  const buttonRef = useRef();

  let [count, setCount] = useState(
    parseInt(localStorage.getItem(keyName) ?? 0)
  );

  //   useEffect(() => {
  //     const savedCount = parseInt(localStorage.getItem('count') ?? 0);

  //     if (checkCountState.current === false) {
  //       checkCountState.current = true;
  //       setCount(savedCount);
  //     }
  //   }, []);

  useEffect(() => {
    console.log('first render');

    return () => {
      if (checkCountState.current === true) {
        checkCountState.current = false;
      } else {
        console.log('dispose component');
        localStorage.removeItem(keyName);
        localStorage.removeItem('countAll');
      }
    };
  }, [keyName]);

  useEffect(() => {
    localStorage.setItem(keyName, count);
  }, [count, keyName]);

  const runCounter = () => {
    setCount(count + 1);
    increment();
  };

  return (
    <>
      <button
        className='btn'
        type='button'
        onClick={runCounter}
        style={{ color }}
        ref={buttonRef}
      >
        Click
      </button>
      <span style={{ color }}>{count}</span>
    </>
  );
};
