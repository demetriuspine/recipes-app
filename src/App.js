import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Routes from './Routes';
import store from './redux/store';

function App() {
  return (
    <Provider store={ store }>
      <section className="meals">
        <Routes />
      </section>
    </Provider>
  );
}

export default App;
