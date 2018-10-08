import React from "react";

import "./ReactLink.scss";

export default props => {
  const { className, children, ...rest } = props;
  return <a className={`reactLink ${className}`}>{children}</a>;
};
