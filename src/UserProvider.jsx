import React, { useState, useContext } from "react";

const userContext = React.createContext();
const LoadedContext = React.createContext();

export function useUserContext() {
  return useContext(userContext);
}

export function useLoadedContext() {
  return useContext(LoadedContext);
}

const UserProvider = ({children}) => {

  const [auth, setAuth] = useState({ name: "", pass: "", role: "" });

  const updateAuth = (u,p,r)=>{
    setAuth({name:u,pass:p,role:r})
  }

  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <userContext.Provider value={{auth,updateAuth}} >  
        <LoadedContext.Provider value={{isLoaded,setIsLoaded}}>
        {children}
        </LoadedContext.Provider>
    </userContext.Provider>
  );
};

export default UserProvider;
