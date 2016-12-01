import {
  SET_LOCATION_ENTRY,
  SET_LOCATION_AMOUNT,
  SET_LOCATION_DURATION,
  SET_LOCATION_RESULT
} from '../actions/location';

const initialState = 'LOCATION_ENTRY';

const location = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOCATION_ENTRY:
      return 'LOCATION_ENTRY';
    case SET_LOCATION_AMOUNT:
      return 'LOCATION_AMOUNT';
    case SET_LOCATION_DURATION:
      return 'LOCATION_DURATION';
    case SET_LOCATION_RESULT:
      return 'LOCATION_RESULT';
    default:
      return state;
  }
};

export default location;
