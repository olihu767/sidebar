import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateDashboard from './pages/CreateDashboard';
import Dashboards from './pages/Dashboards';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/CreateDashboard' component={CreateDashboard} />
          <Route path='/Dashboards' component={Dashboards} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
