import React, { useState } from 'react';
import { connect } from 'react-redux';

const actions = {
	increment: val => ({ type: 'increment', payload: +val }),
	decrement: val => ({ type: 'decrement', payload: +val }),
};

function updateState(val, type, dispatchFn) {
	if (!Number.isNaN(+val)) {
		const action_object = actions[type](val);
		dispatchFn(action_object);
	}
}

function Counter(props) {
	const FromMapStateToProps = props.data;
	const FromMapDispatchToProps = props.mapDispatch;
	const [input_num, input_newState] = useState(props.initialInputValue);

	return (
		<div>
			<div>
				<ul>
					<li
						key='same'
						className='button'
						onClick={() => {
							updateState(1, 'increment', FromMapDispatchToProps);
						}}>
						+
					</li>
					<li>Current State = {FromMapStateToProps.value}</li>
					<li
						className='button'
						onClick={() => {
							updateState(1, 'decrement', FromMapDispatchToProps);
						}}>
						-
					</li>
				</ul>
				<ul>
					<li>
						<input
							type='text'
							value={input_num}
							onChange={e => {
								input_newState(e.target.value);
							}}
							className='input_field'
						/>
					</li>
					<li
						className='input_value'
						onClick={() => {
							updateState(input_num, 'increment', FromMapDispatchToProps);
						}}>
						Add Value
					</li>
					<li
						className='input_value'
						onClick={() =>
							setTimeout(() => {
								updateState(input_num, 'increment', FromMapDispatchToProps);
							}, 1000)
						}>
						Add Value Async
					</li>
				</ul>
			</div>
		</div>
	);
}

function mapStateToProps(state) {
	return {
		data: state,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		mapDispatch: action => dispatch(action),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
