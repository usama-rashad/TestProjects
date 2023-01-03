// script.js
const axios = require("axios")
const form = document.getElementById("form");

form.addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  const name = document.getElementById("name");
  const files = document.getElementById("files");
  const formData = new FormData();
  formData.append("name", name.value);
  for (let i = 0; i < files.files.length; i++) {
    formData.append("file", files.files[i]);
  }


  axios.
  fetch("http://localhost:5000/upload_files", {
    method: "POST",
    body: formData,
    headers: {
      //   "Content-Type": "multipart/form-data",
    },
  })
    .then((res) => console.log(res))
    .catch((err) => ("Error occured", err));
}
