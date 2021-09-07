const sum = (a,b) => {
    return a + b
}

const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    // convertimos el valor a dolares
    let dolarEuro = valueInDollar / 1.2;
    let valueInYen = dolarEuro * 127.9;
    // retornamos el valor
    return valueInYen;
}

const fromYenToPound = function(valueInYen){
    // convertimos el valor a dolares
    let yenEuro = valueInYen / 127.9;
    let valueInPound = yenEuro * 0.8;
    // retornamos el valor
    return valueInPound;
}


module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }
