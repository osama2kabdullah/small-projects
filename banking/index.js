// main function 
function collborateBtn(inputId, BordId){
    const input = document.getElementById(inputId);
    const bord = document.getElementById(BordId)
    if(input.value > 0){
        bord.innerText = parseFloat(bord.innerText) + parseFloat(input.value);
        balanceBord();
    }
    input.value = '';
}
// balanceBord assign 
function balanceBord(){
    const balanceBord = document.getElementById('balance-bord');
    const dipositBord = document.getElementById('deposit-bord');
    const withdrawBord = document.getElementById('withdraw-bord');
    balanceBord.innerText = parseFloat(dipositBord.innerText);
    balanceBord.innerText = parseFloat( balanceBord.innerText) - parseFloat(withdrawBord.innerText);
}
// btn evenhandlr
document.getElementById('deposit-btn').addEventListener('click', function(){
        collborateBtn('Deposit-input', 'deposit-bord');
})
document.getElementById('withdraw-btn').addEventListener('click', function(){
    const input = document.getElementById('withdraw-input');
    const balanceBord = document.getElementById('balance-bord');
    if(balanceBord.innerText >= input.value){
        collborateBtn('withdraw-input', 'withdraw-bord');
    }
    input.value = '';
})
