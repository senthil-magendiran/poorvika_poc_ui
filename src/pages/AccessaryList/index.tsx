import Defect from "components/Defect";
import Heading from "components/Heading";
import SubHeading from "components/SubHeading";
import React, { useContext, useState } from "react";
import { accessories } from "utils/constants";
import appContext from "context/app.context";
import EvaluationInfo from "components/EvaluationInfo";

import './styles.scss'

const AccessoryPage: React.FC = () => {
  const {
    setStep,
    deviceProblems,
    selectedProduct,
    functionalDefects,
    setAccessoryList,
  } = useContext(appContext);

  const [defaultAccessories, setDefaultAccessories] = useState<string[]>([]);

  const accessoriesHandler = (value: boolean, index: number) => {
    const existingItems = [...defaultAccessories];
    existingItems[index] = value ? accessories[index].text : "";
    setDefaultAccessories(existingItems);
  };

  const nextStepHandler = async () => {
    setAccessoryList(defaultAccessories);
    setStep(5);
  };

  return (
    <div className="accessary-list-page columns-2 px-30 w-full flex">
      <div className="accessary-wrap shadow w-4/5 m-3 rounded px-10">
        <Heading text="Do you have the following?" />
        <SubHeading text="See what this means?" />
        <div className="defects-items">
          {accessories?.map((accessory, index) => (
            <Defect
              image={accessory.image}
              text={accessory.text}
              index={index}
              onOptionSelection={accessoriesHandler}
            />
          ))}
        </div>
        <div className="flex justify-center items-center py-5">
          <button
            className="btn btn__primary btn__continue"
            onClick={nextStepHandler}
          >
            Continue &#8594;
          </button>
        </div>
      </div>
      <div className="evaluation-content shadow w-2/5 m-3 rounded py-5">
        <div>
          <div className="flex justify-center items-center border-b py-4">
            <img src={selectedProduct.image} alt="product" className="w-1/5" />
            <h1>{selectedProduct.model}</h1>
          </div>
          <EvaluationInfo title="Device Evaluation" Items={deviceProblems} />
          <EvaluationInfo
            title="Functional Condition"
            Items={functionalDefects}
          />
          <EvaluationInfo
            title="Do you have the following?"
            Items={defaultAccessories}
          />
        </div>
      </div>
    </div>
  );
};

export default AccessoryPage;
