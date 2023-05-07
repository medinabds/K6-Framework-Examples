import http from 'k6/http';
import { check, group, sleep } from 'k6';
import {Rate} from 'k6/metrics';


export default function() {
  
  /*  var url = 'https://run.mocky.io/v3/6e806828-0d68-48e7-b9e1-85cd9a11052a'
    var headerParam = {
            headers:{
                'Content-Type': 'application/json',
            }
        }

        const response = http.get(url,headerParam)

        let body = JSON.parse(response)  // guardarmos la respuesta en la variable body
       
        body.forEach(element => {
            console.log(`name is ${element.nombreColor}`)
        });
*/

        let response = http.get('https://run.mocky.io/v3/6e806828-0d68-48e7-b9e1-85cd9a11052a')
        console.log('response: ', response)
        
        let body = JSON.parse(response)
        body.forEach(element => {
            console.log(`name is ${element.matricula}`)
        });

    }