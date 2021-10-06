const redux = require('redux');
const createStore = redux.createStore; // return a function for centralized store
const intitialState = { value: 0 }; // very first state

const design_pattern_type = [
	{ type: '1. JS Patterns Intro', payload: 'You are enough.' },
	{ type: '2. JS Abstract Factory', payload: 'I appreciate you.' },
	{ type: '3. JS Builder', payload: 'I love the way you bring out the best in people.' },
	{ type: '4. JS Factory Method', payload: 'You just made my day.' },
	{ type: '5. JS Prototype', payload: 'You have the best ideas.' },
	{ type: '6. JS Singleton', payload: 'I am really glad we met/connected.' },
	{ type: '7. JS Adapter', payload: 'You really seem to know who you are.  I admire that.' },
	{ type: '8. JS Bridge', payload: 'You are truly dedicated.' },
	{ type: '9. JS Composite', payload: 'You are beautiful.' },
	{ type: '10. JS Decorator', payload: 'I love your laugh.' },
	{ type: '11. JS Facade', payload: ' Your sense of style is amazing.' },
	{ type: '12. JS Flyweight', payload: 'Your children are so lucky to have you.' },
	{ type: '13. JS Proxy', payload: 'You are so organized.' },
	{ type: '14. JS Chain of Resp.', payload: 'I love how you think.' },
	{ type: '15. JS Command', payload: 'Your strength amazes me.' },
	{ type: '16. JS Interpreter', payload: 'Your confidence is inspiring.' },
	{ type: '17. JS Iterator', payload: 'I love your glasses (that’s from my boy Reese).' },
	{ type: '18. JS Mediator', payload: 'You are extremely gifted in world.' },
	{ type: '19. JS Memento', payload: 'I love how you treat others with respect.' },
	{ type: '20. JS Observer', payload: 'That color on you looks amazing.' },
	{ type: '21. JS State', payload: 'You are a great example for others.' },
	{ type: '22. JS Strategy', payload: 'You handle your business with grace, class and wisdom.' },
	{ type: '23. JS Template Method', payload: 'You take good care of yourself.' },
	{ type: '24. JS Visitor', payload: 'Yeah so you’re just simply amazing.  ' },
]; // custom array with different different actions and respective payloads

function action_function(type, payload) {
	return {
		type,
		payload,
	};
} // use to create an action object

function reducer(state = intitialState, action) {
	const design_pattern_type = {
		'1. JS Patterns Intro': true,
		'2. JS Abstract Factory': true,
		'3. JS Builder': true,
		'4. JS Factory Method': true,
		'5. JS Prototype': true,
		'6. JS Singleton': true,
		'7. JS Adapter': true,
		'8. JS Bridge': true,
		'9. JS Composite': true,
		'10. JS Decorator': true,
		'11. JS Facade': true,
		'12. JS Flyweight': true,
		'13. JS Proxy': true,
		'14. JS Chain of Resp.': true,
		'15. JS Command': true,
		'16. JS Interpreter': true,
		'17. JS Iterator': true,
		'18. JS Mediator': true,
		'19. JS Memento': true,
		'20. JS Observer': true,
		'21. JS State': true,
		'22. JS Strategy': true,
		'23. JS Template Method': true,
		'24. JS Visitor': true,
	}; // custom object for validate action type instead of if/else of switch case

	if (action.type in design_pattern_type) {
		return {
			...state,
			value: state.value + 1,
			atTheAction: action.type,
			payload: action.payload,
		};
	}
	console.log(
		`you tried to mess by passing type:${action.type} and payload:${action.payload} but still last state is :`
	);
	return state;
}

const store = createStore(reducer); // create centralized state for all the component
console.log(store.getState()); // get the updated value

const selectCounterValue = state => state.value; // selector to get record of current state

design_pattern_type.forEach(val => {
	const action = action_function(val.type, val.payload); // create an action wity type and payload
	store.dispatch(action); // dispatch an action to change in state
	console.log(store.getState()); // get the updated value

	const currentValue = selectCounterValue(store.getState()); // get the current state
	console.log(`you are currently at state : ${currentValue}`);
});

store.dispatch({ type: 'invalid', payload: 'ohhh' }); // dispatch an action to change in state
console.log(store.getState()); // get the updated value
