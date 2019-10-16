var frase = $(".frase").text();
var numPalavras = frase.split(" ").length;
var tamanhaFrase = $("#tamanho-frase");
tamanhaFrase.text(numPalavras);


console.log(numPalavras);    
