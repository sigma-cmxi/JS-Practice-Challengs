function main() {
    let num1 = 8
    let num2 = 2
    let sumEl = document.getElementById("sum-el")
    
    document.getElementById("num1-el").textContent = num1
    document.getElementById("num2-el").textContent = num2
    
    function add() {
        sumEl.textContent = num1 + num2
        console.log(sumEl)
    }
    
    function subtract() {
        sumEl.textContent = num1 - num2
        console.log(sumEl)
    }
    
    function divide() {
        sumEl.textContent = num1 / num2
        console.log(sumEl)
    }
    
    function multply() {
        sumEl.textContent = num1 * num2
        console.log(sumEl)
    }
    
    add()
    subtract()
    divide()
    multply()
}