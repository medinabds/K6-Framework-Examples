import http from 'k6/http';
import { check, group, sleep } from 'k6';
import {Rate} from 'k6/metrics'


export let errorRate = new Rate('errors')

export let options = {
    thresholds :{
        errors: ['rate<0.1'],  // i.e. 10% error
        'http_req_waiting': ['avg<900'],
    }
}

export default function() {

    let res = http.get('https://api.demoblaze.com/entries')
    console.log('response: ', res)
    console.log(`response body length ${res.body.length} for VU= ${__VU} ITERA = ${__ITER}`) 
   
   const checkBody = check(res, {
       'Assertion1': (r) =>
         r.body.includes('cat'),

    });

    errorRate.add(!checkBody);
   
   const checkStatus = check(res,{
        "status is 200": (r) => r.status == 200, 
        'body size is 12 bytes :' : (r) => r.body.length == 2716,
    });

    errorRate.add(!checkStatus);

};