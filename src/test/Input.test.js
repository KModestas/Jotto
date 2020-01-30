import React from "react";
import { shallow, ReactWrapper } from "enzyme";

import { findByTestAttr, storeFactory } from "./testUtils";
import Input, { UnconnectedInput } from "../components/Input";
import { guessWord } from "../redux/actions";

// use console.log(wrapper.debug()) instead of console.log(wrapper)

// .dive() goes deeper into the child components of shallow created virtual DOM
// you can chain these to go one layer deeper
// without dive in this case, you will see Input wrapped in redux's HOC (provided by connect())
const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  // add test store as a prop to test component (mimicks provider in index.js which makes store avaliable to all connected components)
  // depending on if success prop is false or true, different components are rendered. This is what you are testing, not the props itself
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();

  return wrapper;
};

describe("render ", () => {
  describe("word has not been guessed", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: false };
      wrapper = setup(initialState);
    });

    test("renders component without error", () => {
      const component = findByTestAttr(wrapper, "component-input");
      expect(component.length).toBe(1);
    });

    test("renders input box", () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.length).toBe(1);
    });

    test("renders submit button", () => {
      const submitButton = findByTestAttr(wrapper, "submit-button");
      expect(submitButton.length).toBe(1);
    });
  });
  describe("word has been guessed", () => {
    let wrapper;

    beforeEach(() => {
      const initialState = { success: true };
      wrapper = setup(initialState);
    });

    test("renders component without error", () => {
      const component = findByTestAttr(wrapper, "component-input");
      expect(component.length).toBe(1);
    });

    test("does not render input box", () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.length).toBe(0);
    });

    test("does not render submit button", () => {
      const submitButton = findByTestAttr(wrapper, "submit-button");
      expect(submitButton.length).toBe(0);
    });
  });
});

describe("redux props", () => {
  test("has 'success' peice of state as prop", () => {
    // arbitrary value, can be false
    const success = true;

    // in this test we dont use setUp because we only need to dive() once to see the Input props
    const store = storeFactory({ success });
    const wrapper = shallow(<Input store={store} />).dive();

    // props() seems to work on both classical and functional components
    const successProp = wrapper.props().success;

    expect(successProp).toBe(success);
  });

  test("guessWord action creator is a function prop ", () => {
    const store = storeFactory();
    const wrapper = shallow(<Input store={store} />).dive();
    const guessWordProp = wrapper.props().guessWord;
    expect(guessWordProp).toBeInstanceOf(Function);
  });
});

describe("guessWord action creator call", () => {
  let guessWordMock;
  let wrapper;
  const guessedWord = "train";

  beforeEach(() => {
    guessWordMock = jest.fn();
    wrapper = shallow(<UnconnectedInput guessWord={guessWordMock} />);

    // add value to input box by setting state
    wrapper.setState({ currentGuess: guessedWord });

    const submitButton = findByTestAttr(wrapper, "submit-button");
    submitButton.simulate("click", { preventDefault() {} });
  });

  test("runs when submit button is clicked ", () => {
    const guessWordMockCallCount = guessWordMock.mock.calls.length;
    expect(guessWordMockCallCount).toBe(1);
  });

  test("contains input value as argument ", () => {
    // mocks is an array of arrays. Each mock is an array storing arguments
    // get the first argument of the first mock call
    const guessedWordArg = guessWordMock.mock.calls[0][0];
    expect(guessedWordArg).toBe(guessedWord);
  });

  test("input box clears on submit", () => {
    // wrapper.state find the value of any key passed in
    expect(wrapper.state("currentGuess")).toBe("");
  });
});
