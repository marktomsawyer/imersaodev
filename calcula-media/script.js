var final;

function leNotas() {
    var notas = [];

    for (var i = 1; i < 5; i++) {
        notas.push(document.getElementById('nota' + i).value);
    }

    return notas;
}

function somaNotas() {
    var notas = leNotas();
    var somaNotas = 0;

    notas.forEach(function(nota) {
        somaNotas += parseInt(nota);
    });
    console.log(somaNotas);
    return somaNotas;
}


function calculaMedia() {
    var notaFinal = 0;
    var soma = somaNotas();
    notaFinal = soma / 4;

    return notaFinal;
}

function exibeMedia() {
    var media = calculaMedia();
    document.getElementById("valorMedia").innerHTML = media.toFixed(1);
}