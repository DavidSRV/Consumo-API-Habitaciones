import {Servidor} from './Server/Servidor.js'

//IMPORTAMOS DOTENV PARA MANIPULAR LAS VARIABLES DE ENTORNO
import 'dotenv/config'

//PARA UTILIZAR UNA CLASE LA DEBO INSTANCIAR
//PARA USAR UNA CLASE DEBO CREAR UN OBJETO (ES UNA VARIABLE)
//PÁRA USAR UNA CLASE LE DEBO SACAR COPIA
let servidorComfama=new Servidor()

//enciendo el servidor
servidorComfama.encenderServidor()

console.log(process.env.PORT) // elimina esto después de que hayas confirmado que funciona 

