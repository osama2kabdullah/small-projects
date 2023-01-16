const input1 = document.getElementById('first-input');
const price1 = document.getElementById('price1');

const subTotal = document.getElementById('sub-total');
const tax = document.getElementById('tax');
const _total = document.getElementById('total-price')
// plus btn 
document.getElementById('first-plus-btn').addEventListener('click', function(){
  input1.value = parseFloat(input1.value) + 1;
  price1.innerText = (parseFloat(input1.value) * 132.43).toFixed(2);
  subTotal.innerText = (parseFloat(price1.innerText) + parseFloat(price2.innerText)).toFixed(2);
  tax.innerText = ((parseFloat(subTotal.innerText) * 4) / 100).toFixed(2);
  _total.innerText = (parseFloat(subTotal.innerText) + parseFloat(tax.innerText)).toFixed(2);
})
document.getElementById('first-minus-btn').addEventListener('click', function(){
  if(input1.value <= 1){
    return;
  }
  input1.value = parseFloat(input1.value) - 1;
  price1.innerText = (parseFloat(input1.value) * 132.43).toFixed(2);
  subTotal.innerText = (parseFloat(price1.innerText) + parseFloat(price2.innerText)).toFixed(2);
  tax.innerText = ((parseFloat(subTotal.innerText) * 4) / 100).toFixed(2);
  _total.innerText = (parseFloat(subTotal.innerText) + parseFloat(tax.innerText)).toFixed(2);
})

const input2 = document.getElementById('second-input');
const price2 = document.getElementById('price2');
document.getElementById('second-plus-btn').addEventListener('click', function(){
  input2.value = parseFloat(input2.value) + 1;
  price2.innerText = (parseFloat(input2.value) * 242.32).toFixed(2);
  subTotal.innerText = (parseFloat(price1.innerText) + parseFloat(price2.innerText)).toFixed(2);
  tax.innerText = ((parseFloat(subTotal.innerText) * 4) / 100).toFixed(2);
  _total.innerText = (parseFloat(subTotal.innerText) + parseFloat(tax.innerText)).toFixed(2);
})
document.getElementById('second-minus-btn').addEventListener('click', function(){
  if(input2.value <= 1){
    return;
  }
  input2.value = parseFloat(input2.value) - 1;
  price2.innerText = (parseFloat(input2.value) * 242.32).toFixed(2);
  subTotal.innerText = (parseFloat(price1.innerText) + parseFloat(price2.innerText)).toFixed(2);
  tax.innerText = ((parseFloat(subTotal.innerText) * 4) / 100).toFixed(2);
  _total.innerText = (parseFloat(subTotal.innerText) + parseFloat(tax.innerText)).toFixed(2);
})

subTotal.innerText = (parseFloat(price1.innerText) + parseFloat(price2.innerText)).toFixed(2);
tax.innerText = ((parseFloat(subTotal.innerText) * 4) / 100).toFixed(2);
_total.innerText = (parseFloat(subTotal.innerText) + parseFloat(tax.innerText)).toFixed(2);

// product hide functionality 
document.getElementById('img1').addEventListener('dblclick', function(){
  document.getElementById('frst-parent').style.display = 'none';
})
document.getElementById('img2').addEventListener('dblclick', function(){
  document.getElementById('second-parent').style.display = 'none';
})

// check out page click 
document.getElementById('check-out').addEventListener('click', function(){
  window.location.href='checkOut.html'
})
