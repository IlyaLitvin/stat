import React, { createContext, useContext, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({});

  const setValues = (value) => {
    setData((prevDate) => ({
      ...prevDate,
      ...value,
    }));
  };

  return (
    <DataContext.Provider value={(data, setValues)}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
