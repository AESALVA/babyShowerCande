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
  const [auth, setAuth] = useState({ name:"", role: "" });

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

  const validateToken = (n) => {
    return (
      validator.matches(n, "^[a-zA-Z0-9]*$") &&
      validator.isLength(n, { min: 8, max: 50 }) &&
      validator.isStrongPassword(n,{ minLength: 8, minLowercase: 1, minUppercase: 0, 
        minNumbers: 1, minSymbols: 0, returnScore: false, 
        pointsPerUnique: 1, pointsPerRepeat: 0.5, 
        pointsForContainingLower: 10, pointsForContainingUpper: 10, 
        pointsForContainingNumber: 10, pointsForContainingSymbol: 10 })
    );
  };

  const validateText = (t = "hol")=>{
    let patron = /\w+\s\w+\s?.+/; 
    return (
      patron.test(t) &&
      validator.isLength(t, {min: 8, max:300})
    )
  }

  const validateLogin = async (u, p) => {
    await fetch("https://babyshowerback.vercel.app/Users/login", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ mail: u, password: p }),
    })
      .then((res) => res.json())
      .then((json) => {
        if (
          json.message === "Wrong Credentials" ||
          json.message === "User not found"
        ) {
          setAuth({ user: false, role: false });
        }
      });
  };

  const login = async (u, p) => {
    await fetch("https://babyshowerback.vercel.app/Users/login", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ mail: u, password: p }),
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.message === "User and password OK") {
          setAuth({ name: json.name, role: json.role });
        }
      })
      .catch((error) => setAuth({ user: false, role: false }))
      .finally(()=>setIsLoaded(false));
  };

  const logout = () => {
    setAuth({ name: "", role: "" });
  };



  const addUser = (u) => {
    fetch("https://babyshowerback.vercel.app/Users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: u.name,
        mail: u.mail,
        password: u.password,
        role: u.role,
      }),
    })
    .finally(()=>setIsLoaded(false));
  };
  

  const top = ()=>{
    window.scrollTo(0);
  }


  return (
    <userContext.Provider value={{ auth, setAuth, addUser, login, logout, top }}>
      <LoadedContext.Provider value={{ isLoaded, setIsLoaded }}>
        <ValidationContext.Provider value={{ validatePassword, validateMail, validateName, validateLogin, validateToken, validateText }}>
          {children}
        </ValidationContext.Provider>
      </LoadedContext.Provider>
    </userContext.Provider>
  );
};

export default UserProvider;
