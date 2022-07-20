import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./register.css";
import Loading from "./Loading";
import ErrorMessage from "./Errormessage";
function LoginScreen() {
  const navigate = useNavigate();
  const [loading, setloading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, seterror] = useState("");
  useEffect(() => {
    if (localStorage.getItem("authtoken")) {
      navigate("/");
    }
  }, [navigate]);
  const loginhandler = async (e) => {
    e.preventDefault();
    const config = {
      header: {
        "Content-type": "application/json",
      },
    };
    setloading(true);
    try {
      const { data } = await axios.post(
        "/api/v1/login",
        {
          email,
          password,
        },
        config
      );
      console.log(data);
      localStorage.setItem("authtoken", data.token);
      // push the user to home page
      navigate("/mainpage");
      setloading(false);
    } catch (error) {
      console.log(error);
      seterror(error);
      setloading(false);
    }
  };

  return (
    <div className="loginpage">
      <div class="form">
        <div class="title">Welcome</div>
        <div class="subtitle">Let's create your account!</div>
        {loading ? <Loading /> : ""}
        {error ? (
          <h1
            style={{
              color: "black",
              backgroundColor: "red",
              borderRadius: "15px",
            }}
          >
            Invalid user credentials !!!
          </h1>
        ) : (
          ""
        )}
        <div class="input-container ic1">
          <input
            onChange={(e) => setEmail(e.target.value)}
            id="firstname"
            class="input"
            type="text"
            placeholder=" "
          />
          <div class="cut"></div>
          <label for="firstname" class="placeholder">
            Email
          </label>
        </div>

        <div class="input-container ic2">
          <input
            onChange={(e) => setPassword(e.target.value)}
            id="lastname"
            class="input"
            type="text"
            placeholder=" "
          />
          <div class="cut"></div>
          <label for="lastname" class="placeholder">
            Give a password
          </label>
        </div>

        <button type="submit" onClick={loginhandler} class="submit">
          Register
        </button>
        <br />
        <br />
        <Link to="/">
          {" "}
          <span style={{ color: "white" }}>Click here to register</span>
        </Link>
      </div>
    </div>
  );
}

export default LoginScreen;
