import React, { useReducer } from "react";
import { updateBusy, updateProgress } from "./fileUploadReducer";
import axios from "axios";
import "./FileUpload.scss";

// Import MUI buttons
import Button from "@mui/material/Button";

// Import Icons
import CircularProgress from "@mui/material/CircularProgress";
import { useSelector, useDispatch } from "react-redux";

function FileUpload() {
  const uploadBusy = useSelector((state) => state.fileUpload.busy);
  const dispatch = useDispatch();

  const fileInputRef = React.useRef();
  const [ready, setReady] = React.useState(false);
  const [fileName, setFileName] = React.useState("");

  const updateFileName = (e) => {
    setFileName(e.target.value);
  };

  const updateFileHandle = () => {
    console.log(fileInputRef.current.files[0]);
    if (fileInputRef.current.files[0]) {
      setReady(true);
    } else {
      setReady(false);
    }
  };

  const selectFile = (e) => {
    e.preventDefault();
    fileInputRef.current.click();
  };

  const uploadFile = async (e) => {
    e.preventDefault();
    dispatch(updateBusy(true));
    let formData = new FormData();
    formData.append("imageName", fileName);
    formData.append("imageFile", fileInputRef.current.files[0]);
    await axios({
      method: "post",
      data: formData,
      headers: { "content-type": "multipart/form-data" },
      url: "http://localhost:5000/api/fileUpload",
    })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="mainFileUpload">
      <input
        className="fileInput"
        type="file"
        ref={fileInputRef}
        onChange={() => {
          updateFileHandle();
        }}
        accept="image/png, image/jpeg"
      />
      <input className="fileName" type="text" value={fileName} onChange={(e) => updateFileName(e)} placeholder="Enter filename..." />
      <Button onClick={(e) => selectFile(e)}>Select</Button>
      <Button
        className="uploadButton"
        disabled={!ready}
        onClick={(e) => uploadFile(e)}
        endIcon={uploadBusy && <CircularProgress size={"1.5rem"} />}
      >
        Upload
      </Button>
    </div>
  );
}

export default FileUpload;
