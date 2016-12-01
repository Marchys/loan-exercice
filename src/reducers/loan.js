
import { SET_DURATION, SET_AMOUNT } from '../actions/loan';

const initialState = {
  duration: 2,
  maxDuration: 50,
  minDuration: 1,
  amount: 200,
  maxAmount: 300,
  minAmount: 1
};

const loan = (state = initialState, action) => {
  switch (action.type) {
    case SET_DURATION:
      if(action.duration >= state.minDuration && action.duration <= state.maxDuration) {
        return {
        ...state,
          duration: action.duration
        }; 
      }
      return state;
    case SET_AMOUNT:
      if(action.amount >= state.minAmount && action.amount <= state.maxAmount) {
        return {
        ...state,
          amount: action.amount
        }; 
      }
      return state;
    default:
      return state;
  }
};

export default loan;
