
// inputField Function declar
function getInputFieldValueById (inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseInt(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}

// Income inputField Function declar
function getIncomeInputFieldValueById (inputIncomeId){
    const inputField = document.getElementById(inputIncomeId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseInt(inputFieldValueString);
    return inputFieldValue;
}

// textField Function declar
function getTextFieldElementById (textId){
    const textField = document.getElementById(textId);
    const textFieldElementString = textField.innerText;
    const textFieldElement = parseInt(textFieldElementString);
    return textFieldElement;
}

// set textFieldElement
function setTextFieldElementById (inputId, newValue){
    const setTextField = document.getElementById(inputId);
    setTextField.innerText = newValue;
}


// add calculate button and event handler
document.getElementById('calculate-btn').addEventListener('click', function(){
    // income, food, rent and clother inputField
    const incomeAmount = getIncomeInputFieldValueById('income-input');
    const foodAmount = getInputFieldValueById('food-input');
    const rentAmount = getInputFieldValueById('rent-input');
    const clotherAmount = getInputFieldValueById('clother-input');

    // get textField (expensesField)
    getTextFieldElementById('total-expenses');
    const expensesTotal = foodAmount + rentAmount + clotherAmount;

    // set TextField
    setTextFieldElementById('total-expenses', expensesTotal);

    // get textField (balanceField)
    getTextFieldElementById('total-balance');
    const totalBalance = incomeAmount - expensesTotal;

    // set textField (balanceField)
    setTextFieldElementById('total-balance', totalBalance);
});


// add save button and event handlar
document.getElementById('save-btn').addEventListener('click', function(){
    // incomeAmount
    const incomeAmount = getIncomeInputFieldValueById('income-input');
    const totalBalance = getTextFieldElementById('total-balance');
    // get inputField saveBalance
    const saveBalance = getInputFieldValueById('save-input');

    // get textField (saveBalanceField)
    getTextFieldElementById('save-amount');
    const saveTotalBalance = incomeAmount * saveBalance / 100;

    // set saveBalance
    setTextFieldElementById('save-amount', saveTotalBalance);

    // get TextField (remainnigBalanceField)
    getTextFieldElementById('remaining-balance');
    const remainingBalance = totalBalance - saveTotalBalance;

    // set remainingBalance
    setTextFieldElementById('remaining-balance', remainingBalance);
})