import { storeFactory } from "./testUtils";
import { guessWord } from "../redux/actions";

describe("guessWord action dispatcher", () => {
  const secretWord = "party";
  const unsuccesfulGuess = "train";
  describe("no guessed words", () => {
    let store;
    // could you import the actual initialState from your app and use that instead as a more authentic example?
    // is initial state even important in this case? Don't we just need to test the outcome of the state
    const initialState = { secretWord };
    beforeEach(() => {
      store = storeFactory(initialState);
    });
    test("updates state correctly for wrong guess ", () => {
      // dispatch action to update state
      store.dispatch(guessWord(unsuccesfulGuess));
      // get the updated state
      const newState = store.getState();
      // define what you expect the state to be
      const expectedState = {
        ...initialState,
        success: false,
        guessedWords: [
          {
            guessedWord: unsuccesfulGuess,
            letterMatchCount: 3
          }
        ]
      };
      // check if updated state is what you expected (toEqual as objects are mutable)
      expect(newState).toEqual(expectedState);
    });

    test("updates state correctly for right guess ", () => {});
  });

  describe("some guessed words", () => {
    test("updates state correctly for wrong guess ", () => {});
    test("updates state correctly for right guess  ", () => {});
  });
});
