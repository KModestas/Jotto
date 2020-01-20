import React from "react";
import PropTypes from "prop-types";

const GuessedWords = props => <div></div>;

// .shape is used to describe an object whose keys may be of different types
// .objectOf is used for objects that have keys of the the same type
GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    })
  ).isRequired
};

export default GuessedWords;
