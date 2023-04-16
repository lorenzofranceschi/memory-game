import {
  BACK_CARD,
  CARDS,
  LABELS,
  STATUS_CARD,
  TEXT_TYPE,
} from "../config/variables";

class VariableService {
  getCards() {
    return CARDS;
  }
  getCardsBack() {
    return BACK_CARD;
  }
  getTextType() {
    return TEXT_TYPE;
  }
  getLabels() {
    return LABELS;
  }
  getStuatusCard() {
    return STATUS_CARD;
  }
}

export default new VariableService();
