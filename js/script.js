function calculate() {
    const moneyToConvert = parseFloat($("#amount").val());
    const currency = $("#currency").val();

    let pointsToCurrency;
    switch (currency) {
        case "USD":
            // 100 points for every 1 USD you spend
            pointsToCurrency = 100;
            break;
        case "EUR":
            // 108 points for every 1 EUR you spend
            pointsToCurrency = 108;
            break;
        case "NOK":
            // 100 points for every 10 NOK you spend
            pointsToCurrency = 100 / 10;
            break;
        case "TL":
            // 100 points for every 10 NOK you spend
            pointsToCurrency = 5;
            break;
        case "ARS":
            // 100 points for every 10 NOK you spend
            pointsToCurrency = 53 / 100;
            break;
        default:
            alert("Select currency from the dropdown list.");
            return;
    }
    if (isNaN(moneyToConvert)) {
        alert("Enter a valid number.");
    } else {
        const points = pointsToCurrency * moneyToConvert;
        $("#amountinfo").text("You get " + points + " Steam Points");
    }
}