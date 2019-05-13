import React from 'react';
import {Provider} from 'react-redux';
import {store} from './services/redux/store'
import Login from './components/login/Login';
import Artists from './components/artists/Artists';
import './App.css';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <Login/>
      <br/>
      <Artists/>
    </div>
  </Provider>
);

export default App;
