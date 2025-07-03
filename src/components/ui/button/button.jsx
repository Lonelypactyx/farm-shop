import React from "react";
import { StyledButton } from "./style";

function Button({ link, maxWidth, className, onClick, children, ...props }) {
  return (
    <StyledButton
      {...props}
      $maxWidth={maxWidth}
      className={className}
      {...(link ? { to: link } : { as: "button", onClick, type: "button" })}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
