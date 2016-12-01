import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as loanActions from '../actions/loan';
import * as locationAction from '../actions/location';
import { Entry, Amount, Duration } from '../components/organisms';
import './App.css';

const actions = Object.assign({}, loanActions, locationAction);
const selector = state => ({
  loan: state.loan,
  location: state.location
});

class App extends Component {
  // replace by router
  getCurrentLocation(location, props) {
    const { loan,
      setAmount,
      setLocationAmount,
      setLocationDuration,
      setDuration } = props;
    switch (location) {
      case 'LOCATION_ENTRY':
        return <Entry setLocation={setLocationAmount} />;
      case 'LOCATION_AMOUNT':
        return <Amount loan={loan} setAmount={setAmount} setLocation={setLocationDuration} />;
      case 'LOCATION_DURATION':
        return <Duration loan={loan}
          setDuration={setDuration}
          setLocationAmount={setLocationAmount}
               />;
      case 'LOCATION_RESULT':
        return <Entry setLocation={setLocationAmount} />;
      default:
        return <Entry setLocation={setLocationAmount} />;
    }
  }

  render() {
    const { location } = this.props;
    return (
      <div className="main">
        {this.getCurrentLocation(location, this.props)}
      </div>
    );
  }
}

App.propTypes = {
  loan: PropTypes.object.isRequired,
  location: PropTypes.string.isRequired,
  setDuration: PropTypes.func.isRequired,
  setAmount: PropTypes.func.isRequired,
  setLocationEntry: PropTypes.func.isRequired,
  setLocationAmount: PropTypes.func.isRequired,
  setLocationDuration: PropTypes.func.isRequired,
  setLocationResult: PropTypes.func.isRequired,
};

const appConnected = connect(selector, actions)(App);
export default appConnected;
