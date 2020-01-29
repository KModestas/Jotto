import moxios from "moxios";
import { storeFactory } from "./testUtils";
import { guessWord, getSecretWord } from "../redux/actions";

// these integration tests are testing the action creators AND reducers

describe("guessWord action dispatcher", () => {
  const secretWord = "party";
  const wrongGuess = "train";
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
      store.dispatch(guessWord(wrongGuess));
      // get the updated state
      const newState = store.getState();
      // define what you expect the state to be
      const expectedState = {
        // try changing order of properties to see if it fails
        ...initialState,
        success: false,
        guessedWords: [{ guessedWord: wrongGuess, letterMatchCount: 3 }]
      };

      // check if updated state is what you expected (toEqual as objects are mutable)
      expect(newState).toEqual(expectedState);
    });

    test("updates state correctly for right guess ", () => {
      store.dispatch(guessWord(secretWord));
      const newState = store.getState();
      const expectedState = {
        secretWord,
        success: true,
        guessedWords: [{ guessedWord: secretWord, letterMatchCount: 5 }]
      };
      expect(newState).toEqual(expectedState);
    });
  });

  describe("some guessed words", () => {
    const guessedWords = [{ guessedWord: "agile", letterMatchCount: 1 }];
    const initialState = { guessedWords, secretWord };
    let store;
    beforeEach(() => {
      store = storeFactory(initialState);
    });
    test("updates state correctly for wrong guess ", () => {
      store.dispatch(guessWord(wrongGuess));
      const newState = store.getState();
      const expectedState = {
        secretWord,
        success: false,
        guessedWords: [
          ...guessedWords,
          { guessedWord: wrongGuess, letterMatchCount: 3 }
        ]
      };
      expect(newState).toEqual(expectedState);
    });
    test("updates state correctly for right guess  ", () => {
      store.dispatch(guessWord(secretWord));
      const newState = store.getState();
      const expectedState = {
        secretWord,
        success: true,
        guessedWords: [
          ...guessedWords,
          { guessedWord: secretWord, letterMatchCount: 5 }
        ]
      };
      expect(newState).toEqual(expectedState);
    });
  });
});

describe("getSecretWord action creator", () => {
  beforeEach(() => {
    // tells axios to use moxios instead of Http (by configuring its adapter)
    moxios.install();
  });
  afterEach(() => {
    // revert axios back to normal
    moxios.uninstall();
  });
  test("adds response word to state", () => {
    const secretWord = "party";
    const store = storeFactory();

    // tells moxios how to respons when axios sends it a request
    // if you had an axios instance, it would be passed as an arg to wait()
    moxios.wait(() => {
      // get the most recent request (request to random word server)
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: secretWord
      });
    });

    // a promise is being returned from getSecreWord() which can be chained with then()
    // IMPORTANT - make sure to return this so that test doesnt complete first before promise is resolved
    return store.dispatch(getSecretWord()).then(() => {
      const newState = store.getState();
      expect(newState.secretWord).toBe(secretWord);
    });
  });
});
