import http from 'k6/http';
import { check, group, sleep } from 'k6';
import {Rate} from 'k6/metrics';

//exportamos la variable que usaremos en el test
export let errorRate = new Rate ('errors')

export let options =  {

thresholds:{
   errors: ['rate<0.1']// porcentage de error menor al 10%
  
}

}

export default function() {
let res = http.get('https://run.mocky.io/v3/5e428f08-25a2-45a7-9b56-cdbabd6c0b9c');

console.log(`response body lenght ${res.body.length} for VU=${__VU} ITERA0 ${__ITER}`) //Virtual use nunber y clacular que usuario 
                                                                                       //hace cada iteracion y tamaño de la respuesta

    const check1= check(res, {
        'is status code 200': (res) => res.status === 200,
        'body size is 32 bytes ' : (res) => res.body.length === 32, // comparar tamaño de la respuesta
    })

errorRate.add (!check1);// no 200 o no tamaño de la respuesta
};