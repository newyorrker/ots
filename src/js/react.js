import React from 'react';
import ReactDOM from 'react-dom';
import select2 from 'select2';
import jQueryScrollbar from 'jquery.scrollbar'
import $ from 'jquery';

//components
import ItemName 	from './components/ItemName';
import PriceType 	from './components/PriceType';
import PriceBlock from './components/PriceBlock';
import Table 			from './components/Table';


const selectData = [
    	{
    		dataUrl:'https://private-7b90d7-otc2.apiary-mock.com/codes/OKV',
    		selector: '.OKV'
    	},
    	{
    		dataUrl: 'https://private-7b90d7-otc2.apiary-mock.com/codes/OKP',
    		selector: '.OKP'
    	}
];

class App extends React.Component {
	constructor(props) {
		super(props);

		this.getCodesMocks = this.getCodesMocks.bind(this);

	}
	componentDidMount() {
		this.getCodesMocks(selectData);

		if (jQueryScrollbar && $('.scrollbar-light').length > 0) {
			$('.scrollbar-light').scrollbar();
		}

		$('textarea.scrollbar-light').on('focus', function(e) {
			$(this).closest('div.scrollbar-light').addClass('textarea-focused');
		});
		$('textarea.scrollbar-light').on('focusout', function(e) {
			$(this).closest('div.scrollbar-light').removeClass('textarea-focused');
		});

	}
	getCodesMocks(selectData) {
		selectData.forEach( function(element) {
			fetch(element.dataUrl).then(function(response) {
				return response.json();
			})
			.then(function (data) {
				$(element.selector).select2({
					data: data,
					placeholder: "Выберете код",
				})
			})
			.catch(function (error) {
				console.log('There has been a problem with your fetch operation: ' + error.message);
				$(element.selector).select2({
					placeholder: "Ошибка загрузки списка кодов",
				})
			});
		});
	}

	render() {
		return (
			<div className="app__wrap">
				<form className="main-form app__form">
					<ItemName/>
					<PriceType>Тип ценового предложения:</PriceType>
					<PriceBlock/>
					<Table/>
				</form>
			</div>
		)
	}
}

ReactDOM.render(
	<App/>,
	document.getElementById('app')
);