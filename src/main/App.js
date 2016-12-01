import React, { Component, PropTypes  } from 'react';
import { connect } from 'react-redux';
import * as loanActions from '../actions/loan';
import logo from './logo.svg';
import './App.css';

const actions = Object.assign({}, loanActions);
const selector = state => ({
  loan: state.loan
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

App.propTypes = {
  loan: PropTypes.object.isRequired,
  setDuration: PropTypes.func.isRequired,
  setAmount: PropTypes.func.isRequired
};

const appConnected = connect(selector, actions)(App);
export default appConnected;
