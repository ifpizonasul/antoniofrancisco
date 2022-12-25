/*
function minhafuncao(arg1, arg2){
	

	var soma = arg2 + arg1;
	var msg = 'A soma é igual a ';

	alert(msg + soma);

	var flag = true;

	if(flag)
		alert('verdadeiro')
	else(flag)
		alert('falso')

}
*/

function raizquadrada(num){
	var raiz = Math.sqrt(num);
	var res = 'a raiz de ' + num +' é ';

	alert(res + raiz)
}

function escreve( ){
	var texto = prompt('digite um texto qualquer : ');
	document.getElementById("minhaDiv").innerHTML = texto;
}

function seq (){
	const lista = [];
	let n = prompt('digite um numero : ');
	for(let x = 1; x <= n; x++){
		lista.push(x);
		document.getElementById("minhadiv").innerHTML = lista;
	}
}


var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})

