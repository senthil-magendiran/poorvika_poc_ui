import Heading from "components/Heading";
import SubHeading from "components/SubHeading";
import React, { useContext, useState } from "react";
import { defects } from "utils/constants";
import Defect from "components/Defect";

import "./styles.scss";
import appContext from "context/app.context";
import EvaluationInfo from "components/EvaluationInfo";

const PhysicalDefectsPage: React.FC = () => {
  const { setStep,deviceProblems, selectedProduct , setFunctionalDefects} = useContext(appContext);

  const [functionalCondition, setFunctionalCondition] = useState<string[]>([]);

  const functionalConditionHandler = (value: boolean, index: number) => {
    const existingItems = [...functionalCondition];
    existingItems[index] = value ? defects[index].text : "";
    setFunctionalCondition(existingItems);
  };


  const nextStepHandler = () => {
    setStep(4);
    setFunctionalDefects(functionalCondition);
  }

  return (
    <div className="columns-2 px-30 w-full flex">
      <div className="shadow w-4/5 m-3 rounded px-10">
        <Heading text="Functional or Physical Problems" />
        <SubHeading text="See what this means?" />
        <div className="defects-items columns-4">
          {defects?.map((defect, index) => (
            <Defect image={defect.image} text={defect.text} index={index} onOptionSelection={functionalConditionHandler} />
          ))}
        </div>
        <div className="flex justify-center items-center py-5">
          <button
            className="btn btn__primary btn__continue"
            onClick={() => nextStepHandler()}
          >
            Continue &#8594;
          </button>
        </div>
      </div>
      <div className="shadow w-2/5 m-3 rounded">
        <div>
          <div className="flex justify-center items-center border-b py-4">
            <img src={selectedProduct.image} alt="product" className="w-1/5" />
            <h1>{selectedProduct.model}</h1>
          </div>
          <EvaluationInfo title="Device Evaluation" Items={deviceProblems}/>
          <EvaluationInfo title="Functional Condition" Items={functionalCondition}/>
        </div>
      </div>
    </div>
  );
};

export default PhysicalDefectsPage;
