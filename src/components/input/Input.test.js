import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, storeFactory } from "../../../Test/testUtils";
import Input from "./Input";

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
// console.log(wrapper.debug());

setup();

describe("render ", () => {
  describe("word has not been guessed", () => {
    test("renders component without error", () => {});
    test("renders input box", () => {});
    test("renders submit button", () => {});
  });
  describe("word has been guessed", () => {
    test("renders component without error", () => {});
    test("does not render input box", () => {});
    test("does not render submit button", () => {});
  });
});

describe("update state", () => {});
