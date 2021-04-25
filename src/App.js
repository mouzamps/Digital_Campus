import React, { useState, useEffect } from "react";
import fire from "./fire";
import Login from "./pages/auth/login";
import Hero from "./pages/landingPage";
import HomePage from "./pages/HomePage";
import "./App.css";
import Header from "./components/nav/Header";

function App() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };
  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        // eslint-disable-next-line default-case
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth-user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        // eslint-disable-next-line default-case
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListner = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListner();
  }, []);

  return (
    <div className='app'>
    <Header  />
      {user ?  (
        <Header handleLogout={handleLogout} />,
        <HomePage />  
        
      ) : (    
        <Login
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
          handleSignup={handleSignup}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          emailError={emailError}
          passwordError={passwordError}
        />
      )}
      ;
      
    </div>
  );
}

export default App;
