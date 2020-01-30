import React from "react";
import { shallow } from "enzyme";
import { storeFactory } from "./testUtils";
import App, { UnconnectedApp } from "../components/App";

const setup = (state = {}) => {
  const store = storeFactory(state);
  const wrapper = shallow(<App store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe("redux properties", () => {
  test("has access to success state", () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });
  test("has access to secretWord state", () => {
    const secretWord = "party";
    const wrapper = setup({ secretWord });
    const secretWordProp = wrapper.instance().props.secretWord;
    expect(secretWordProp).toBe(secretWord);
  });
  test("has access to guessedWords state", () => {
    const guessedWords = [{ guessedWord: "train", letterMatchCount: 3 }];
    const wrapper = setup({ guessedWords });
    const guessWordsProp = wrapper.instance().props.guessedWords;
    expect(guessWordsProp).toEqual(guessedWords);
  });
  test("getSecretWord function exists in props", () => {
    const wrapper = setup();
    const getSecretWordProp = wrapper.instance().props.getSecretWord;
    expect(getSecretWordProp).toBeInstanceOf(Function);
  });
});

test("getSecretWord func runs on App mount ", () => {
  // set up a mock function
  const getSecretWordMock = jest.fn();
  // prevent propType errors
  const props = {
    getSecretWord: getSecretWordMock,
    success: false,
    guessedWords: []
  };

  // pass mock function to unconnected version of App component (we dont want redux connect, we want to explitly pass the mock function)
  const wrapper = shallow(<UnconnectedApp {...props} />);
  // explicitly call componentDidMount
  wrapper.instance().componentDidMount();
  // calls is an array so length tells you how many calls were made
  const getSecretWordCallCount = getSecretWordMock.mock.calls.length;
  expect(getSecretWordCallCount).toBe(1);
});
