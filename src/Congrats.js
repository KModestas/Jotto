import React from "react";
import PropTypes from "prop-types";

const Congrats = props => (
  <div data-test="component-congrats">
    {props.success && (
      <span data-test="congrats-message">
        Congratulations, you guessed the word!
      </span>
    )}
  </div>
);

Congrats.propTypes = {
  success: PropTypes.bool.isRequired
};

export default Congrats;
