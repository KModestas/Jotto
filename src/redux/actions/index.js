export const actionTypes = {
  CORRECT_GUESS: "CORRECT_GUESS",
  GUESS_WORD: "GUESS_WORD"
};

export const guessWord = guessedWord => {
  return (dispatch, getState) => {};
};

export const correctGuess = () => {
  return {
    type: actionTypes.CORRECT_GUESS
  };
};
