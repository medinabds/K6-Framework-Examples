import http from 'k6/http';
import { check, group, sleep } from 'k6';

export default function() {

let res = http.get('https://api.demoblaze.com/entries')
         console.log('response: ', res)
        
         check(res, {
            'Assertion1': (r) =>
              r.body.includes('cat'),

    });
}