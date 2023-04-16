import React from "react";
import { useGameInfo } from "../../context/GameContext";
import variableService from "../../services/variableService";
import ButtonField from "../ButtonFieldComponent/ButtonField";
import TextField from "../TextFieldComponent/TextField";

export default function StartMenu({ onStartGame }) {
  const { record, lastAttempt } = useGameInfo();

  return (
    <div className="flex flex-column justify-space-between height-90">
      <div className="flex-1">
        <TextField
          text={variableService.getLabels().TITLE}
          tag={variableService.getTextType().TITLE}
        />
        <div>
          <TextField
            className="mb-0"
            text={variableService.getLabels().ROLES_TITLE}
            tag={variableService.getTextType().SUBTITLE}
          />
          <TextField
            className="mb-0 mt-0"
            text={variableService.getLabels().ROLES}
            tag={variableService.getTextType().SUBTITLE}
          />
        </div>

        <div>
          <TextField
            className="mb-0"
            text={variableService.getLabels().RECORD_TITLE}
            tag={variableService.getTextType().SUBTITLE}
          />
          <div className="flex justify-space-evenly">
            <TextField
              className="mt-0"
              text={record + " " + variableService.getLabels().TURNS}
              tag={variableService.getTextType().PARAGRAPH}
            />
          </div>
        </div>
        <div>
          <TextField
            className="mb-0 mt-0"
            text={variableService.getLabels().LAST_MATCH_TITLE}
            tag={variableService.getTextType().SUBTITLE}
          />
          <div className="flex justify-space-evenly">
            <TextField
              className="mt-0"
              text={lastAttempt + " " + variableService.getLabels().TURNS}
              tag={variableService.getTextType().PARAGRAPH}
            />
          </div>
        </div>
      </div>
      <div className="mb-2">
        <ButtonField
          className="half-width height-100"
          title={variableService.getLabels().START.toUpperCase()}
          onClick={() => {
            onStartGame(true);
          }}
        ></ButtonField>
      </div>
    </div>
  );
}
