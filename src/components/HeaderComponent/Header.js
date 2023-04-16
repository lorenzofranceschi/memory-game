import React, { useEffect, useState } from "react";
import { useGameInfo } from "../../context/GameContext";
import TextField from "../TextFieldComponent/TextField";
import variableService from "../../services/variableService";
import ButtonField from "../ButtonFieldComponent/ButtonField";

export default function Header({ onRestartGame }) {
  const { couplesFound, turns, setLastAttempt, setRecord } = useGameInfo();

  //check if you win when a couple is found
  useEffect(() => {
    if (couplesFound === variableService.getCards().length) {
      let old_record = window.sessionStorage.getItem("record") || 1000;

      if (old_record >= turns) {
        window.sessionStorage.setItem("record", turns);
        setRecord(turns);
      }

      window.sessionStorage.setItem("last attempt", turns);
      setLastAttempt(turns);
      onRestartGame(false);
    }
  }, [couplesFound]);

  return (
    <div className="header flex justify-space-between">
      <div className="align-self-center flex  flex-1">
        <ButtonField title={"BACK"} onClick={() => onRestartGame(false)} />
      </div>
      <TextField
        className={"mt-2 flex-1"}
        text={variableService.getLabels().GAME_TITLE.toUpperCase()}
        tag={variableService.getTextType().TITLE}
      />
      <div className={"align-self-center flex-1"}>
        <div className="text-align-right">
          <TextField
            className={""}
            text={
              variableService.getLabels().NUM_COUPLES +
              ": " +
              couplesFound +
              "/" +
              variableService.getCards().length
            }
            tag={variableService.getTextType().GAMEINFO}
          />
          <TextField
            className={""}
            text={variableService.getLabels().NUM_TURN + ": " + turns}
            tag={variableService.getTextType().GAMEINFO}
          />
        </div>
      </div>
    </div>
  );
}
