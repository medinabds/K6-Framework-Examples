import http, { post } from 'k6/http';
import { check, group, sleep } from 'k6';
import {Rate} from 'k6/metrics';
import { findBetween } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';

/*
{
"Mensaje" : "Todo Correcto"
}
*/

//Creamos una API get con variables
export default async function() {
    var url = 'https://run.mocky.io/v3/d92c2cf6-d2e8-439f-bf21-e521d39a4ef5'
    
    const headerParam = {
            headers:{
                'Content-Type': 'application/json',
            }
        }

                const res = await http.get(url,headerParam);
                
                ////********Vamos a capturar una cabecera*******/////
                // console.log('response: ', res)
                // const cabecera = findBetween(res, '"Content-Type":"', ';');
                // console.log ('La cabecera captura es', cabecera);





                ///////*******Vamos a capturar parte del body *************///////
                //vamos a validar la respuesta del JSON
               let body = JSON.parse(res.body);  // guardarmos la respuesta en la variable body
                console.log(body);
                
                
                //console.log(`response body is ${body}`) 
                console.log(`response body is ${body.Apellido}`)  //Sacamos por pantalla uno de los parametros del body    
                console.log(`response body is ${JSON.stringify(body)}`) // Sacamos por pantalla el body completo

                ///////*******Vamos a capturar parte del body *************///////
                //const title = findBetween(res.body, 'Nombre', 'Diego');
                
                const title = findBetween(res.body, 'Nombre" : "', '",');
                console.log ('La captura de datos es', title);

                const { Nombre, Apellido } = res.body;

                //console.log(res.body.Nombre)
                console.log(Nombre)


                //const res2 = http.get('https://pokeapi.co/api/v2/pokemon/'+Nombre)
                

                check(title, {
                    'Del body El nombre es, ': (t) => t === 'Diego',
                    'Del body El nombre es, ': (t) => t === 'Diego',

             
                 });

            }