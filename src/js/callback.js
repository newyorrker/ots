// import Inputmask from "inputmask/dist/inputmask/inputmask.numeric.extensions";

jQuery(document).ready(function($) {
	const formMarkup =
		`<form class="white-popup callback" method="post" action=" wp-content/themes/ots/inc/callback.php">
			<input name="Name" type="text" placeholder="Ваше имя" required>
			<input name="Phone" type="tel" placeholder="Ваш телефон" required>
			<input name="Email" type="email" placeholder="Ваш email" required>
			<div class="callback__no-spam">
				<label class="verify">
					<input class="killer" id="killer" name="killer" type="checkbox">
					<span>Я не робот</span>
				</label>
			</div>
			<button class="btn callback__submit">send</button>
			<p class="callback__fz">Нажимая "Отправить", Вы принимаете условия Соглашения на обработку персональных данных.</p>
		</form>`;
	const successMarkup =
		`<div id="success-popup" class="white-popup mfp-hide">
		  <h5>Ваше сообщение отправлено</h5>
		</div>`;

	$('.open-popup-link').magnificPopup({
		items: {
			type: 'inline',
			src: formMarkup
		}
	});

	// var im = new Inputmask("8(999) 999-9999");

});