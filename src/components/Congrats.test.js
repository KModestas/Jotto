import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Congrats from "./Congrats";

Enzyme.configure({ adpater: new EnzymeAdapter() });

test("renders without crashing", () => {});

test("renders no text when 'success' prop is false", () => {});

test("renders non-empty congrats message when 'success' prop is true", () => {});
