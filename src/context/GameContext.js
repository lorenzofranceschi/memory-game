import React, { createContext, useContext, useState } from "react";

const GameContest = createContext({});

export const GameContestProvider = ({ children }) => {
  const [deck, setDeck] = useState([]);
  const [turns, setTurns] = useState(0);
  const [record, setRecord] = useState(0);
  const [lastAttempt, setLastAttempt] = useState(0);
  const [couplesFound, setCouplesFound] = useState(0);
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);

  return (
    <GameContest.Provider
      value={{
        deck,
        setDeck,
        turns,
        setTurns,
        record,
        setRecord,
        lastAttempt,
        setLastAttempt,
        couplesFound,
        setCouplesFound,
        firstCard,
        setFirstCard,
        secondCard,
        setSecondCard,
      }}
    >
      {children}
    </GameContest.Provider>
  );
};

export const useGameInfo = () => useContext(GameContest);
