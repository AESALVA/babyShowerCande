import React, { useState, useContext } from "react";
import validator from "validator";


const userContext = React.createContext();
const LoadedContext = React.createContext();
const ValidationContext = React.createContext();

export function useUserContext() {
  return useContext(userContext);
}

export function useLoadedContext() {
  return useContext(LoadedContext);
}

export function useValidationContext() {
  return useContext(ValidationContext);
}

const UserProvider = ({ children }) => {
  const [auth, setAuth] = useState({ name: "", pass: "", role: "" });

  const [isLoaded, setIsLoaded] = useState(false);

  const validatePassword = (n = "hol") => {
    return (
      validator.isLength(n, { min: 8, max: 20 }) &&
      validator.isStrongPassword(n, {
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 0,
      })
    );
  };

  const validateMail = (n) => {
    return (
      validator.isLength(n, { min: 5, max: 36 }) &&
      validator.isEmail(n, {
        allow_display_name: false,
        require_display_name: false,
        allow_utf8_local_part: true,
        require_tld: true,
        allow_ip_domain: false,
        domain_specific_validation: false,
        blacklisted_chars: "",
        host_blacklist: [],
      })
    );
  };

  const validateName = (n) => {
    return (
      validator.matches(n, "^[a-zA-Z ]*$") &&
      validator.isLength(n, { min: 5, max: 36 })
    );
  };

  return (
    <userContext.Provider value={{ auth, setAuth }}>
      <LoadedContext.Provider value={{ isLoaded, setIsLoaded }}>
        <ValidationContext.Provider value={{ validatePassword, validateMail, validateName }}>
          {children}
        </ValidationContext.Provider>
      </LoadedContext.Provider>
    </userContext.Provider>
  );
};

export default UserProvider;
