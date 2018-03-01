// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    var H = 50;
    var Q = 25;
    var D = 10;
    var N = 5;
    var P = 1;
    var exchange = {};
    if (currency > 10000) {
        exchange.error = "You are rich, my friend! We don't have so much coins for exchange";
    }
    else {
        if (currency >= 50) {
            exchange.H = Math.floor(currency / H);
            currency = currency - exchange.H * 50;
        }
        if (currency < 50 && currency >= 25) {
            exchange.Q = Math.floor(currency / Q);
            currency = currency - exchange.Q * 25;
        }
        if (currency < 25 && currency >= 10) {
            exchange.D = Math.floor(currency / D);
            currency = currency - exchange.D * 10;
        }
        if (currency < 10 && currency >= 5) {
            exchange.N = Math.floor(currency / N);
            currency = currency - exchange.N * 5;
        }
        if (currency < 5 && currency > 0) {
            exchange.P = Math.floor(currency / P);
            currency = currency - exchange.P * 1;
        }
    }
    return exchange;
}
