import http from 'k6/http';
import { check, group, sleep } from 'k6';

export default function() {
let res = http.get('https://run.mocky.io/v3/5e428f08-25a2-45a7-9b56-cdbabd6c0b9c');


};