import { correctGuess, actionTypes } from "../src/redux/actions";

describe("correctGuess", () => {
  test('should return action with type "CORRECT_GUESS"', () => {
    const action = correctGuess();
    expect(action).toEqual({ type: actionTypes.CORRECT_GUESS });
  });
});

// strings are immutable, all methods return a new string
// arrays and objects are mutable dataTypes, therefore using toBe or === doesn't work. You need to use toEqual which compares the contents
// toEqual is deep => compares nested properties and values
