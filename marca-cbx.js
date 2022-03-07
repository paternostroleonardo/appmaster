const $select = document.querySelector("#marca");
data = "";

fetch('https://api.garantto.com/api/v1/marca-cbx/')
.then(response => response.json())
.then(json => {
    data = json;
    json.forEach(element => {
        const option = document.createElement('option');
        option.value = element.Id;
        option.text = element.Marca;
        $select.appendChild(option);
    });
});

function showCity(){
    var cod = document.getElementById("marca").value;
    data.forEach(element => {
        if(element.Id == cod ){
            alert(element.IdCiudades.length);
        }
    });
}



