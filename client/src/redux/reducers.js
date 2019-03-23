import { combineReducers } from "redux";

const events = (state = [], action) => {
  switch (action.type) {
    case "ADD_EVENT":
      return [...state, action.event];
    case "LOAD_EVENTS":
      return [...action.events];
    default:
      return state;
  }
};

const user = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const reducers = combineReducers({
  events,
  user
});

export default reducers;
