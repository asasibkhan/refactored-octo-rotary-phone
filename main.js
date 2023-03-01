// loginBtn event hendler
const loginBtn = document.getElementById("login")
loginBtn.addEventListener('click', function(){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none"
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block"
    
    
}) 

// deposit button event hendler
const dipositBtn = document.getElementById("addDeposit")
dipositBtn.addEventListener("click", function (){
    const depositNumber = getInputNumber("depositAmount")
    updateSpanText("carrentDeposit", depositNumber)
    updateSpanText("carrentBlance", depositNumber)
    document.getElementById("depositAmount").value = ""
}) 
function updateSpanText(id, depositNumber){
    const carrent = document.getElementById(id).innerText
    const carrentNumber = parseFloat(carrent)
    const total = depositNumber + carrentNumber;
    document.getElementById(id).innerText = total;
}




// withdraw button event hendler
const withdrawBtn = document.getElementById("withdraw")
withdrawBtn.addEventListener("click", function (){
    const withdrawNumber = getInputNumber("withdrawAmount")
    updateSpanText("carrentwidthdraw", withdrawNumber)
    updateSpanText("carrentBlance", -1 * withdrawNumber)

    
    document.getElementById("withdrawAmount").value = ""
})
function getInputNumber(id){
    const withdrawAmount = document.getElementById(id).value;
    const withdrawNumber = parseFloat(withdrawAmount)
    return withdrawNumber;
}


