import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
import Experience from './components/Experience.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App clickersCount={4}>
      <section>One</section>
      <section>Two</section>
    </App> */}
    <Experience />
  </React.StrictMode>
);
