const randomInput = document.getElementById('random-input');
// generate random pin and set it as input value 
document.getElementById('generate-btn').addEventListener('click', function myRandom(){
    
    var y = Math.ceil(Math.random() * 10000);
    var x = y + '';
    if(x.length == 4){
        randomInput.value = x;
    } else{
        myRandom();
    }
})


// key pad 
const keyPadInput = document.getElementById('keyPad-Input');
document.getElementById('pad-body').addEventListener('click', function(event){
    var x = event.target.innerText;
    if(x == 'C'){
        keyPadInput.value = '';
    } else if(x != 'C' && x != '<'){
        keyPadInput.value += x;
    }
})

// submit button 
const errorMsg = document.getElementById('error');
const successMsg = document.getElementById('success');
function matchBtn(){
    if(randomInput.value == keyPadInput.value){
        successMsg.style.display = 'block';
        errorMsg.style.display = 'none';
    }else {
        errorMsg.style.display = 'block';
        successMsg.style.display = 'none';
    }
}