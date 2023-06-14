import React from "react";
import "./Form.scss";

function Form() {
  return (
    <div className="formMain">
      <form className="form">
        <input type="text" placeholder="Name..." />
        <input type="password" placeholder="Password..." />
        <button formAction="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
