// vamos importar el archivo de la configuracionº

const lugar = require('./config/config');
const clima = require('./clima/clima');

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
// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log);

clima.getClima(40.67, -73.94)
    .then(console.log)
    .catch(console.log);

const getInfo= async(direccion) => {

    try {
        
        const coord = await lugar.getLugarLatLng(argv.direccion);
        //solicitamos la lat y lng
        const temperatura = await clima.getClima(coord.lat, coord.lng);
        return `El clima de ${coord.direccion} es de ${temperatura}`;
            
    } catch (error) {
        return `No se pudo determinar el clima ${direccion}`;
    }

    // el clima no se pudo determinar
}

getInfo(argv.direccion).then(console.log).catch(console.log);