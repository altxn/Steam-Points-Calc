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
            // 118 points for every 1 EUR you spend
            pointsToCurrency = 118;
            break;
        case "NOK":
            // 100 points for every 10 NOK you spend
            pointsToCurrency = 100 / 10;
            break;
        default:
            alert("Select currency from the dropdown list.");
            return;
    }
    if (isNaN(moneyToConvert)) {
        alert("Enter a valid number.");
    } else if (moneyToConvert >= 0) {
        const points = pointsToCurrency * moneyToConvert;
        $("#amountinfo").text("You get " + points + " Steam Points");
    }
}