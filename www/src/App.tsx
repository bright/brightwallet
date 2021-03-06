import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ROUTE_ROOT } from './routes';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function AppRoutes() {
  return (
    <Router>
      <Switch>
        <Route exact={true} path={ROUTE_ROOT} component={Home} />
      </Switch>
    </Router>
  )
}


function App() {
  return (
    <div className="main">
      <AppRoutes />
    </div>
  )
}

export default App;
