import React from "react";
import Button from "@mui/material/Button";
import { bool, func, node, string } from "prop-types";
import { memo } from "react";

const styledColor = {
  color:"red"
}

const FormButton = ({
  variant, // string - contained
  size, // string - medium
  color, // string - green
  onClick, // func
  disabled, // bool - false
  node: children // node
}) => {
  return (
    <Button style={styledColor}
      variant={variant}
      size={size}
    
      onClick={onClick}
      disabled={disabled}
      fullWidth
    >
      {children}
    </Button>
  );
};

FormButton.propTypes = {
  variant: string.isRequired,
  size: string.isRequired,
  color: string.isRequired,
  onClick: func.isRequired,
  disabled: bool.isRequired,
  node: node.isRequired,
};

FormButton.defaultProps = {
  variant: "contained",
  size: "medium",
  color: "green",
  disabled: false,
};

export default memo(FormButton);
