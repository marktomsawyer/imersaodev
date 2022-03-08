function converteCelsiusFahrenheit(temperaturaCelsius) {
  return (temperaturaFahrenheit = (9 * temperaturaCelsius + 160) / 5);
}

function converteFahrenheitCelsius(temperaturaFahrenheit) {
  return (temperaturaCelsius = (5 * temperaturaFahrenheit - 160) / 9);
}

function converteCelsiusKelvin(temperaturaCelsius) {
  return (temperaturaKelvin = temperaturaCelsius - 273);
}

function converteKelvinCelsius(temperaturaKelvin) {
  return (temperaturaCelsius = temperaturaKelvin + 273);
}

function converteFahrenheitKelvin(temperaturaFahrenheit) {
  return (temperaturaKelvin = converteCelsiusKelvin(
    converteFahrenheitCelsius(temperaturaFahrenheit)
  ));
}

function converteKelvinFahrenheit(temperaturaKelvin) {
  return (temperaturaFahrenheit = converteCelsiusFahrenheit(
    converteKelvinCelsius(temperaturaKelvin)
  ));
}

function leDados() {
  var temperatura = document.getElementById("temperatura").value;
  var escala = document.querySelector('input[name = "escala"]:checked').value;

  var dados = [temperatura, escala];

  return dados;
}

function converteTemperatura() {
  var dados = leDados();
  var celsius = 0;
  var kelvin = 0;
  var fahrenheit = 0;

  temperatura = dados[0];

  switch (dados[1]) {
    case "celsius":
      celsius = temperatura;
      kelvin = converteCelsiusKelvin(temperatura);
      fahrenheit = converteCelsiusFahrenheit(temperatura);
      break;
    case "kelvin":
      celsius = converteKelvinCelsius(temperatura);
      kelvin = temperatura;
      fahrenheit = converteKelvinFahrenheit(temperatura);
      break;
    case "fahrenheit":
      celsius = converteFahrenheitCelsius(temperatura);
      kelvin = converteFahrenheitKelvin(temperatura);
      fahrenheit = temperatura;
      break;

    default:
      break;
  }

  return (conversao = [celsius, kelvin, fahrenheit]);
}

function exibeResultado() {
  var resultado = converteTemperatura();

  document.getElementById("temp-celsius").innerHTML = resultado[0];
  document.getElementById("temp-kelvin").innerHTML = resultado[1];
  document.getElementById("temp-fahrenheit").innerHTML = resultado[2];
}
