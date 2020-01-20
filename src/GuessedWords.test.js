import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, checkProps } from "../test/testUtils";
import GuessedWords from "./GuessedWords";

const defaultProps = {
  guessedWords: [{ guessedWord: "poo", letterMatchCount: 0 }]
};

const setup = () => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};

test("Does not throw warning with expected props", () => {
  checkProps(GuessedWords, defaultProps);
});
