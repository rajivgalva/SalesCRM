import './App.css';
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import SalesList from './components/SalesList';
import EditSale from './components/EditSale';
import CreateSale from './components/CreateSale';
import Dashboard from './components/Dashboard';

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Router>
      <div className="main_container">
      <div id="left" class="bg-primary">
        <div class="top-left bg-primary">
          <h1 class = "text-white">SALES CRM</h1>
        </div>
        <div class="bottom">
        <nav className="sidebar navbar-dark bg-primary">
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                  <Link to="/" className="nav-link text-white">Dashboard</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/sales" className="nav-link text-white">Sales</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link text-white">Add Sale</Link>
                </li>
              </ul>
            </div>
        </nav>
        </div>
    </div>
    <div id="right"class="bg-dark">
        <div class="top-right bg-danger"></div>
        <div class="bottom bg-dark">
          <Dashboard></Dashboard>

    </div>  
          </div>
      <Route path="/" exact/>
      <Route path="/sales" component={SalesList} />
      <Route path="/edit/:id" component={EditSale} />
      <Route path="/create" component={CreateSale} />
      </div>
    </Router>
    );
  }
}

export default App;
