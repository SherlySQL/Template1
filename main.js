
function Api1 () {
    let api1 ="https://randomuser.me/api/"

    fetch(api1) //URL
    .then(response => response.json()) //Formato sepador por funcion de flecha =>
    .then(data =>{

    alert((JSON.stringify(data)))//la data es la promesa que les cumplio el API

    })
}



function Api2 () {
    let api2 ="https://pokeapi.co/api/v2/pokemon/25"

    fetch(api2) //URL
    .then(response => response.json()) //Formato sepador por funcion de flecha =>
    .then(data =>{
        //para pintar una imagen de una appi
        let poke = data.sprites.back_default //Url de la imagen
        let img = document.getElementById ("miimagen").src = poke //atributos value, innerhtml, src, readonly, required
        //Si es un objeto acceso con puntos...


        //alert((JSON.stringify(data)))//la data es la promesa que les cumplio el API    

    } )
}



function Api3 () {
    let api3 ="https://jsonplaceholder.typicode.com/todos/"

    fetch(api3) //URL
    .then(response => response.json()) //Formato sepador por funcion de flecha =>
    .then(data =>{
        console.log (data)
       //alert((JSON.stringify(data)))//la data es la promesa que les cumplio el API

       console.log (data[13])
       //Si es un array accedo con [#indice]
       
        
   //});
        
    })
}