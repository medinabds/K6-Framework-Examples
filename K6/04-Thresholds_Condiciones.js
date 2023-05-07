import http from 'k6/http';
import {Rate} from 'k6/metrics'

/*
export const options = {
  stages: [
    { duration: '10s', target: 10 },// un minuto y subo hasta 10 usuarios
    { duration: '5s', target: 10 },// un minuto y me mantengo en 10 usuarios
    { duration: '5s', target: 0 },// un minuto y bajo a 0
  ],
 // thresholds: { http_req_duration: ['avg<100', 'p(95)<200'] }, //condiciones umbrales; media menor de 100 y percentil95 menor de 200
 //rps: 10,// para limitar las limitaciones por segundo
};
*/


/*
export let options = {

    thresholds: { http_req_duration: ['avg<300', 'p(95)<300'] },
}
*/

const failureRate = new Rate('failed requests')

export const options = {

    thresholds: {
        'http_req_duration' : ['avg<300', 'p(99)<300'],
        'http_req_waiting': ['avg<900'],
        'failed requests' : ['rate<0.1'],
      
    }
}

export default function () {
    let res = http.get('https://api.demoblaze.com/entries')
    console.log('response: ', res)

    failureRate.add(res.status !== 200)
}
