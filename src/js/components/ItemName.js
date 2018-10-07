import React from 'react';
import ReactDOM from 'react-dom';

const ItemName = () =>
			<div className="item-name main-form__name row">
				<label className="main-form__group-header col-xs-12 col-sm-4" htmlFor="main-form-name">Наименование:</label>
				<div className="main-form__group col-xs-12 col-sm-8">
					<textarea className="scrollbar-light"></textarea>
				</div>
			</div>

export default ItemName;