import "./FileUploadManager.scss";

// Hooks
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useAppDispatch } from "./../../store";

// Reducers
import { uploadFileThunk } from "./fileUploadManagerReducer";
import RoundButton from "../RoundButton/RoundButton";
import Button from "../Button/Button";
import ProgressBar from "../ProgressBar/ProgressBar";
import useFileStatus from "../../hooks/useFileStatus";
import { fileStatusCheckThunk } from "./fileStatusCheckReducer";
import { fileNameUploadhunk } from "./fileNameUpdateReducer";
import useFileUploadManager from "../../hooks/useFileUploadManager";

// Interval ID for upload status check
let intervalID = 0;

type IFileUploadManagerProps = {
  type: "single" | "multiple";
  supportedExtensions?: string;
  fileFormFieldName: string;
  apiURL: string;
  statusURL: string;
  nameUpdateURL: string;
};

// Helpers
function getFileNameList(files: FileList): string[] {
  let fileNames = [];
  for (let index = 0; index < files.length; index++) {
    fileNames.push(files[index].name);
  }
  return fileNames;
}

function FileUploadManager(props: IFileUploadManagerProps) {
  const { fileStatus } = useFileStatus();
  const { status: uploadTaskStatus } = useFileUploadManager();
  const singleFileInputRef = useRef<HTMLInputElement>(null);
  const multipleFileInputRef = useRef<HTMLInputElement>(null);
  const [selection, setSelection] = useState<any>();
  const [fileInfo, setFileInfo] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (uploadTaskStatus === "ready") {
      setTimeout(() => {
        clearInterval(intervalID);
      }, 5000);
    }
  }, [uploadTaskStatus]);

  const openFileSelectionDialog = () => {
    switch (props.type) {
      case "single":
        singleFileInputRef.current?.click();
        break;
      case "multiple":
        multipleFileInputRef.current?.click();
        break;
    }
  };

  const fileSelectionChanged = () => {
    switch (props.type) {
      case "single":
        setSelection(singleFileInputRef.current?.files);
        setFileInfo([singleFileInputRef.current.files[0].name]);
        break;
      case "multiple":
        setSelection(multipleFileInputRef.current?.files);
        let nameList = [];
        for (let index = 0; index < multipleFileInputRef.current.files.length; index++) {
          nameList.push(multipleFileInputRef.current.files[index].name);
        }
        dispatch(fileNameUploadhunk({ url: props.nameUpdateURL, fileNames: getFileNameList(multipleFileInputRef.current.files) }));
        setFileInfo(nameList);
        break;
    }
  };

  const startFileUpload = () => {
    let formData = new FormData();
    switch (props.type) {
      case "single":
        // If no files selected then return
        if (singleFileInputRef.current.files.length === 0) {
          setErrorMessage("No file selected.");
          return;
        }
        setErrorMessage("");
        if (singleFileInputRef.current?.files) {
          formData.append(props.fileFormFieldName, singleFileInputRef.current?.files[0]);
        }
        break;
      case "multiple":
        // If no files selected then return
        if (multipleFileInputRef.current.files.length === 0) {
          setErrorMessage("No files selected.");
          return;
        }
        setErrorMessage("");
        // Append each file to the form
        if (multipleFileInputRef.current?.files) {
          for (let index = 0; index < multipleFileInputRef.current?.files.length; index++) {
            formData.append(props.fileFormFieldName, multipleFileInputRef.current?.files[index]);
          }
        }
        break;
    }
    dispatch(uploadFileThunk({ url: props.apiURL, formData: formData }));

    // Keep checking the file status
    intervalID = setInterval(() => {
      dispatch(fileStatusCheckThunk({ url: props.statusURL }));
    }, 1000);
  };

  const pauseFileUpload = () => {};
  const cancelFileUpload = () => {};

  return (
    <div className="mainFileUploadManager">
      {props.type === "single" ? (
        <input accept={props.supportedExtensions} type="file" ref={singleFileInputRef} onChange={fileSelectionChanged} hidden />
      ) : null}
      {props.type === "multiple" ? (
        <input accept={props.supportedExtensions} type="file" ref={multipleFileInputRef} onChange={fileSelectionChanged} multiple hidden />
      ) : null}
      <div className="controlInputs">
        <Button onClick={openFileSelectionDialog}>
          <p>Select {props.type === "single" ? "file" : "files"}</p>
        </Button>
        <Button onClick={startFileUpload}>
          <p>Upload</p>
        </Button>
        <Button onClick={pauseFileUpload}>
          <p>Pause</p>
        </Button>
        <Button onClick={cancelFileUpload}>
          <p>Cancel</p>
        </Button>
      </div>
      {errorMessage && (
        <div className="messages">
          <p className="error">{errorMessage}</p>
        </div>
      )}
      <div className="files">
        {fileStatus.map((fileUploadStatus, index) => {
          return (
            <div key={index} className="fileStatusRow">
              <p>{fileUploadStatus.filename}</p>
              <ProgressBar progress={fileUploadStatus.uploadPct} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FileUploadManager;
