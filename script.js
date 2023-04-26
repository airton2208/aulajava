//1 
//a) O que vai ser impresso no console?
    //vai ser impresso o restulado da multiplicação dos numeros por 5;

//b) O que aconteceria se retirasse os dois console.log e simplesmente invocasse 
//a função minhaFuncao(2) e minhaFuncao(10)? O que apareceria no console?
    //Não aparecia nada.

//------------------------------------------------------------------------------------

/* 2
a) a. Explique o que essa função faz e qual é sua utilidade
    //Ela vai receber um texto e se no texto e vai retornar o texto to minúsculo e se tiver 
    // a palavra cenoura no texto ela vai retornar se é falso ou verdadeiro.

b) Determine qual será a saída no console para cada uma das 3 entradas do usuário:
     i.   Eu gosto de cenoura - true
     ii.  CENOURA é bom pra vista - true
     iii. Cenouras crescem na terra - true*/

//---------------------------------------------------------------------------------

/*Exercícios de escrita de código 
1 - a)*/

/*function imprimirTexto() {
    console.log("Eu sou airton, tenho 28 anos, moro no Rio Grande do sul , mecanico.");
}

imprimirTexto();*/

//b)

/*let nome = "airton";
let idade = 28;
let cidade = "são leopoldo"
let profissao = "mecanico"

function imprimirTexto2(){
    console.log("Eu sou "+ nome + ", tenho " + idade + ", moro em " + cidade + " e sou " + profissao);
}

imprimirTexto2();*/

// 2

/*a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, 
faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.*/

/*num1 = 10;
num2 = 32;

function somarNum(){
    console.log(num1 + num2);
}

somarNum();*/

//b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é maior ou igual ao segundo.

/*numb1 = 4;
numb2 = 8;

function oitomaiorquequatro() {
    console.log(condicao = numb1 >= numb2);
}

oitomaiorquequatro();*/

//c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

//d) Faça uma função que recebe uma mensagem (string) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.
function mensagem(texto){
    return texto.toUpperCase() + ' - ' + texto.length;
}
console.log(mensagem('vamos inter'))
//num = 13;

//function parouimpar(){
    //if (num % 2){
        //console.log("")
  //  }
//}

//parouimpar();
