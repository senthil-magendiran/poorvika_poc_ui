import React, { useContext, useState } from "react";

import Questions from "components/Questions";
import { deviceQuestions } from "utils/constants";
import Heading from "components/Heading";
import SubHeading from "components/SubHeading";
import appContext from "context/app.context";
import EvaluationInfo from "components/EvaluationInfo";

const DeviceEvaluationPage: React.FC = () => {
  const { setStep, selectedProduct, setDeviceProblems } = useContext(appContext);
  const [evaluationPoints, setEvaluationPoints] = useState<string[]>([]);


  const deviceInformationHandler = (value: boolean, index: number) => {
    const existingItems = [...evaluationPoints]
    existingItems[index] = value ? deviceQuestions[index].positive : deviceQuestions[index].negative;
    setEvaluationPoints(existingItems);
  };

  const nextStepHandler = () => {
    setDeviceProblems(evaluationPoints);
    setStep(3)
  }

  return (
    <div className="columns-2 px-30 w-full flex">
      <div className="shadow w-4/5 m-3 rounded px-10">
        <Heading text="Tell us a few things about your device!" />
        <SubHeading text="See what this means?" />
        {deviceQuestions?.map((item, index) => (
          <Questions
            question={`${index + 1}. ${item.question}`}
            index={index}
            hint={item.hint}
            onOptionSelection={deviceInformationHandler}
          />
        ))}
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
          <EvaluationInfo title="Device Evaluation" Items={evaluationPoints}></EvaluationInfo>
        </div>
      </div>
    </div>
  );
};

export default DeviceEvaluationPage;
