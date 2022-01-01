import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FirebaseContext from "../context/firebase";

const Login = () => {
  const history = useNavigate();
  const firebase = useContext(FirebaseContext);

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const isInvalid = password === "" || emailAddress === "";

  const handleLogin = () => {};

  useEffect(() => {
    document.title = "Login - Instagram";
  }, []);

  return <div className="">Login Page</div>;
};

export default Login;
