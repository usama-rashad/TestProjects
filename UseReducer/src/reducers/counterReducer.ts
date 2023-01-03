interface ICounterReducerState {
  value: number;
}

// Action types
export enum ECounterActionTypes {
  Add,
  Sub,
}

interface ICounterActions {
  action: ECounterActionTypes;
}

export const counterInitialState: ICounterReducerState = { value: 0 };

export const counterReducer = (
  state: ICounterReducerState,
  action: ICounterActions
) => {
  switch (action.action) {
    case ECounterActionTypes.Add:
      setTimeout(() => {
        action.action = ECounterActionTypes.Sub;
        // return { ...state };
      }, 1000);
      return {
        ...state,
        value: state.value + 1,
      };
      break;
    case ECounterActionTypes.Sub:
      return {
        ...state,
        value: state.value - 1,
      };
      break;
  }
};

export {};
