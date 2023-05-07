import http from 'k6/http';

/*
export let options = {
  //delarar opciones de rampa
   vus:10,
   duration:'10s',
}; 
*/


export const options = {
  stages: [
    { duration: '1m', target: 10 },// un minuto y subo hasta 10 usuarios
    { duration: '1m', target: 10 },// un minuto y me mantengo en 10 usuarios
    { duration: '1m', target: 0 },// un minuto y bajo a 0
  ],
  thresholds: { http_req_duration: ['avg<100', 'p(95)<200'] }, //condiciones umbrales; media menor de 100 y percentil95 menor de 200
 //rps: 10,// para limitar las limitaciones por segundo
};


export default function () {
  http.get('http://test.k6.io/');
}