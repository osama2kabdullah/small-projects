// all button catch 
const buttons = document.getElementsByClassName('Number');
// catch sapcific button 
// catch input 
const _bord = document.getElementById('bord');
for (let button of buttons) {
    // add event handlr in button 
    button.addEventListener('click', function () {
        _bord.value = _bord.value + button.innerText;
    })
}
// clear button
document.getElementById('clear').addEventListener('click', function () {
    // crate emty input field 
    _bord.value = '';
})
// equal event handlr
document.getElementById('equal').addEventListener('click', function(){
    // result showing bord 
    let bord = document.getElementById('spanBord');
    // eval method using 
    bord.innerText = eval(_bord.value);
    
})