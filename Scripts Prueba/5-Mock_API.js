import http from 'k6/http';
import { check, group, sleep } from 'k6';

/*
Request URL: https://run.mocky.io/v3/9b36e049-d29a-4112-9b72-68a5020a39a0
Request Method: GET
Status Code: 200 OK
*/

export default function() {
let res = http.get('https://run.mocky.io/v3/9b36e049-d29a-4112-9b72-68a5020a39a0');

console.log(`response body lenght ${res.body.lenght}) for VU=${__VU} ITERA0 ${__ITER}`) //Virtual use nunber y clacular que usuario 
                                                                                       //hace cada iteracion y tamaño de la respuesta

    check(res, {
        'is status code 200': (res) => res.status === 200,
        'body size is 0 bytes ' : (res) => res.body.lenght === 0, // comparar tamaño de la respuesta
    })

};