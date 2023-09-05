import { useState } from "react";
import "./App.scss";
import Modal from "./components/Modal/Modal";

// Book images
import Book1Image from "./assets/book1.jpg";
import Book2Image from "./assets/book2.jpg";
import Book3Image from "./assets/book3.jpg";
import FileUploader from "./components/FileUploader/FileUploader";

function App() {
  const [modalOpen, setModalOpen] = useState<Boolean>(false);

  const openModalAction = () => {
    setModalOpen(true);
  };
  return (
    <div className="mainApp">
      <FileUploader />
    </div>
  );
}

export default App;
