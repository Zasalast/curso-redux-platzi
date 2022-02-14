/* import React from "react"; */
import { SET_ERROR } from "../actions/type";

const logActions = (store) => (next) => (actionInfo) => {
  console.log("disparando", actionInfo);
  next(actionInfo);
};

export default logActions;
export const reportError = (store) => (next) => (actionInfo) => {
  const { action } = actionInfo;
  if (action?.type === SET_ERROR) {
    console.error(action.payload);
  }

  next(actionInfo);
};
