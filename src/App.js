import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import MainPage from './components/main/MainPage'
import AboutPage from './components/about/AboutPage'



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/aboutMe" component={AboutPage} />
        </div>
      </Router>
    )
  }
}

export default App;
