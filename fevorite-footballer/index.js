// press Enter for search 
const input = document.getElementById('input');
input.addEventListener('keypress', function(event){
    if(event.key === 'Enter'){
        searchBtn();
    }
})
// btn clcik 
function searchBtn() {
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${input.value}`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            const players = data.player;
            if (players != null && input.value != '') {
                // loop 
                mainDiv.textContent = '';
                for (const player of players) {
                    displayData(player)
                }
                document.getElementById('no-players').style.display = 'none';
                document.getElementById('no-input').style.display = 'none';
            } else if(input.value == ''){
                document.getElementById('no-input').style.display = 'block';
            }
            else {
                mainDiv.textContent = '';
                // showing none 
                document.getElementById('no-players').style.display = 'block';
                document.getElementById('no-input').style.display = 'none';
                console.log("kisu nai");
            }

            //input clear and show keyWord
            document.getElementById('resultFor').innerText = input.value;
            input.value = '';
        })
}
const mainDiv = document.getElementById('mainDiv');
// display data in ui 
function displayData(player) {

    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
    <div class="card h-100">
                    <img src="${player.strThumb}" class="card-img-top" alt="${player.strPlayer}'s image not found">
                    <div class="card-body">
                        <h5 class="card-title">${player.strPlayer}</h5>
                        <p class="card-text">Country: ${player.strNationality}<br>
                        Date of Birth: ${player.dateBorn}</p>
                        <button class="btn btn-primary">Know More</button>
                    </div>
                </div>
    `;
    mainDiv.appendChild(div);
}