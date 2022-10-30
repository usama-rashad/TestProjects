import {add,sub} from './Redux/counterReducer'
import {appState,dispatch} from './Redux/hooks'



function App() {
  const disp = dispatch();
  const counterValue = appState((state)=>state.counter.value)

  return (
    <div className="App">
      <button onClick={()=>{disp(add())}}>+</button>
      <button onClick={()=>{disp(sub())}}>-</button>
      <h1>{counterValue}</h1>
    </div>
  )
}

export default App
