import "./App.scss";
import React from "react";
import axios from "axios";

// Components
import CookieItem, { ICookieItem } from "./components/CookieItem/CookieItem";

function App() {
  const [cookieData, setCookieData] = React.useState<ICookieItem[]>([]);
  const setCookie = () => {
    let response = axios
      .get("http://localhost:2000/getToken", { withCredentials: true })
      .then((result) => {
        // Convert cookies to list
        console.log(document.cookie);
        setCookieData([
          { name: "isLoggedIn", value: "Pass" },
          { name: "userID", value: "12345" },
        ]);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="mainApp">
      <p>Cookie App</p>
      <button onClick={setCookie}>Get cookie</button>
      <div className="cookieData">
        {cookieData.map((cookie, index) => {
          return <CookieItem key={index} name={cookie.name} value={cookie.value} />;
        })}
      </div>
    </div>
  );
}

export default App;
