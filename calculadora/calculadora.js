var num1 = Number(prompt("Digite o primeiro número"))
var operador = prompt("Digite seu Operador")
var num2 = Number(prompt("Digite o segundo número"))
// OPERADORES IF 
// == verdadeiro caso o conteudo seja igual
// === verdadeiro caso o conteudo e o tipo seja igual 
// != verdadeiro caso o conteudo for diferente 
// > verdadeiro caso o elemento seja maior 
// < verdadeiro caso o elemento seja menor 
// >= verdadeiro caso o elemento seja maior e igual 
// <= verdadeiro caso o elemento seja menor e igual 

//OPERADORES LOGICO
//&& AND (e), verdadeiro apenas se ambas condições forem verdadeiras
// ! - NOT, verdadeiro apenaas se a afirmação for falsa 
// (shift+\) || - OR, verdadeiro apenas se uma condição ou 


if (operador === "+"){
    var calcular = num1 + num2
    alert("A soma é de:"+calcular)
}
else if(operador === "-"){
    var calcular = num1 - num2
    alert("A subtrção é de: "+calcular)
}
else if(operador === "*"){
    var calcular = num1 * num2
    alert("A multiplicação é de: "+calcular)
}
else if(operador === "/"){
    var calcular = num1 / num2
    alert("A Divisão é de: "+calcular)
}
else {
    alert("Insira um operador válido!")
    location.reload();
}