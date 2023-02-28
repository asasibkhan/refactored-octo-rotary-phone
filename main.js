// loginBtn event hendler
const loginBtn = document.getElementById("login")
loginBtn.addEventListener('click', function(){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none"
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block"
    
    
}) 
const dipositBtn = document.getElementById("addDeposit")
dipositBtn.addEventListener("click", function (){
    const depositAmount = document.getElementById("depositAmount").value;
    const depositNumber = parseFloat(depositAmount)
    const carrentDeposit = document.getElementById("carrentDeposit").innerText
    const carrentDepositNumber = parseFloat(carrentDeposit)
    const totalDeposit = depositNumber + carrentDepositNumber
    document.getElementById("carrentDeposit").innerText = totalDeposit;
    document.getElementById("depositAmount").value = ""
}) 
