import React from 'react';
import ReactDOM from 'react-dom';

import InputNumber from './InputNumber';
import NdsRate from './NdsRate';
import CurrencySelect from './CurrencySelect';


class PriceBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
			price: 	'',
			ndsSum: '',
			noNdsPrice: '',
			ndsRate: 0
    };

    this.inputChangeHandle = this.inputChangeHandle.bind(this);
    this.priceCalc = this.priceCalc.bind(this);
    this.priceChange = this.priceChange.bind(this);
    this.ndsRateChange = this.ndsRateChange.bind(this);

  }
  inputChangeHandle(event) {

  	const target = event.target;
		const name = target.name;
		const value = target.value;

		this.priceCalc(value, name);

	}

	priceCalc(value, name) {

		switch (name) {
		  case 'price':
		    this.priceChange(value);
		    break;
		  case 'ndsSum':
		    this.ndsSumChange(value);
		    break;
		  case 'noNdsPrice':
		    this.noNdsPriceChange(value);
		    break;
		  case 'ndsRate':
		    this.ndsRateChange(value);
		    break;
		}
	}
	priceChange(value) {

		const noNdsPrice = value - value * (this.state.ndsRate / 100);
		const ndsSum = value - noNdsPrice

		this.setState({
			price: Math.round(value * 100) / 100,
			ndsSum: Math.round(ndsSum * 100) / 100,
			noNdsPrice: Math.round(noNdsPrice * 100) / 100
		});
	}
	ndsSumChange(value) {

		const price = value * (this.state.ndsRate * 1);
		const noNdsPrice = price - value * (this.state.ndsRate / 10);

		this.setState({
			price: Math.round(price * 100) / 100,
			ndsSum: Math.round(value * 100) / 100,
			noNdsPrice: Math.round(noNdsPrice * 100) / 100,
		});
	}
	noNdsPriceChange(value) {

		const price = parseInt(value) + parseInt(this.state.ndsRate * 1);
		const ndsSum = price - value;

		this.setState({
			price: Math.round(price * 100) / 100,
			ndsSum: Math.round(ndsSum * 100) / 100,
			noNdsPrice: Math.round(value * 100) / 100,
		});
	}
	ndsRateChange(value) {

		const price = this.state.price || 0;
		const noNdsPrice = price - price * (value / 100);
		const ndsSum = price - noNdsPrice;

		this.setState({
			price: price,
			ndsSum: ndsSum,
			noNdsPrice: noNdsPrice,
			ndsRate: value
		});
	}

  render() {

		const inputsData = this.state;

    return (
    	<div className="form-price main-form__price row">
				<label htmlFor="price-value" className="main-form__group-header col-xs-12 col-sm-4">
					Начальная/Максимальная цена с НДС*:
				</label>
				<div className="col-xs-12 col-sm-8">
					<div className="main-form__row">
						<div className="main-form__group">
							<InputNumber onChange={this.inputChangeHandle} id='price' value={inputsData.price} />
						</div>
						<div className="main-form__group">
							<CurrencySelect/>
						</div>
					</div>
					<div className="main-form__row">
						<NdsRate onChange={this.inputChangeHandle} id='ndsRate' value={inputsData.ndsRate} >
							ставка ндс
						</NdsRate>
						<div className="main-form__group">
							<label htmlFor="nds-sum">Сумма ндс</label>
							<InputNumber onChange={this.inputChangeHandle} id='ndsSum' value={inputsData.ndsSum} />
						</div>
						<div className="main-form__group">
							<label>Цены без ндс</label>
							<InputNumber onChange={this.inputChangeHandle} id='noNdsPrice' value={inputsData.noNdsPrice} />
						</div>
					</div>
				</div>
			</div>
    );
  }
}

export default PriceBlock;