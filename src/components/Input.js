import React from "react";
import { connect } from "react-redux";

const Input = props => {
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

export default connect(mapStateToProps)(Input);