function Converter() {

    var valorEmDolar = document.getElementById("valor").value;
    valorEmReal = fazConversao(valorEmDolar);
    exibirResultado(valorEmReal);
}

function fazConversao(valorEmDolar) {

    buscarCotacao().then(valor => {
        valor = valor.USDBRL.high;

        return exibirResultado(parseFloat(valor.USDBRL.high) * parseFloat(valorEmDolar));
    });
}

function exibirResultado(valor) {

    document.getElementById("valorConvertido").innerHTML = valor;
}



const buscarCotacao = () => {
    // awesomeapi
    return fetch("http://economia.awesomeapi.com.br/json/last/USD-BRL", {
            method: "GET"
        })
        .then(resposta => {
            return resposta.json();
        })
        .then(json => {
            return json;
        });
};