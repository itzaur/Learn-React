import { useState } from 'react';

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

export default function App() {
  return (
    <>
      <Steps />
      <Counter />
    </>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handleNext() {
    if (step < messages.length) setStep((curStep) => curStep + 1);
  }

  function handlePrev() {
    if (step > 1) setStep((curStep) => curStep - 1);
  }

  return (
    <>
      <button className='close' onClick={() => setIsOpen((open) => !open)}>
        &times;
      </button>

      {isOpen && (
        <div className='steps'>
          <div className='numbers'>
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step >= messages.length ? 'active' : ''}>3</div>
          </div>

          <p className='message'>
            Step {step}: {messages[step - 1]}
          </p>

          <div className='buttons'>
            <button className='previous' onClick={handlePrev}>
              Previous
            </button>
            <button className='next' onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function Counter() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <>
      <button className='close' onClick={() => setIsOpen((open) => !open)}>
        &times;
      </button>

      {isOpen && (
        <div
          className='steps'
          style={{ display: 'grid', placeItems: 'center', gap: '2rem' }}
        >
          <div style={{ display: 'flex' }}>
            <button onClick={() => setStep((prev) => prev - 1)}>-</button>
            <p>Step : {step}</p>
            <button onClick={() => setStep((prev) => prev + 1)}>+</button>
          </div>

          <div style={{ display: 'flex' }}>
            <button onClick={() => setCount((prevCount) => prevCount - step)}>
              -
            </button>
            <p>Count: {count}</p>
            <button onClick={() => setCount((prevCount) => prevCount + step)}>
              +
            </button>
          </div>

          <div>
            <span>
              {(() => {
                switch (true) {
                  case count === 0:
                    return 'Today is ';
                  case count > 0:
                    return `${count} days from today is `;
                  default:
                    return `${Math.abs(count)} days ago was `;
                }
              })()}
            </span>
            <span>{date.toDateString()}</span>
          </div>
        </div>
      )}
    </>
  );
}
