// ========================================================
// CRIANDO UM BOTÃO
// ======================================================
function clique_aqui()
{
    document.getElementById("Agradecimento").innerHTML = "obrigado por clicar"; // O innerHTML permite inserir um html ou um texto
    //console.log(document.getElementById("Agradecimento")); // manipula qualquer elemento do html graças ao DOM
    //alert("Obrigado por clicar");
}
function clique_la()
{
    //alert("falow"); // vai aparecer a mensagem antes de ser redirecionado para outra página
    //window.open("https://www2.correios.com.br/sistemas/rastreamento/"); // abre o site em outra aba
    //window.location.href = "https://www2.correios.com.br/sistemas/rastreamento/"; // abre o site na mesma aba
}

function trocar(elemento)
{
    elemento.innerHTML = "Obrigado por passar o mouse";
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento)
{
    elemento.innerHTML = "Passe o mouse aqui";
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    //alert("trocar texto");
}

function load()
{
    alert("página carregada");
}

function funcaochange(elemento)
{
    console.log(elemento.value)
}
// ========================================================
// FUNÇÕES
// ========================================================
//function soma (n1,n2)
//{
//    return n1 + n2;
//}
//alert(soma(3,2));

// ========================================================
// DATA
// ========================================================
//var d = new Date();
//console.log(d.getSeconds());

// ========================================================
// LAÇOS DE REPETIÇÃO
// ========================================================
/* USANDO O FOR
var count;
for (count = 1; count <= 5; count++)
{
alert(count);
console.log(count)
};
*/

//USANDO O WHILE

/*
var count = 0;
while (count <= 5 )
{
    console.log(count);
    alert(count);
    count++;
}
*/


// ========================================================
// CONDICIONAIS
// ========================================================
/*
var idade = prompt("Digite sua idade: ");
if (idade >= 18) {
    console.log("DE MAIOR");
}
else {
    console.log("DE MENOR");
}
*/

// ========================================================
// LISTA DE DICIONARIOS
// ========================================================
/*
var frutas = [{ nome: "maça", cor: "vermelha" }, { nome: "abacate", cor: "verde" }, { nome: "pequi", cor: "amarelo" }];
console.log(frutas);
*/
// ========================================================
// DICIONARIO
// ========================================================
/*
var fruta = {nome:"maça", cor: "vermelha"};
 console.log(fruta.cor);
 alert(fruta.cor + fruta.nome);
*/
// ========================================================
// ARRAY
// ========================================================
/*
var lista = ["maça", "pera", "laranja", "uva", "abacaxi"];
lista.push("cereja"); // adiciona a cereja a lista de frutas
lista.pop("uva"); //remove o último elemento da lista
console.log(lista[1]); // sinaliza que só era para aparecer no console a pera, por que ela está na posição zero
console.log(lista.length); //mostra o tamanho da lista
console.log(lista); //mostra a lista de forma ordenada
console.log(lista.reverse()); //mostra a lista de forma reversa
console.log(lista.toString()); // mostra a lista como string e perde a referência do array
console.log(lista.join(" - ")); // serve para usar espaçamento com | - ou qualquer outra coisa
*/



// ========================================================
// VARIÁVEIS E STRING
// ========================================================
/*
var nome = "Robson P Coutinho";
var idade = 32;
var idade2 = 3
var frase = "japao é o melhor time do mundo";
alert ("Seja Bem Vindo \n" + nome + "\nVocê que tem: " + idade + "anos" );
alert (idade + idade2);

console.log(nome);
console.log(idade + idade2);
console.log(frase);
console.log(frase.replace("japao","brasil"));
console.log(frase.toUpperCase("japao","brasil")); //passa toda a frase para maiúsculo
console.log(frase.toLowerCase("japao","brasil")); //passa toda a frase para minúsculo
*/