import "./Session.scss";
import React from "react";
import axios from "axios";
import { produce } from "immer";

function Session() {
  const [sessionData, setSessionData] = React.useState("");

  const getSessionAction = async () => {
    await axios
      .get("http://localhost:4000/api/refresh", { withCredentials: true })
      .then((result) => {
        setSessionData(JSON.stringify(result.data));
      })
      .catch((error) => {
        setSessionData(error.response.data);
      });
  };
  return (
    <div className="mainSession">
      <button className="getSessionButton" onClick={getSessionAction}>
        Get session
      </button>
      <p className="response">{sessionData}</p>
    </div>
  );
}

export default Session;
