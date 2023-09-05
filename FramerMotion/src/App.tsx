import "./App.scss";

// Components
import Counter from "./components/Counter/Counter";

function App() {
  return (
    <div className="mainApp">
      <Counter startValue={0} endValue={10} />
    </div>
  );
}

export default App;
