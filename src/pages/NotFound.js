import React from "react";
import NotFoundImage from "../media/404.jpg";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <img
        src={NotFoundImage}
        alt="not found (error 404)"
        style={{
          width: "60%",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
          display: "block",
        }}
      />
      <h2 style={{ color: "white", textAlign: "center" }}>
        Go to <Link to="/" style={{textDecoration: "none", color: "#ccc"}}>HOME</Link>
      </h2>
    </>
  );
}

export default NotFound;
