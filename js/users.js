function loadData() {

    fetch("https://jsonplaceholder.typicode.com/users").then(
        response => {
            response.json().then(
                data => {
                    console.log(data);

                    if (data.length > 0) {
                        var temp = "";

                        data.forEach((user) => {
                            temp += "<tr>";
                            temp += "<td>" + user.id + "</td>"
                            temp += "<td>" + user.name + "</td>"
                            temp += "<td>" + user.username + "</td>"
                            temp += "<td>" + user.email + "</td>"
                            temp += "<td>" + user.address.city + "</td>"
                            temp += "<td>" + user.phone + "</td>"
                            temp += "<td>" + user.website + "</td>"
                            temp += "<td>" + user.company.name + "</td>"
                        })

                        document.getElementById("data").innerHTML = temp

                    }
                }
            )
        }
    )
}

function oxygenSearch() {
    var input, filter, table, tr, tdName, i, txtValue;
    input = document.getElementById("oxygenInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("data");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        tdName = tr[i].getElementsByTagName("td")[1];

        if (tdName) {
            txtValue = tdName.textContent || tdName.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "block";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}