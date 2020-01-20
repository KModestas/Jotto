import React from "react";

export default props => (
  <div data-test="component-congrats">
    {props.success && (
      <span data-test="congrats-message">
        Congratulations, you guessed the word!
      </span>
    )}
  </div>
);

// <div data-test="component-congrats">CONGRATS</div>;
