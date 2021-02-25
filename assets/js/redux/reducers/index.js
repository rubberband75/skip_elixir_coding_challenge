import { combineReducers } from "redux";
export const base = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers({ base });
