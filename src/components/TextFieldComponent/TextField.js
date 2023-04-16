import React from "react";
import variableService from "../../services/variableService";

export default function TextField({ text, tag, className }) {
  switch (tag) {
    case variableService.getTextType().TITLE:
      return <h1 className={className}>{text}</h1>;
    case variableService.getTextType().SUBTITLE:
      return <h4 className={className}>{text}</h4>;
    case variableService.getTextType().GAMEINFO:
      return (
        <p
          className={className ? "font-gameinfo " + className : "font-gameinfo"}
        >
          {text}
        </p>
      );
    case variableService.getTextType().PARAGRAPH:
      return <p className={className}>{text}</p>;
    default:
      return <p className={className}>{text}</p>;
  }
}
