import React, {useRef, useState} from "react";
import axios from "axios";
import fs from "fs";

import "./App.css";

function App() {
	const formRef = useRef<FormData>();
	const [fileName, setFileName] = useState("");
	const [progress, setProgress] = useState<number>(0);

	const changeFileName = (e: any) => {
		setFileName(e.currentTarget.files[0].name);
	};

	const uploadFile = (e: any) => {
		console.log("File upload started");
		let bodyFormData = new FormData();
		bodyFormData.append("file", fileName); // ??
		console.log(formRef.current);
		const config = {headers: {"content-Type": "multipart/form-data"}};

		axios
			.post("http://127.0.0.1:3000/", bodyFormData, config)
			.catch(() => {
				console.log("POST error");
			})
			.then(() => {
				console.log("POST success");
			});
	};

	return (
		<div className="app">
			<h1>File Upload</h1>
			<form ref={formRef}>
				<input type="file" name="avatar" onChange={changeFileName} />
			</form>
			<button className="uploadButton" onClick={uploadFile}>
				Upload
			</button>
			<span className="progress">{progress} %</span>
		</div>
	);
}

export default App;
