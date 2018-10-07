import React from 'react';
import ReactDOM from 'react-dom';

const ndsValueArr = ['Не облагается НДС.', '10%', '18%' ];

const ndsValue = ndsValueArr.map((elem, index) => {
	if (elem.includes('%')) {
		const numberValue = Number.parseInt(elem.replace('%',''));
		return <option value={numberValue} key={index}>{elem}</option>
	} else {
		return <option value={0} key={index}>{elem}</option>
	}
});

const NdsRate = ({onChange, value, children, id}) =>
				<div className="form-price__nds main-form__group">
					<label htmlFor="nds-rate">{children}</label>
					<select id={id}
									name={id}
									value={value}
									onChange={onChange}
									className="price-calculate-control">
						{ndsValue}
					</select>
				</div>

export default NdsRate;