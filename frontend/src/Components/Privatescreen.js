import { useState, useEffect } from "react";
import axios from "axios";
import "./priv.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
const PrivateScreen = () => {
  const [error, setError] = useState("");
  const [privateData, setPrivateData] = useState("");
  const navigate = useNavigate();
  const logouthandler = () => {
    localStorage.removeItem("authtoken");
    navigate("/");
  };
  useEffect(() => {
    const fetchPrivateDate = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authtoken")}`,
        },
      };

      try {
        const { data } = await axios.get("/api/v1/private", config);

        setPrivateData(data.data);
        console.log(privateData);
      } catch (error) {
        localStorage.removeItem("authtoken");
        setError("You are not authorized please login");
        console.log(error);
      }
    };

    fetchPrivateDate();
  }, []);

  return error ? (
    <span className="error-message">{error}</span>
  ) : (
    <>
      <div className="op">
        <h1>{privateData}</h1>{" "}
        <div className="buttons">
          <button onClick={logouthandler} className="button">
            LOGOUT
          </button>
          <Link to="/home">
            <button className="btn">Go to Home page</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PrivateScreen;
