import React, { forwardRef } from "react";

export const Input = forwardRef((props, ref) => {
  return <input {...props} ref={ref} />;
});
