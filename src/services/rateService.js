function addEventCalculate() {
    var mdr = Number(document.getElementById('mdr').value)
    var price = Number(document.getElementById('price').value)
    var instalments = Number(document.getElementById('instalments').value)
    if (instalments > 12) {
        document.getElementById('instalments').value = 12
        instalments = 12
    }
    if (mdr && price && instalments) {
        calculate(mdr, price, instalments)
    }
}

function calculate(mdr, price, instalments) {
    var rate = 1.92
    var netPrice = price - mdr
    var portion = math.evaluate(netPrice / instalments)
    console.log(math.evaluate(netPrice / instalments))
    var firstPortion = portion - rate
    var half = portion - (rate / 30 * 15)
    var secondPortion = portion - (rate * 2)
    var thirdPortion = portion - (rate * 3)
    changePriceValue('tomorrow', (firstPortion + secondPortion + thirdPortion))
    changePriceValue('fifteenthDay', (half + secondPortion + thirdPortion))
    changePriceValue('thirtiethDay', (firstPortion + secondPortion + portion))
    changePriceValue('ninetiethDay', portion * 3)
}

function changePriceValue(id, value) {
    document.getElementById(id).innerHTML = "R$" + value.toFixed(2).toString().replace('.', ',')
}
