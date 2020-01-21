import React, { Component } from "react";
import "./App.css";
import Congrats from "./congrats/Congrats";
import GuessedWords from "./guessedWords/GuessedWords";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={true} />
        <GuessedWords
          guessedWords={[{ guessedWord: "YOOOO", letterMatchCount: 3 }]}
        />
      </div>
    );
  }
}

export default App;
