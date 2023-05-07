import http from 'k6/http';
import { check, group, sleep } from 'k6';

export default function() {

let res = http.get('https://run.mocky.io/v3/d92c2cf6-d2e8-439f-bf21-e521d39a4ef5')
         console.log('response: ', res)
        
         check(res, {
            'Assertion1': (r) =>
              r.body.includes('cat'),

    });
}