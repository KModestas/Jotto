import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";
import Input from "./Input";
import { getSecretWord } from "../redux/actions";

// export unconnected class to be used in tests
export class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={this.props.success} />
        <Input />
        <GuessedWords guessedWords={this.props.guessedWords} />
      </div>
    );
  }
}

const mapStateToProps = ({ success, guessedWords, secretWord }) => {
  return { success, guessedWords, secretWord };
};

// also export connected version
export default connect(mapStateToProps, { getSecretWord })(App);
