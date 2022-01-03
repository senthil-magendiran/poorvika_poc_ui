import React from "react";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";


type TQuestion = {
    question: string, 
    hint: string,
    index: number,
    onOptionSelection: (value: boolean, index: number) => void
}

const Questions: React.FC <TQuestion> = ({question, hint, index, onOptionSelection}) => {

  const optionSelectionHandler = (value: string) => onOptionSelection(value === 'Yes', index);






  return (
    <div className="py-5">
      <h1 className="font-normal">
       {question}
      </h1>
      <h2 className="text-gray-400 text-sm py-3">
        {hint}
      </h2>
      <div className="answer-options">
        <RadioGroup row aria-label="answer" name="row-radio-buttons-group" className="columns-2" onChange={(event) => optionSelectionHandler(event.target.value)}>
          <FormControlLabel value="Yes" control={<Radio />} label="Yes" className="w-1/4" />
          <FormControlLabel value="No" control={<Radio />} label="No" className="w-1/4" />
        </RadioGroup>
      </div>
    </div>
  );
};

export default Questions;
