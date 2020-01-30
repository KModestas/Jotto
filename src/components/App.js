import React, { Component } from "react";
import { connect } from "react-redux";
import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";
import Input from "./Input";
import { getSecretWord } from "../redux/actions";

// export unconnected version to be used in tests (the name matters when destructuring which is why we call it UnconnectedApp, we could call it App theoretically but then we cant call the default version 'App')
export class UnconnectedApp extends Component {
  componentDidMount() {
    this.props.getSecretWord();
  }

  render() {
    return (
      <div className='container'>
        <h1>Jotto</h1>
        <b>Secret Word: {this.props.secretWord}</b>
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

// also export connected version (to be imported as default so we can call it App instead of UnconnectedApp in the imported file)
export default connect(mapStateToProps, { getSecretWord })(UnconnectedApp);
