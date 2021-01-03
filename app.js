// Creamos un o bjeto de axios 
const axios = require('axios'); 

// yargs ofrece una opcion configurar argumento en un opcion

const argv = require('yargs').options({
    direccion:{
        alias: 'd',
        desc: 'direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;
// node app -d "Madrid España" > con esto nos mostrara Madrid españa que es la direccino 
console.log(argv.direccion);
// Vamos a preparar la direccion de url 

const encoderUrl = encodeURI(argv.direccion);
console.log(encoderUrl); //convertira un url seguro con caracter especiales lo utilizamos es encoderurl como argumento

// Creamos un instacion para configurar
const instance = axios.create({
    baseURL: `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${encoderUrl}`,
    headers: {'X-RapidAPI-Key': '66d0c18f96mshf59b25bb927d72ap1b2d31jsn4551756d6e4e'}
  });

// hacemos la peticion que euremos hacer
instance.get()
        .then(res =>{
            console.log(res.data.data);
        })
        .catch(err => {
            console.log('Error ', err);
        })