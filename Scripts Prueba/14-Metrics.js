import http from 'k6/http';



export let options = {

vus: 10,
duration : '10s'

}


export default function() {
    let url = 'https://httpbin.test.k6.io/post';
    let response = http.post(url, 'Hello world!');
    console.log(response.json().data);


};