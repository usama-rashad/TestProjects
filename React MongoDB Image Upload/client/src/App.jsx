import React from "react";
import "./App.scss";
import fileUploadStore from "./Components/FileUpload/fileUploadReducer";

// Components
import FileUpload from "./Components/FileUpload/FileUpload";

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
