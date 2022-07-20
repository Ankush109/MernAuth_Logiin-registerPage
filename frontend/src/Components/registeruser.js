import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./register.css";
import Loading from "./Loading";
function LoginScreen() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Dateofbirth, setdob] = useState("");
  const [name, setname] = useState("");
  const [error, seterror] = useState("");
  const [Gender, setgender] = useState("");
  const [loading, setloading] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("authtoken")) {
      navigate("/mainpage");
    }
  }, [navigate]);
  const registerhandler = async (e) => {
    e.preventDefault();
    const config = {
      header: {
        "Content-type": "application/json",
      },
    };
    setloading(true);
    try {
      const { data } = await axios.post(
        "/api/v1/register",
        {
          name,
          email,
          password,
          Dateofbirth,
          Gender,
        },
        config
      );
      console.log(data);
      localStorage.setItem("authtoken", data.token);
      // push the user to home page
      navigate("/mainpage");
      setloading(false);
    } catch (error) {
      seterror(error);
      setloading(false);
      console.log(error);
      setTimeout(() => {
        seterror("");
      }, 2000);
    }
  };

  return (
    <div className="loginpage">
      <div class="form">
        <div class="title">Welcome</div>
        <div class="subtitle">Let's create your account!</div>
        {error ? (
          <h1
            style={{
              color: "white",
              fontSize: "medium",
              backgroundColor: "red",
              borderRadius: "10px",
            }}
          >
            Pkease fill the form properly
          </h1>
        ) : (
          ""
        )}
        {loading ? <Loading /> : <></>}

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
            onChange={(e) => setname(e.target.value)}
            id="lastname"
            class="input"
            type="text"
            placeholder=" "
          />
          <div class="cut"></div>
          <label for="lastname" class="placeholder">
            Full Name
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
        <div class="input-container ic2">
          <input
            onChange={(e) => setdob(e.target.value)}
            id="email"
            class="input"
            type="text"
            placeholder=" "
          />
          <div class="cut cut-short"></div>
          <label for="email" class="placeholder">
            Date of birth (DD/MM//YY Format)
          </label>
        </div>
        <div class="input-container ic2">
          <input
            onChange={(e) => setgender(e.target.value)}
            id="email"
            class="input"
            type="text"
            placeholder=" "
          />
          <div class="cut cut-short"></div>
          <label for="email" class="placeholder">
            Gender
          </label>
        </div>
        <button type="submit" onClick={registerhandler} class="submit">
          Register
        </button>
        <Link to="/login">
          {" "}
          <span
            style={{
              color: "white",
              fontSize: "medium",
            }}
          >
            Already have an account ? Click here
          </span>
          <br />
        </Link>
        <span style={{ color: "white", fontSize: "small" }}>
          {" "}
          (Ankush Banerjee @ 2022)
        </span>
      </div>
    </div>
  );
}

export default LoginScreen;
