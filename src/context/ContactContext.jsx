// ContactContext.jsx
import React, { createContext, useState } from "react";

export const contactData = createContext(null);

export const ContactdataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  return (
    <contactData.Provider value={{ data, setData }}>
      {children}
    </contactData.Provider>
  );
};
