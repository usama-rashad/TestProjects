// script.js
const form = document.getElementById("form");

form.addEventListener("submit", submitForm);

function submitForm(e) {
	e.preventDefault();
	const name = document.getElementById("name");
	const files = document.getElementById("files");
	console.log("File tag : " + JSON.stringify(files));
	const formData = new FormData();
	formData.append("name", name.value);
	for (let i = 0; i < files.files.length; i++) {}
	formData.append("file", files.files[0]);

	console.log(...formData);
	fetch("http://localhost:3000/", {
		method: "POST",
		body: formData,
		headers: {
			// "Content-Type": "multipart/form-data",
		},
	})
		.then((res) => console.log(res))
		.catch((err) => ("Error occured", err));
}
