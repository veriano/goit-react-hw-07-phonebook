import actions from 'redux/contacts-actions';
import { createReducer, combineReducers } from '@reduxjs/toolkit';

const filter = createReducer('', {
  [actions.filterChange]: (_, { payload }) => payload,
});

export default combineReducers({
  filter,
});

