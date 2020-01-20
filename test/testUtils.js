import checkPropTypes from "check-prop-types";
// checkPropTypes returns  errors from propTypes rather than just console logging them

export const findByTestAttr = (wrapper, val) =>
  wrapper.find(`[data-test="${val}"]`);

export const checkProps = (component, expectedProps) => {
  const PropError = checkPropTypes(
    component.propTypes,
    expectedProps,
    "prop",
    component.name
  );
  expect(PropError).toBeUndefined();
};
