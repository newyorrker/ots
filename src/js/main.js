require('./libs.js');
// require('./callback.js');

import $ from 'jquery';
import select2 from 'select2';
import jQueryScrollbar from 'jquery.scrollbar'


jQuery(document).ready(function($) {


$('.scrollbar-light').scrollbar();
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
				})
    			// allowClear: true
				}) // сделать обработку ошибки
			});
  	});
  }
}

const selectCode = new Codes();

});