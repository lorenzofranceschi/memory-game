import React, { useEffect, useState } from "react";
import { useGameInfo } from "../../context/GameContext";
import "./Board.css";
import Card from "../CardComponent/Card";
import variableService from "../../services/variableService";

export default function Board() {
  const {
    deck,
    setDeck,
    couplesFound,
    setCouplesFound,
    firstCard,
    setFirstCard,
    secondCard,
    setSecondCard,
    setTurns,
  } = useGameInfo();

  const [disabled, setDisabled] = useState(false);

  //handle the card choice depending on how many deck you clicked
  const handleChoice = (card) => {
    firstCard ? setSecondCard(card) : setFirstCard(card);
  };

  //reset the turn variables
  const resetTurns = () => {
    setFirstCard(null);
    setSecondCard(null);
    setDisabled(false);
  };

  //"it is a match" logic
  //add +1 couples found
  //update the deck with the "selected" variable set to true
  const isMatch = () => {
    setCouplesFound(couplesFound + 1);
    setDeck((_cards) => {
      return _cards.map((card) => {
        if (card.id === firstCard.id) {
          return {
            ...card,
            status: variableService.getStuatusCard().CORRECT,
          };
        } else {
          return card;
        }
      });
    });
    //reset the turn
    resetTurns();
  };

  const checkIfMatch = () => {
    //with disabled true you cannot click the card
    setDisabled(true);
    //if the card id is equal to the porevious choice id
    if (firstCard.id === secondCard.id) {
      //is a match
      isMatch();
    } else {
      //wait 1 sec to reset the turn
      setTimeout(() => resetTurns(), 1000);
    }
    //set next turn
    setTurns((_prev) => _prev + 1);
  };

  const isFlipped = (card) => {
    return (
      card === firstCard ||
      card === secondCard ||
      card.status === variableService.getStuatusCard().CORRECT
    );
  };

  useEffect(() => {
    if (firstCard && secondCard) {
      checkIfMatch();
    }
  }, [firstCard, secondCard]);

  return (
    <div className="board-grid">
      {deck.map((card) => (
        <Card
          card={card}
          handleChoice={handleChoice}
          flipped={isFlipped(card)}
          disabled={disabled}
        ></Card>
      ))}
    </div>
  );
}
