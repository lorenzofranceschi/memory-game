import React from "react";
import "./ButtonField.css";

export default function ButtonField({ title, onClick, className = "" }) {
  return (
    <button
      className={"button" + (className ? " " + className : "")}
      onClick={onClick}
    >
      {title}
    </button>
  );
}
