import { createStore } from 'redux';

const intial_state = {
	value: 0,
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

const store = createStore(reducer);
export default store;
