// Creamos un o bjeto de axios 
const axios = require('axios'); 

//creamos una constante para obtener la latitud y longitud

const getLugarLatLng = async(address) =>{
    // const encoderUrl = encodeURI(argv.direccion);
    const encoderUrl = encodeURI(address);
    // console.log(encoderUrl); //convertira un url seguro con caracter especiales lo utilizamos es encoderurl como argumento

// Creamos un instacion para configurar
    const instance = axios.create({
        baseURL: `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${encoderUrl}`,
        headers: {'X-RapidAPI-Key': '66d0c18f96mshf59b25bb927d72ap1b2d31jsn4551756d6e4e'}
    });

    // hacemos la peticion que euremos hacer
    const resp =  await instance.get()
            // .then(res =>{
            //     console.log(res.data.data);
            // })
            // .catch(err => {
            //     console.log('Error ', err);
            // })

    // si la respuesta es vacia
    if (resp.data.data.length == 0){
        throw new Error(`no hay resultados para la direccion ${direccion}`);
    }

    const data = resp.data.data[0];
    // console.log("esto es la data",data);
    const direccion = data.name;
    const lat = data.latitude;
    const lng =  data.longitude;
    return {
        direccion, 
        lat, 
        lng
    }

}
// exportamos la longitud y latitude
module.exports = {
    getLugarLatLng
}