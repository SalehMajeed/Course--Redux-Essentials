const redux = require('redux');
const createStore = redux.createStore;

const intial_state = {
	value: 0,
};

const dispatch_actions = {
	incremet: { type: 'increment', payload: 1 },
	decrement: { type: 'decrement', payload: 1 },
	replace_incremet: { type: 'replace_increment', payload: 2 },
	replace_decrement: { type: 'replace_decrement', payload: 2 },
};

function reducer(state = intial_state, action) {
	const actions = {
		increment: () => ({ ...state, value: state.value + action.payload }),
		decrement: () => ({ ...state, value: state.value - action.payload }),
	};
	if (action.type in actions) {
		return actions[action.type]();
	}
	return state;
}

function replace_reducer(state = intial_state, action) {
	console.log(action);
	const actions = {
		replace_incremet: () => ({ ...state, value: state.value + action.payload }),
		replace_decrement: () => ({ ...state, value: state.value - action.payload }),
	};
	if (action.type in actions) {
		return actions[action.type]();
	}
	return state;
}

function listener() {
	console.log(store.getState()); // log the current state
}

const store = createStore(reducer);
const unsubscribe = store.subscribe(listener); // add listener to listen on every action

store.dispatch(dispatch_actions.incremet); // 1
store.dispatch(dispatch_actions.incremet); // 2
store.dispatch(dispatch_actions.incremet); // 3

store.dispatch(dispatch_actions.decrement); // 2
store.dispatch(dispatch_actions.decrement); // 1
store.dispatch(dispatch_actions.decrement); // 0

unsubscribe(); // listener has been removed
//
store.dispatch(dispatch_actions.incremet); // action triggered but not console the getState value because listener has been removed
console.log(store.getState()); // 1

store.replaceReducer(replace_reducer); //replace the reducer dynamically
const unsubscribe_replaceReducer = store.subscribe(listener); // set listener on new reducer

store.dispatch(dispatch_actions.replace_decrement); // -1
store.dispatch(dispatch_actions.replace_decrement); // -3
store.dispatch(dispatch_actions.replace_decrement); // -5
store.dispatch(dispatch_actions.replace_decrement); // -7

unsubscribe_replaceReducer(); // listener has been removed
