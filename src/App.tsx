import React, { useState } from "react";
import "./App.css";
import LandingPage from "./layouts/LandingPage/";
import appContext from "context/app.context";
import { IProduct } from "services/interfaces/product.interface";

const App: React.FC = () => {
  const [step, setStep] = useState(0);
  const [viewLoginMenu, setViewLoginMenu] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<IProduct>({
    _id: "",
    created_at: "",
    category: "",
    brand: "",
    model: "",
    price: "",
    soldCount: "",
    image: "",
  });

  const [deviceProblems, setDeviceProblems] = useState<string[]>([]);
  const [functionalDefects, setFunctionalDefects] = useState<string[]>([]);
  const [accessoryList, setAccessoryList] = useState<string[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const contextItems = {
    step,
    setStep,
    viewLoginMenu,
    setViewLoginMenu,
    selectedProduct,
    setSelectedProduct,
    deviceProblems,
    setDeviceProblems,
    functionalDefects,
    setFunctionalDefects,
    accessoryList,
    setAccessoryList,
    isAuthenticated, 
    setIsAuthenticated
  };

  return (
    <div>
      <appContext.Provider value={contextItems}>
        <LandingPage />
      </appContext.Provider>
    </div>
  );
};

export default App;
