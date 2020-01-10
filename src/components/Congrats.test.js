import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Congrats from "./Congrats";

Enzyme.configure({ adpater: new EnzymeAdapter() });

const setup = (props = {}) => {
  return shallow(<Congrats {...props} />);
};

test("renders without crashing", () => {});

test("renders no text when 'success' prop is false", () => {});

test("renders non-empty congrats message when 'success' prop is true", () => {});
