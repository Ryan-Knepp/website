import React from "react";
import "./LinkButton.css";

const LinkButton: React.FC<{ href: string; title: string }> = props => {
  return (
    <a className="link-button" href={props.href} title={props.title}>
      {props.children}
    </a>
  );
};

export default LinkButton;
