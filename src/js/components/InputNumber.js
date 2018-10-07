import React from 'react';
import ReactDOM from 'react-dom';

const InputNumber = ({onChange, id, value}) =>
			<input 	className="price-calculate-control"
							value={value}
							type="number"
							onChange={onChange}
							id={id}
							name={id}
							min="0"/>

export default InputNumber;