import React from "react";
import { Spinner } from "react-bootstrap";

function Loading({ size = 100 }) {
  return (
    <div
      style={{
        color: "white",
        width: "100%",
        height: "100%",
      }}
    >
      <h1>loading................</h1>
    </div>
  );
}

export default Loading;
