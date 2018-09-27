import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './HomePage';
import NavBar from './header/NavBar';
import Footer from './footer/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <HomePage />
          <Footer />
        </div>
      </Router>
    )
  }
}
export default App;
