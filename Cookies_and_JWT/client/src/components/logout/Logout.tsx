import React from "react";
import axios from "axios";

import "./Logout.scss";

function Logout() {
  const [message, setMessage] = React.useState("");

  const deleteSessionAction = async () => {
    await axios
      .get("http://localhost:4000/api/delete", { withCredentials: true })
      .then((result) => {
        setMessage(result.data);
      })
      .catch((error) => {
        setMessage(error.response.data);
      });
  };
  return (
    <div className="mainLogout">
      <button className="deleteSessionButton" onClick={deleteSessionAction}>
        Delete session
      </button>
      <p className="response">{message}</p>
    </div>
  );
}

export default Logout;
