import http from 'k6/http';
import { check, group, sleep } from 'k6';

/*
export let options = {
  //declaración de rampa con 10 usuarios durante 10 segundos
   vus:10,
   duration:'10s',
}; 
*/


export const options = {
  stages: [
    { duration: '5s', target: 10 },// un minuto y subo hasta 10 usuarios  (1m/1s/1h)
    { duration: '5s', target: 10 },// un minuto y me mantengo en 10 usuarios
    { duration: '5s', target: 0 },// un minuto y bajo a 0  (hay que tener en cuenta que lo comandos prevalecen al código)
  ],
};

export default function() {
    //let res = http.get('https://api.demoblaze.com/entries');
    
    
    let res = http.get('https://api.demoblaze.com/entries')
             console.log('response: ', res)
            
             check(res, {
                'Assertion1': (r) =>
                  r.body.includes('cat'),
    
        });
    }

