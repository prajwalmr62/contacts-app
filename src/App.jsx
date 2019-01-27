/**
 * @author prajwalmr62
 * application entry point.
 */

 // dependency import
import React, { Component } from 'react';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

// app components import
import NavBar from "./components/navbar";
import store from "./store";
import routing from "./pages";

// style import
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavBar></NavBar>
        <div className="container">
          <Router basename="/contacts-app">
            {routing()}
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
