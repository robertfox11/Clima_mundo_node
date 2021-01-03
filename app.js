// vamos importar el archivo de la configuracionº

const lugar = require('./config/config');

// yargs ofrece una opcion configurar argumento en un opcion
const  argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'direccion de la ciudad para obtener el clima',
        demand: 
        true
    }
}).argv;
// node app -d "Madrid España" > con esto nos mostrara Madrid españa que es la direccino 
// console.log(argv.direccion);
// Vamos a preparar la direccion de url 

// llamamos al metodo que queremos 
lugar.getLugarLatLng(argv.direccion)
    .then(console.log);