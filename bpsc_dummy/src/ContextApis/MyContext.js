import React, { createContext, useState } from "react";

// Create a context with an initial value (in this case, an empty object)
const MyContext = createContext({});

// Create a provider component to wrap around your app
const MyContextProvider = ({ children }) => {
  const [someValue, setSomeValue] = useState("Initial Value");
  const [auth, setAuth] = useState({});
  const [userInfo, setUserInfo] = useState({});
  const [verified, SetVarified] = useState(false);
  const [initialData, setInitialData] = useState({});
  const [profileIfo, setProfileInfo] = useState("");
  const [selectedVacancy, setSelectedVacancy] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [profileImage, setProfileImage] = useState("");
  const [signature, setSignature] = useState("");
  const [formCriteria, setFormCriteria] = useState("");

  const updateValue = (newValue) => {
    setSomeValue(newValue);
  };

  return (
    <MyContext.Provider
      value={{
        someValue,
        updateValue,
        setAuth,
        auth,
        verified,
        SetVarified,
        userInfo,
        initialData,
        setInitialData,
        profileIfo,
        setProfileInfo,
        setUserInfo,
        selectedVacancy,
        setSelectedVacancy,
        formCriteria,
        setFormCriteria,
        isAuthenticated,
        profileImage,
        setProfileImage,
        signature,
        setSignature,
        setIsAuthenticated,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
