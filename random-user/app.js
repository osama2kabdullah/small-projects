function loadAnUser(datas) {
    fetch('https://randomuser.me/api/?results=50')
        .then(res => res.json())
        .then(datas => {
            console.log(datas);
            const Fulldata = datas.results;
            for(const data of Fulldata){
                UIfunction(data)
            }
        })
}

const UIfunction = data => {
    document.getElementById('main-div').innerHTML = `
    <img class="rounded-circle" src="${data.picture.large}"/>
    <h3 class="name">${data.name.title} ${data.name.first} ${data.name.last}</h3>
    <div style="text-align: left">
    <p>Phone: ${data.cell}</p>
    <p>Email: ${data.email}</p>
    <p>Gender: ${data.gender}</p>
    <p>Age: ${data.registered.age}</p>
    </div>
    `
    
}