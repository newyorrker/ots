import $ from 'jquery';
import select2 from 'select2';
import jQueryScrollbar from 'jquery.scrollbar'


jQuery(document).ready(function($) {

(function scrollbarInit () {
	if (jQueryScrollbar && $('.scrollbar-light').length > 0) {
		$('.scrollbar-light').scrollbar();
	}

	$('textarea.scrollbar-light').on('focus', function(e) {
		$(this).closest('div.scrollbar-light').addClass('textarea-focused');
	});
	$('textarea.scrollbar-light').on('focusout', function(e) {
		$(this).closest('div.scrollbar-light').removeClass('textarea-focused');
	});

})();


class PriceTypeChange {
	constructor() {

		$('#price-not-mounted').prop('checked', false);
		$('#for-unit').prop("checked");

		this.eventsInit();
	}

	eventsInit() {

		const radioBtn = $('.price-type input[type="radio"]');
		const checkbox = $('.price-type input[type="checkbox"]');
		const calculateControl = $('.price-calculate-control');


		calculateControl.on('change', (e) => {
			this.priceCalculate();
		})

		radioBtn.on('change', (e) => {
			this.maxPriceToggle();
		});

		checkbox.on('change', (e) => {
			this.priceToggle();
		});
	}
	priceCalculate() {

		const priceValue = $('#price-value').val();
		const noNDSprice = $('#no-nds-price');
		const ndsSum = $('#nds-sum');
		const ndsRate = $('#nds-rate').val();


		function ndsToNumber(ndsRate) {
			if (ndsRate.includes('%')) {
				return Number.parseInt(ndsRate.replace('%',''))
			}
			return false
		}

		function calcPrices (priceValue, ndsRateValue) {

			if (!ndsRateValue) { 					//если поле не содержит символа процента
				noNDSprice.val(priceValue); //то цена не изменяется, а сумма ндс равна нулю
				ndsSum.val(0);
				return true 								//завершаем выполнение функции
			}

			function noNDSpriceCalc() {
				return priceValue - ( priceValue * ( ndsRateValue / 100 ));
			}

			function ndsSumCalc() {
				return priceValue - noNDSpriceCalc();
			}

			noNDSprice.val( noNDSpriceCalc(priceValue, ndsRateValue));
			ndsSum.val( ndsSumCalc(priceValue, noNDSpriceCalc()) );

		}

		calcPrices(priceValue, ndsToNumber(ndsRate))

	}

	maxPriceToggle() {
		$('#price-not-mounted').parent().slideToggle();
	}

	priceToggle() {
		const priceType = $('#price-not-mounted').closest('.price-type').next();
		priceType.slideToggle();
	}
}

class Codes {
	constructor() {
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

    this.getCodesMocks(selectData);
  }
  getCodesMocks(selectData) {
  	selectData.forEach( function(element) {

  		fetch(element.dataUrl).then(function(response) {
				return response.json();
			})
			.then(function (data) {
				$(element.selector).select2({
					data: data,
					placeholder: "Выберетие код"
					placeholder: "Выберете код",
				})
			})
			.catch(function (error) {
				console.log('There has been a problem with your fetch operation: ' + error.message);
				$(element.selector).select2({
					placeholder: "Ошибка загрузки списка кодов",
				})
    			// allowClear: true
				}) // сделать обработку ошибки
			});
  	});
  }
}

const selectCode = new Codes();

});