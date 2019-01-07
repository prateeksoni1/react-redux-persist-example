import { combineReducers } from "redux";

const countReducer = (count = 0, action) => {
  console.log("reducer called", count);
  switch (action.type) {
    case "INCREMENT":
      return count + 1;
    default:
      return count;
  }
};

export default combineReducers({ count: countReducer });
