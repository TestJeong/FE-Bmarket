import { combineReducers } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

export const rootReducer = combineReducers({});

const reducer = (state: any, action: any) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    return nextState;
  }
  return rootReducer(state, action);
};

export default reducer;
