import React from "react";

export const Button = ({ props, children }) => {
  return (
    <button type="submit" {...props}>
      {children}
    </button>
  );
};
