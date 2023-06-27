import React, { useState, useContext } from "react";
import data from "./data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const randomYear = data[Math.floor(Math.random() * data.length)];
  const minYear = data[0].year;
  const maxYear = data[data.length - 1].year;

  const [resultYear, setResultYear] = useState(randomYear);
  const [numberYear, setNumberYear] = useState(randomYear.year);

  const findYearObject = (year) => {
    return data.find((item) => item.year === year);
  };

  return (
    <AppContext.Provider
      value={{
        resultYear,
        setResultYear,
        minYear,
        maxYear,
        findYearObject,
        numberYear,
        setNumberYear,
        randomYear,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
