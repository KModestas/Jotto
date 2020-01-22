import React from "react";
import "./App.css";
import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";

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
