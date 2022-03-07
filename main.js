var validate=0;

fetch('https://api.garantto.com/api/v1/pais')
    .then(response => response.json())
    .then(json => {
        console.log(json.length);
        json.forEach(element => {
            if(element.IdT==="CO"){
                pais(element);
                validate=1;
            } 
        });
        if(validate == 0){
            console.log("No hay registro");
        }
});

function pais(data) {
    fetch('https://api.garantto.com/api/v1/categoria?idPais= '+ data.Id  )
    .then(response => response.json())
    .then(json => {
        json.forEach(element => {
            element.Hijos.forEach(elementHijo => {
                if(elementHijo.IdT === "Televisor" || elementHijo.IdT === "Carro"){
                    console.log(element.Descripcion);
                    return;
                }
            });
        });
    });
}



