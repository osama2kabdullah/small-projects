// spinner 
function spinner(type){
    document.getElementById('spinner-parent').style.display = type;
}
// error message
function error(message, condition = 'block') {
    const error = document.getElementById('error-msg');
    error.style.color = 'brown';
    error.style.display = condition;
    error.innerText = message;
}


// btn click 
document.getElementById('search-button').addEventListener('click', function () {
    
    // value wrapping 
    const searchKey = document.getElementById('input').value;

    // validation 
    if (searchKey != '') {
        // spinner('block');
        // api create 
        const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchKey}`;

        // fetch data 
        fetch(url)
            .then(res => res.json())
            .then(data => searchData(data.drinks))
        error('', 'none')
    } else {
        error('please type a name')
    }
})

// loop 
const searchData = data => {
    const body = document.getElementById('body');
    // body.textContent = '';
    if (data != null) {
        data.forEach(element => {
            // create new div 
            const div = document.createElement('div');
            // body.textContent = '';
            error('', 'none');
            div.innerHTML = `
            <div onclick="details('${element.idDrink}')" class="card" style="width: 18rem;">
                    <img class="card-img-top" src="${element.strDrinkThumb}" alt="Card image cap">
                      <h5 class="card-title">${element.strDrink}</h5>
            </div>
            `;
            body.appendChild(div);
        });
    } else {
        error('No result found')
    }
}

// show details btn 
function details(idLink) {
    // fetch url for full data 
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idLink}`)
        .then(res => res.json())
        .then(data => {
            showData(data.drinks[0]);
        })
}

// show data 
function showData(data) {
    // console.log(data);
    document.getElementById('full-details').style.display = 'block';
    document.getElementById('full-details').innerHTML = `
    <div class="card text-white bg-success mb-3" style="max-width: 18rem;">
                    <div class="card-header">Selected product details</div>
                    <div class="card-body">
                        <h5 class="card-title">${data.strDrink}</h5>
                        <p class="card-text">${data.strInstructions}</p>
                    </div>
                  </div> 
    `;
}