import React, { useState } from "react";

import "./styles.scss";

type TDefect = {
  image: string;
  text: string;
  index: number,
  onOptionSelection: (value: boolean, index: number) => void
};

const Defect: React.FC<TDefect> = ({ image, text, index, onOptionSelection }) => {
  const [selected, setSelected] = useState<boolean>(false);
  
  const itemSelectionHandler = () => {
    setSelected(!selected);
    onOptionSelection(!selected, index);
  }


  return (
    <div
      className={
        selected
          ? "defect_selection shadow defect flex flex-col item-center justify-center text-center w-1/4"
          : "shadow defect flex flex-col item-center justify-center text-center p-3 w-1/4"
      }
      onClick={itemSelectionHandler}
    >
      <img src={image} alt="" className="w-15px" />
      <h1 className="defect-hint h-1/4">{text}</h1>
    </div>
  );
};

export default Defect;
