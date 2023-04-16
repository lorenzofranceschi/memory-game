import { createContext, useState } from "react";
import "./App.css";
import Board from "./components/BoardCompoent/Board";
import Header from "./components/HeaderComponent/Header";
import PageContent from "./components/PageContentComponent/PageContent";
import StartMenu from "./components/StartMenuComponent/StartMenu";
import { useGameInfo } from "./context/GameContext";
import gameService from "./services/gameService";
import variableService from "./services/variableService";

export const GameContext = createContext();

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const { setDeck, setTurns, setCouplesFound, setFirstCard, setSecondCard } =
    useGameInfo();

  //initialize  game
  const initGame = () => {
    setDeck(gameService.duplicateAndShuffleArray(variableService.getCards()));
    setCouplesFound(0);
    setTurns(0);
    setFirstCard(null);
    setSecondCard(null);
  };

  //choose which page open
  const handleOnClick = (val) => {
    initGame();
    setGameStarted(val);
  };

  return (
    <PageContent>
      {!gameStarted && <StartMenu onStartGame={handleOnClick} />}
      {gameStarted && (
        <>
          <Header onRestartGame={handleOnClick} />
          <Board />
        </>
      )}
    </PageContent>
  );
}

export default App;
