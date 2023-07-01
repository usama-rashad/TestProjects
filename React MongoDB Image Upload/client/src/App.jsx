import { Provider } from "react-redux";
import React from "react";
import "./App.scss";

// Components
import FileUpload from "./Components/FileUpload/FileUpload";
import fileUploadStore from "./Components/FileUpload/fileUploadStore";

function App() {
  return (
    <div className="mainApp">
      <Provider store={fileUploadStore}>
        <FileUpload />
      </Provider>
    </div>
  );
}

export default App;
