


$(document).ready(function(){
	$(":input").inputmask();


	$("#floatingInput2").inputmask({
		mask: '8-(999)-999-9999',
		placeholder: '8-(___)-___-____',
		showMaskOnHover: true,
		showMaskOnFocus: true,
		onBeforePaste: function (pastedValue, opts) {
			var processedValue = pastedValue;

//do something with it

			return processedValue;
		}
	});
	$("#floatingInput11").inputmask({
		mask: '8-(999)-999-9999',
		placeholder: '8-(___)-___-____',
		showMaskOnHover: true,
		showMaskOnFocus: true,
		onBeforePaste: function (pastedValue, opts) {
			var processedValue = pastedValue;

//do something with it

			return processedValue;
		}
	});
	$("#floatingInput6").inputmask({
		mask: '99.99.9999 - 99.99.9999',
		placeholder: '__.__.____ - __.__.____',
		showMaskOnHover: true,
		showMaskOnFocus: true,
		onBeforePaste: function (pastedValue, opts) {
			var processedValue = pastedValue;

//do something with it

			return processedValue;
		}
	});
	$("#floatingInput8").inputmask({
		mask: '99999',
		placeholder: '',
		showMaskOnHover: true,
		showMaskOnFocus: true,
		onBeforePaste: function (pastedValue, opts) {
			var processedValue = pastedValue;

//do something with it

			return processedValue;
		}
	});
});


