// ContactContext.jsx
import React, { createContext, useState, useEffect } from "react";

export const contactData = createContext(null);

export const ContactdataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(()=>{
    const savecontact=JSON.parse(sessionStorage.getItem("ved"))
    if(savecontact){
      setData(savecontact)
    }
    
  },[])

  useEffect(()=>{
    sessionStorage.setItem("ved",JSON.stringify(data))

  },[data])
  

  return (
    <contactData.Provider value={{ data, setData }}>
      {children}
    </contactData.Provider>
  );
};
