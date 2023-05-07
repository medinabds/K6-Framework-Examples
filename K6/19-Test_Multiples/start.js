import http from 'k6/http';
import { check, group, sleep } from 'k6';
import test1 from './test1.js';
import test2 from './test2.js';

export let options = {
  //declaración de rampa con 10 usuarios durante 10 segundos
   vus:10,
   duration:'10s',
}; 

export default function() {


test1();
test2();

};