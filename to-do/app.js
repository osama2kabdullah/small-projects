var Name = document.getElementById("name");
var Class = document.getElementById("class");
var section = document.getElementById("section");
var subject = document.getElementById("subject");
var btn = document.getElementById("sub")
var tb = document.getElementById("tbody")
var newRow = document.createElement("tr");

btn.addEventListener("click", function(e) {
    e.preventDefault();
    
    if (Name.value == ' ' && Class.value == ' ' && section.value == ' ' && subject.value == ' ') {
        
    }
    else {
        var newName = document.createElement('td');
    newRow.appendChild(newName);
    newName.innerHTML = Name.value;
    
    var newClass = document.createElement('td');
    newRow.appendChild(newClass);
    newClass.innerHTML = Class.value;
    
    var newSection = document.createElement('td');
    newRow.appendChild(newSection);
    newSection.innerHTML = section.value;
    
    var newSubject = document.createElement('td');
    newRow.appendChild(newSubject);
    newSubject.innerHTML = subject.value;
    
    
    tb.appendChild(newRow);
}
    
})

