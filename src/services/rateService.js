function addEventCalculate() {
    var mdr = document.getElementById('mdr').value
    var price = document.getElementById('price').value
    var instalments = document.getElementById('instalments').value
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
    var netPrice = math.evaluate(price - mdr)
    var portion = math.evaluate(netPrice / instalments)
    var firstPortion = math.evaluate(portion - rate)
    var half = portion - math.evaluate(rate / 30 * 15)
    var secondPortion = math.evaluate(portion - (rate * 2))
    var thirdPortion = math.evaluate(portion - (rate * 3))
    changePriceValue('tomorrow', math.evaluate(firstPortion + secondPortion + thirdPortion))
    changePriceValue('fifteenthDay', math.evaluate(half + secondPortion + thirdPortion))
    changePriceValue('thirtiethDay', math.evaluate(firstPortion + secondPortion + portion))
    changePriceValue('ninetiethDay', math.evaluate(portion * 3))
}

function changePriceValue(id, value) {
    document.getElementById(id).innerHTML = "R$" + value.toFixed(2).toString().replace('.', ',')
}
