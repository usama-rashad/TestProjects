interface reducer_state {
  value: number;
}

interface reducer_action {
  type: string;
  payload: number;
}

function CounterReducer(state: reducer_state, action: reducer_action) {
  switch (action.type) {
    case "ADD":
      console.log("Counter reducer ADD is triggered");
      break;
    case "SUB":
      console.log("Counter reducer SUB is triggered");
      break;
  }
}

export default CounterReducer;
