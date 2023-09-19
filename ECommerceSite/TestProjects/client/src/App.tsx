import "./App.scss";
import FileUploadManager from "./components/FileUploadManager/FileUploadManager";

function App() {
  return (
    <div className="mainApp">
      <FileUploadManager
        type="multiple"
        fileFormFieldName="files"
        apiURL="http://localhost:4000/fileUpload"
        statusURL="http://localhost:4000/fileUploadStatus"
        nameUpdateURL="http://localhost:4000/newFilesSelected"
      />
    </div>
  );
}
export default App;
