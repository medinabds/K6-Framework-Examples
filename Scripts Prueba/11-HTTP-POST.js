import http from 'k6/http';
import { check, group, sleep } from 'k6';
import {Rate} from 'k6/metrics';


export default function() {

    var url = 'https://run.mocky.io/v3/2b780dce-9086-4080-ba24-85160415fddc'
    var header = {
            headers:{
                'Content-Type': 'application/json',
            }
        }
    var body = JSON.stringify ({
    
        email :"abcde@test.test",
        password: "12345"

    })

let res = http.post(url, body,header);

    check(res, {
        'is status code 200': (res) => res.status === 200
    });

};