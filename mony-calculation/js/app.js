const income = document.getElementById('income');
const food = document.getElementById('food');
const rent = document.getElementById('rent');
const cloths = document.getElementById('cloths');
const totalExpences = document.getElementById('total-expances');
const balance = document.getElementById('balance');
// calculate btn 
document.getElementById('calculate-btn').addEventListener('click', function(){
    const subTotal = parseFloat(food.value) + parseFloat(rent.value) + parseFloat(cloths.value);
    
    // validation 
    if(income.value > 0 && food.value > 0 && rent.value > 0 && cloths.value > 0 && subTotal <= income.value){
    totalExpences.innerText = parseFloat(food.value) + parseFloat(rent.value) + parseFloat(cloths.value);
    balance.innerText = parseFloat(income.value) - parseFloat(totalExpences.innerText);
    document.getElementById('error-message').style.display = 'none';
    }
    else{
        document.getElementById('error-message').style.display = 'block';
    }
})

// saving btn 
document.getElementById('saving-btn').addEventListener('click', function(){
    const parcentageInput = document.getElementById('parcentage');
    const savingAmount = document.getElementById('saving-amount');
    const savings = (parseFloat(parcentageInput.value) / 100) * parseFloat(income.value);
    const remainingBalance = document.getElementById('remaining-balance');
    
    // validation 
    if(savings <= balance.innerText && parcentageInput.value <= 100 && parcentageInput.value > 0){
        savingAmount.innerText = savings.toFixed(2);
        remainingBalance.innerText = (parseFloat(balance.innerText) - parseFloat(savingAmount.innerText)).toFixed(2);
        document.getElementById('error-saving').style.display = 'none';
    } else {
        document.getElementById('error-saving').style.display = 'block';
    }
})