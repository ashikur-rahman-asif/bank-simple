document.getElementById('btn-deposit').addEventListener('click', function () {
    // step:2 get the deposit value into deposit field 
    const depositField = document.getElementById('deposit-field')
    const newDepositAmountString = depositField.value
    const newDepositAmount= parseFloat(newDepositAmountString)
    // console.log(newDepositAmount)
    
    // step:3 get the deposit total

    const depositTotalElement = document.getElementById('deposit-total')
    const previousDepositTotalString = depositTotalElement.innerText
    const previousDepositTotal= parseFloat(previousDepositTotalString)
    
    
    const currentDepositTotal = previousDepositTotal + newDepositAmount
    depositTotalElement.innerText = currentDepositTotal
   
    const balanceTotalElement= document.getElementById('balance-total')
    const previousBalanceTotalString = balanceTotalElement.innerText
    const previousBalanceTotal = parseFloat(previousBalanceTotalString)
    
    // calculate total balance 
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount
    balanceTotalElement.innerText=currentBalanceTotal
        
        
        
        
        depositField.value =''
})