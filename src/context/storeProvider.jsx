import React, { useReducer } from "react";
import StoreReducer from "./storeReducer.jsx";
import decodeToken from "./decodeToken.js";
import StoreContext from "./storeContext.jsx";

const StoreProvider = ({ children }) => {
  const token = localStorage.getItem("abcToken") || "";
  const initialUser = decodeToken(token);

  const initialState = {
    token,
    userInfo: initialUser, // {id, email, name, role} OR null
  };

  const [store, dispatch] = useReducer(StoreReducer, initialState);

  return (
    <StoreContext.Provider value={{ store, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
