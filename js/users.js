function loadData() {

fetch("https://jsonplaceholder.typicode.com/users").then(
    response=>{
        response.json().then(
            data=>{
                console.log(data);

                if(data.length > 0){
                    var temp = "";

                    data.forEach((user) => {
                        temp += "<tr>";
                        temp += "<td>"+user.id+"</td>"
                        temp += "<td>"+user.name+"</td>"
                        temp += "<td>"+user.username+"</td>"
                        temp += "<td>"+user.email+"</td>"
                        temp += "<td>"+user.address.city+"</td>"
                        temp += "<td>"+user.phone+"</td>"
                        temp += "<td>"+user.website+"</td>"
                        temp += "<td>"+JSON.stringify(user.company)+"</td>"                        
                    })

                    document.getElementById("data").innerHTML = temp

                }
            }
        )
    }
)
}