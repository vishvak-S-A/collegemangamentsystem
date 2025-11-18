function addStudent() {
    let name = prompt("Enter student name:");
    let program = prompt("Enter program:");
    let year = prompt("Enter year:");
    if(name && program && year){
        let table = document.getElementById("studentTable");
        let row = table.insertRow();
        row.innerHTML = `<td>${Math.floor(Math.random()*900)+100}</td>
                         <td>${name}</td>
                         <td>${program}</td>
                         <td>${year}</td>`;
    }
}
