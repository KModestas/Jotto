import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, storeFactory } from "./testUtils";
import Input from "../components/Input";

// use wrapper.debug() instead of console.log()

// .dive() goes deeper into the child components of shallow created virtual DOM
// you can chain these to go one layer deeper
// without dive in this case, you will see Input wrapped in redux's HOC (provided by connect())
const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  // add test store as a prop to test component (mimicks provider in index.js which makes store avaliable to all connected components)
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
    const wrapper = setup({ success });

    // wrapper.instance() === null for functional components because they don't have instances.
    const successProp = wrapper.props().success;
    expect(successProp).toBe(success);
  });
});
