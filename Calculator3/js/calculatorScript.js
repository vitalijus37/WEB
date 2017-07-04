var txtInput;
var txtResult;
var operation;

function initialize () {
	txtInput = $('#txtInput');
	txtResult = $('#txtResult');
	
	for(var i = 0; i <=9; i++) {
		$('#btn' + i).on('click', numberClick);
	}
	$('#btnPlus').on('click', plusClick);
	$('#btnMinus').on('click', minusClick);
	$('#btnClear').on('click', clear);
	$('#btnResult').on('click', getResult);
}

function numberClick() {
	if(txtInput.val() !=='0'){ 
		txtInput.val($(this).text());
	}
	else{
		txtInput.val(txtInput.val() + $(this).text());
	}
}

function plusClick() {
	txtResult.val(Number(txtInput.val()));
	clearEntry();
	operation = "+";
}

function clearEntry() {
	txtInput.val('0');
}

function getResult() {
	if(operation=="+"){
		txtResult.val(Number(txtResult.val()) + Number(txtInput.val()));
	}
	if(operation=="-"){
		txtResult.val(Number(txtResult.val()) - Number(txtInput.val()));
	}
	clearEntry();
}

 
function minusClick() {
	if(txtResult.val() == 0){
		txtResult.val(Number(txtInput.val()));
	}
	else{
		txtResult.val(Number(txtResult.val()) - Number(txtInput.val()))
	}
	clearEntry();
	operation = "-";
}

function clear() {
	txtInput.val('0');
	txtResult.val('0');
}

initialize();