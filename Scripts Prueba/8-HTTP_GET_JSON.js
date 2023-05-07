import http from 'k6/http';
import { check, group, sleep } from 'k6';
import {Rate} from 'k6/metrics';

/*
{
"Mensaje" : "Todo Correcto"
}
*/

//Creamos una API get con variables
export default function() {
    var url = 'https://run.mocky.io/v3/ba7a5e5f-bfdb-46b4-af05-06a3cfb1552d'
    var headerParam = {
            headers:{
                'Content-Type': 'application/json',
            }
        }
                const response = http.get(url,headerParam)
                
                check(response, {    //Chequeamos que la respuesta es un 200
                        'is status code 200': (r) => r.status === 200
                    })

                //vamos a validar la respuesta del JSON
                let body = JSON.parse(response.body)  // guardarmos la respuesta en la variable body
                
                console.log(`response body is ${body}`) 
                console.log(`response body is ${body.Mensaje}`)  //Sacamos por pantalla uno de los parametros del body    
                console.log(`response body is ${JSON.stringify(body)}`) // Sacamos por pantalla el body completo


                //const check1=
                 check(response, {
                    'El mensaje es correcto': (r) => JSON.parse(response.body).Mensaje === 'OK',
                })

            }