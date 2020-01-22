import checkPropTypes from "check-prop-types";
// checkPropTypes returns  errors from propTypes rather than just console logging them
import { createStore, applyMiddleware } from "redux";

import rootReducer from "../redux/reducers";
import { middleware } from "../redux/store";

// creates a testing store using actual reducers in the app
export const storeFactory = initialState => {
  // create an instance of the store with middleware using the real rootreducer and middleware
  const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
  return createStoreWithMiddleware(rootReducer, initialState);
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
