import React, { useState } from 'react';

function Counter(props) {
	const [num, newState] = useState(props.initialState);
	const [input_num, input_newState] = useState(props.inputDefaultValue);

	return (
		<div>
			<div>
				<ul>
					<li key='same' className='button' onClick={() => newState(num + 1)}>
						+
					</li>
					<li>Current State = {num}</li>
					<li className='button' onClick={() => newState(num - 1)}>
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
					<li className='input_value' onClick={() => newState(prevState => +prevState + +input_num)}>
						Add Value
					</li>
					<li
						className='input_value'
						onClick={() =>
							setTimeout(() => {
								newState(prevState => +prevState + +input_num);
							}, 1000)
						}>
						Add Value Async
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Counter;
