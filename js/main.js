$("#demo").intlTelInput();
var $numeroMax = $("#demo").val();

function validarNum(){

	if ($numeroMax == null || $numeroMax.length =< 9 || /^[0-9]$/.test($numeroMax)) {
		
	}
};
