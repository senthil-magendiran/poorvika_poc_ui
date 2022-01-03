import React from "react";
import { IProduct } from "services/interfaces/product.interface";

const defects: string[] = [];

const appState = {
  step: 0,
  setStep: (step: number) => {},
  viewLoginMenu: false,
  setViewLoginMenu: (visibility: boolean) => {},
  isAuthenticated: false,
  setIsAuthenticated: (mode: boolean) => {},
  selectedProduct: {
    _id: "", 
    created_at: "",
    category: "",
    brand: "",
    model: "",
    price: "",
    soldCount: "",
    image: "",
  },
  setSelectedProduct: (product: IProduct) => {},
  deviceProblems: defects, 
  setDeviceProblems: (problems: string[]) => {},
  functionalDefects: defects,
  setFunctionalDefects: (functionalDefeacts: string[]) => {},
  accessoryList: defects,
  setAccessoryList: (accessoryList: string[]) => {},
};

export const appContext = React.createContext(appState);

export default appContext;
