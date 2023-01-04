// A reducer needs a state which changes over different actions

export enum CounterActions {
	Add,
	Subtract,
}
export interface ICounterActions {
	action: CounterActions;
}

interface ICounterReducerState {
	value: number;
}

export const CounterInitialState: ICounterReducerState = {value: 0};

const CounterReducer = (
	state: ICounterReducerState,
	action: ICounterActions
) => {
	switch (action.action) {
		case CounterActions.Add:
			return {
				...state,
				value: state.value + 1,
			};
			break;
		case CounterActions.Subtract:
			return {
				...state,
				value: state.value - 1,
			};
			break;
	}
};

export {CounterReducer};
