import variableService from "./variableService";

class GameService {
  duplicateAndShuffleArray(myArray) {
    const shuffleCards = [...myArray, ...myArray]
      .sort(() => Math.random() - 0.5)
      .map((element) => ({
        ...element,
        status: variableService.getStuatusCard().WRONG,
        key: Math.random(),
      }));
    return shuffleCards;
  }
}

export default new GameService();
