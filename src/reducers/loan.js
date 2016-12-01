
import { SET_DURATION, SET_AMOUNT } from '../actions/loan';

const initialState = {
  duration: 2,
  amount: 100
};

const loan = (state = initialState, action) => {
  switch (action.type) {
    case SET_DURATION:
      return {
        ...state,
        duration: action.duration
      };
    case SET_AMOUNT:
      return {
        ...state,
        amount: action.amount
      };    
    default:
      return state;
  }
};

export default loan;
