import React from 'react';
import ReactDOM from 'react-dom';

const currencyArr = ['руб.', 'дол.', 'евр.' ];

const currencyItems = currencyArr.map((elem, index) => {
	return <option value={elem} key={index}>{elem}</option>
});


const CurrencySelect = () =>
				<select id="currency">
					{currencyItems}
				</select>

export default CurrencySelect;