import React from "react";
import { connect } from "react-redux";
import "./App.css";
import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";
import Input from "./Input";
import { getSecretWord } from "../redux/actions";

const App = ({ success, guessedWords, secretWord }) => (
  <div className="container">
    <h1>Jotto</h1>
    <Congrats success={success} />
    <Input />
    <GuessedWords guessedWords={guessedWords} />
  </div>
);

const mapStateToProps = ({ success, guessedWords, secretWord }) => {
  return { success, guessedWords, secretWord };
};

export default connect(mapStateToProps, { getSecretWord })(App);
