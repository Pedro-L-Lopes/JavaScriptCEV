/*
var nome = 'Crebin'
var idade = 25
var estaAprovado = true 
var sobrenome = undefined

//Objeto
var pessoa = {
	nome: 'Crebin',
	idade: 25,
	estaAprovado: true,
	sobrenome: undefined
}
*/

/*
//Arrays
var familia = [true, 20, 'Crebin', 78, 97]
//Mostrar o que está na pos 4 (Começa a contar do zero)
console.log(familia[4])
//Mostrar o numero de elemntos no array
console.log(familia.length)
*/

/*corSite = 'Azul'

function resetaCor(){
	corSite = ''
}

console.log(corSite)
resetaCor()
console.log(corSite)*/

//Passando parametros para uma função
/*
corSite = 'Azul'

function resetaCor(cor, tonalidade){
	corSite = cor + tonalidade
}

console.log(corSite)
resetaCor('verde ', 'claro')
console.log(corSite) */

//Realiza uma tarefa mas não devolve nada
/*
function dizerNome(){
	console.log('Crebin')
}
console.log(dizerNome)


//Função que realiza e devolve algo
function multiplicarpordois(valor){
	return valor * 2
}
//console.log(multiplicarpordois(15))
var resultado = multiplicarpordois(25)
console.log('O valor multiplicado por 2 é: ' + resultado)
*/

/*var idade = 18
//Vai atribuir só na proxima vez que for chamado(linha 67)
console.log(idade++)
console.log(idade)

//Já atribui o valor
console.log(++idade)
console.log(idade) */

/*
//Comparar valores e o tipo:
//Retornara True pois ambos são numbers e o mesmo numero
console.log(1 === 1)
//Retornara falso pos são tipos diferentes
console.log('1' === 1)

//Igualdade solta, compara os valores e converte para os tipos ficarem iguais (Não muito recomendado)
console.log('1' == 1) */

/*Operador ternario
//Caso os pontos forem maior que 100 tipo: Premium senão Tipo: Comum
var pontos = 150
//Compara para ver se pontos é maior que 100 e decide se mostra 'Premium' ou 'Comum'
var tipo = pontos > 100 ? 'Premium' : 'Comum'
console.log(tipo)*/

/*Operadores logicos

//E(&&) retorna True se os dois operandos forem True console.log(true && true)
var maiorIdade = true
var carteiraTrabalho = true
var podeAplicar = maiorIdade && carteiraTrabalho
console.log(podeAplicar)*/

/*OU ( || )
//Retorna true se um dos operandos forem true
var maiorIdade = true
var carteiraTrabalho = true
var podeAplicar = maiorIdade || carteiraTrabalho
console.log(podeAplicar)*/

/*NOT( ! )
var maiorIdade = false
var carteiraTrabalho = false
var podeAplicar = maiorIdade || carteiraTrabalho
var candidatoRecusado = !podeAplicar
console.log(candidatoRecusado) */

/*var a = 'Vermelho'
var b = 'Azul'

var c = a;
a = b;
b = c

console.log(a)
console.log(b)*/

/*if Else
var hora = 12

if(hora > 6 && hora < 12){
	console.log('Bom Dia!!')
}else if(hora >= 12 && hora < 18){
	console.log('Boa Tarde!!')
}else if(hora = 18 && hora < 24){
	console.log('Boa Noite!!')
}else if(hora >= 0 && hora < 6){
	console.log('Boa Madrugada!!')
}else{
	console.log('Hora Invalida.')
}*/

/*Switch.case
var permissao = 'Crebin' //gerente, diretor

switch(permissao){
	case 'comum':
	console.log('Usuario Comum.')
	break

	case 'gerente':
	console.log('Usuario gerente.')
	break

	case 'diretor':
	console.log('Usuario diretor.')
	break

	default:
		console.log('Usuario não reconhecido!')
} */

/*For | imprimindo impares
console.log('Os numeros impares são: ')
for(var i = 0; i<=5; i++){
	if(i % 2 !== 0){
		console.log(i)
	}
}*/

/*while
var i = 0

while(i <= 5){
	if(i % 2 !== 0){
		console.log(i)
	}
	i++
}*/

/*Do while
var i = 0

do{
	console.log('Digitando! ', i)
	i++
}while(i < 10)*/

/*For in
//Busca por um elemento no vetor
const pessoa = {
	nome: 'Crebin',
	idade: 25
}

for(let chave in pessoa){
	console.log(chave, pessoa['nome'])
}

const cores = ['Vermelho', 'Azul', 'Verde']

for(let indice in cores){
	console.log(indice, cores[indice])
}*/

/*For-of
const cores = ['Vermelho', 'Azul', 'Verde']

for(let cor of cores){
	console.log(cor)
}*/

/*function maiorValor(v1, v2){
	if(v1 > v2){
		maior = v1
	}else{
		maior = v2
	}
	return maior

	if(v1 > v2){
		return v1
	}
	return v2

	return v1 > v2 ? v1: v2
	
}

//var mvalor = maiorValor(5, 9)
console.log(maiorValor(5, 7)) */

//fizzBuzz
//Divisivel por 3 => Fizz
//Divisivel por 5 => Buzz
//Divisivel por 3 e 5 => FizzBuzz
//Não Divisivel por 3 e 5 => entrada
//Não é um numero valido => 'Não é um numero valido'

/*const resultado = fizzBuzz(15)
console.log(resultado)

function fizzBuzz(entrada){
	if(typeof entrada !== 'number')
		return 'Não é um numero'
	if(entrada % 3 === 0 && entrada % 5 == 0)
		return 'FizzBuzz'
	if(entrada % 3 === 0)
		return 'Fizz'
	if(entrada % 5 == 0)
		return'Buzz'
	return entrada
}*/

/*varificarVelocidade(130)

function varificarVelocidade(velocidade){
	const velocidadeMaxima = 70
	if(velocidade <= velocidadeMaxima)
		console.log('Velocidade dentro do permitido.')
	else if(velocidade > velocidadeMaxima && velocidade < 75)
		console.log('Acima do limite permitido!!')
	else{
		const pontos = Math.floor((velocidade - velocidadeMaxima) / 5)
			console.log('Acima do limite!! Pontos na carteira: ' + pontos)
		if(pontos >= 12)
			console.log('Carteira Suspensa')
	}
}*/

/*
exibirTipo(10)
function exibirTipo(limite){
	for(let i=0; i<=limite; i++){
		if(i % 2 === 0)
			console.log(i, 'PAR')
		else
			console.log(i, 'IMPAR')
	}
}*/

/*
const filme = {
	titulo: 'Vingadores',
	ano: 2019,
	diretor: 'Joe e Antony Russo',
	personagem: 'Tony Stark'
}
//Mostra apenas as string dentro de 'Filme
exibirPropiedade(filme)
function exibirPropiedade(obj){
	for(prop in obj)
		if(typeof obj[prop] ==='string')
			console.log(prop, obj[prop])
}*/


//Funções para a calculadora
function insert(num){
	var numero = document.getElementById('resultado').innerHTML
	document.getElementById('resultado').innerHTML = numero + num

}
function clean(){
	document.getElementById('resultado').innerHTML = ""
}
function back(){
		var resultado = document.getElementById('resultado').innerHTML
		document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)	
}
function calcular(){
	var resultado = document.getElementById('resultado').innerHTML
	if(resultado){
		document.getElementById('resultado').innerHTML = eval(resultado)
	}else{
		document.getElementById('resultado').innerHTML = 'Digite Algo'
	}
}









