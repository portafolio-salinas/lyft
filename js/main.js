$("#banderas").intlTelInput();

$(document).ready(function(){
	$("#banderas").keyup(function(){
		this.value = (this.value + '').replace(/[^0-9]/g, '');
	});

});
$(document).ready(function(){
	$("#next").on("click",function(){
	var maxNumero = $(".numeros").val();
	if (maxNumero.length != 9) {
		alert("Ingrese 9 digitos");
		return false;
		}
	});
});x