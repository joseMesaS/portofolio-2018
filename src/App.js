import React, { Component } from 'react';
import './App.css';

import MainPage from './components/main/MainPage'
import AboutPage from './components/about/AboutPage'

import styled from 'styled-components'
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

import Transitions from './transitions'

const history = createHistory()


class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Route
          render={({ location }) => (
            <div>
              <Transitions pageKey={location.key} {...location.state}>
                <Switch location={location}>
                  <Route exact path="/" component={MainPage} />
                  <Route exact path="/aboutMe" component={AboutPage} />
                </Switch>
              </Transitions>
            </div>
          )}
        />
      </Router>
    )
  }
}

export default App;
