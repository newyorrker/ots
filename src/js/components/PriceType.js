import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import PriceTypeInput from './PriceTypeInput';

class PriceType extends React.Component {
  constructor(props) {
    super(props);

    this.onRadioChangeHandle = this.onRadioChangeHandle.bind(this);
    this.onCheckBoxChangeHandle = this.onCheckBoxChangeHandle.bind(this);
  }
  onRadioChangeHandle() {
    $('#price-not-mounted').parent().slideToggle();
  }
  onCheckBoxChangeHandle() {
    $('#price-not-mounted').closest('.price-type').next().slideToggle();
  }
  render() {
    return (
      <div className="price-type main-form__price-type row">
				<span className="main-form__group-header col-xs-12 col-sm-4">{this.props.children}</span>
				<div className="col-xs-12 col-sm-8">
					<div className="price-type__inline main-form__row">
						<PriceTypeInput id="forLot" onChange={this.onRadioChangeHandle} name="check-price-type" type="radio" checked={true}>
							За лот
						</PriceTypeInput>
						<PriceTypeInput id="forUnit" onChange={this.onRadioChangeHandle} name="check-price-type" type="radio">
							За единицу продукции
						</PriceTypeInput>
					</div>
					<PriceTypeInput id="price-not-mounted" onChange={this.onCheckBoxChangeHandle} name="max-price" type="checkbox">
						Максимальная цена не установлена
					</PriceTypeInput>
				</div>
			</div>
    );
  }
}

export default PriceType;