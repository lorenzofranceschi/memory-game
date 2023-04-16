import React, { useEffect, useState } from "react";
import variableService from "../../services/variableService";
import "./Card.css";

export default function Card({ card, handleChoice, flipped, disabled }) {
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    setIsCorrect(card.status === variableService.getStuatusCard().CORRECT);
  }, [card]);

  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };
  return (
    <div className={"card"} key={card.key}>
      <div className={flipped ? "flipped" : ""}>
        <img
          className={"front " + (isCorrect ? "correct" : "wrong")}
          src={card.src}
          alt="card front"
        />
        <img
          className={"back " + (isCorrect ? "correct" : "wrong")}
          src={variableService.getCardsBack().src}
          alt="card back"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
