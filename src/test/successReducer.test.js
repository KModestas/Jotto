import { actionTypes } from "../redux/actions";
import successReducer from "../redux/reducers/successReducer";

test("returns default initial state of 'false' when no action is passed", () => {
  // pass in the initial state of the reducer and an action object
  const newState = successReducer(undefined, {});
  expect(newState).toBe(false);
});

test("returns state of true upon recieving an action of type 'CORRECT_GUESS", () => {
  const newState = successReducer(undefined, {
    type: actionTypes.CORRECT_GUESS
  });
  expect(newState).toBe(true);
});

// some recommening skipping unit tests for actions and reducer and just doing intergration tests on the API
