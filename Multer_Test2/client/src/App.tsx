import React, {useRef, useState} from "react";
import "./App.css";

// Packages
import axios from "axios";

function App() {
	const fileRef = useRef<HTMLInputElement>(
		null
	) as React.MutableRefObject<HTMLInputElement>;
	const [uploadProgress, setUploadProgress] = useState<number>(0);
	const [uploadSpeed, setUploadSpeed] = useState<number>(0);
	const [uploadComplete, setUploadComplete] = useState<boolean>(false);

	const fileSubmitAction = () => {
		// Create a form data object and pass it to axios
		// Do only if ref is not null
		if (fileRef.current.files) {
			console.log("File upload started.");
			let formData = new FormData();
			formData.append("file", fileRef.current.files[0]);
			// Axios call
			axios({
				url: "http://127.0.0.1:3000/",
				data: formData,
				method: "post",
				headers: {"Access-Control-Allow-Origin": "true"},
				onUploadProgress(progressEvent) {
					if (progressEvent) {
						// Calculate the upload progress
						if (progressEvent.progress) {
							let progress: number = progressEvent.progress * 100.0;
							setUploadProgress(progress);
						}
					}
				},
			})
				.catch(() => {
					console.log("File upload failed.");
				})
				.then(() => {
					console.log("File upload completed.");
				});
		}
	};
	return (
		<div className="app">
			<h1>File upload</h1>
			<input ref={fileRef} type="file" name="file" />
			<button onClick={fileSubmitAction}>Upload</button>
			<h2>{uploadProgress} %</h2>
			<h2>{uploadSpeed} MBps</h2>
		</div>
	);
}

export default App;
