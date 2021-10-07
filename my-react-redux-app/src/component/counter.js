import React, { useState } from 'react';
import { connect } from 'react-redux';

const actions = {
	increment: val => ({ type: 'increment', payload: +val }),
	decrement: val => ({ type: 'decrement', payload: +val }),
};

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
							const action_object = actions.increment(1);
							FromMapDispatchToProps(action_object);
						}}>
						+
					</li>
					<li>Current State = {FromMapStateToProps.value}</li>
					<li
						className='button'
						onClick={() => {
							const action_object = actions.decrement(1);
							FromMapDispatchToProps(action_object);
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
							const action_object = actions.increment(input_num);
							FromMapDispatchToProps(action_object);
						}}>
						Add Value
					</li>
					<li
						className='input_value'
						onClick={() =>
							setTimeout(() => {
								const action_object = actions.increment(input_num);
								FromMapDispatchToProps(action_object);
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
