import checkPropTypes from "check-prop-types";
// checkPropTypes returns  errors from propTypes rather than just console logging them
import { createStore } from "redux";

import rootReducer from "../src/redux/reducers";

// creates a testing store using actual reducers in the app
export const storeFactory = initialState => {
  return createStore(rootReducer, initialState);
};

export const findByTestAttr = (wrapper, val) =>
  wrapper.find(`[data-test="${val}"]`);

export const checkProps = (component, expectedProps) => {
  const PropError = checkPropTypes(
    component.propTypes,
    expectedProps,
    "prop",
    component.name
  );
  expect(PropError).toBeUndefined();
};
