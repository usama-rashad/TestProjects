import "./App.scss";
import Button from "./Button/Button";

function App() {
  return (
    <div className="appMain">
      <Button
        buttonStyle={{
          backgroundColor: "red",
          color: "white",
          width: "100px",
          height: "40px",
          fontWeight: "bold",
          borderRadius: "10px",
          boxShadow: "2px 2px  10px red",
          border: "2px solid white",
        }}
      >
        Press
      </Button>
    </div>
  );
}

export default App;
