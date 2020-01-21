import React from "react";
import "./App.css";
import Congrats from "./congrats/Congrats";
import GuessedWords from "./guessedWords/GuessedWords";

const App = () => (
  <div className="container">
    <h1>Jotto</h1>
    <Congrats success={true} />
    <GuessedWords
      guessedWords={[{ guessedWord: "YOOOO", letterMatchCount: 3 }]}
    />
  </div>
);

export default App;
