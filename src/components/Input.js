import React from "react";
import { connect } from "react-redux";
import { guessWord } from "../redux/actions";

export const UnconnectedInput = props => {
  const contents = props.success ? null : (
    <form className="form-inline">
      <input
        data-test="input-box"
        className="mb-2 mx-sm-3"
        type="text"
        placeholder="Enter guess ..."
      />
      <button
        data-test="submit-button"
        className="btn btn-primary mb-2"
        type="submit"
        onClick={() => props.guessWord("train")}
      >
        SUBMIT
      </button>
    </form>
  );
  return <div data-test="component-input">{contents}</div>;
};

const mapStateToProps = ({ success }) => {
  return { success };
};

// passing an object as second argument instead of mapDispatchToProps func because all we need to do is pass guessWord - we dont need to the full utility
export default connect(mapStateToProps, { guessWord })(UnconnectedInput);
