import http, { post } from 'k6/http';
import { check, group, sleep } from 'k6';

export default function() {

var url = "https://api.demoblaze.com/bycat"
var header = {
    headers:{
        'Content-Type': 'application/json',
    }
}

var body = JSON.stringify ({

    cat:"monitor"
})

let res = http.post(url, body, header);

};