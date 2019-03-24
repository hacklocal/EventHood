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

const users = (state = [], action) => {
  switch (action.type) {
    case "LOAD_USERS":
      return [...action.query];
    default:
      return state;
  }
};

const regions = (state = [], action) => {
  switch (action.type) {
    case "SET_REGIONS":
      return [...action.query];
    default:
      return state;
  }
};

const actualRegion = (state = "", action) => {
  switch (action.type) {
    case "RESET_REGION":
      return "";
    case "SET_REGION":
      return action.region;
    default:
      return state;
  }
};

const reducers = combineReducers({
  events,
  user,
  regions,
  actualRegion
});

export default reducers;
