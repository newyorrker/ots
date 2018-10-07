import React from 'react';
import ReactDOM from 'react-dom';

const PriceTypeInput = ({children, onChange, id, name, type, checked = false}) =>
			<div className={"main-form__custom main-form__custom--" + type}>
				<input id={id} onChange={onChange} type={type} name={name}  defaultChecked={checked} />
				<label htmlFor={id}>
					{children}
				</label>
			</div>

export default PriceTypeInput;