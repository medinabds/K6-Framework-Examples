import http from 'k6/http';
//import * as setOptions  from './options';

export const options = {
  stages: [
    { duration: '10s', target: 10 },// un minuto y subo hasta 10 usuarios
    { duration: '5s', target: 10 },// un minuto y me mantengo en 10 usuarios
    { duration: '5s', target: 0 },// un minuto y bajo a 0
  ],

  thresholds: {
    'http_req_duration' : ['avg<300', 'p(99)<900'],
    'http_req_waiting': ['avg<300'],
    }
};

// const stageCount = 3;
// const times = ["10s", "5s", "5s"];
// const target= [10,10, 0];
// const options = require('./options')


//export const options= configuration;

export default function () {
  // try{
  // const configuration = options.setOptions(stageCount, times, target);
  // console.log(configuration);
  // }catch(error){
  //   console.log(error);
  // }
   let res = http.get('https://api.demoblaze.com/entries')
    console.log('response: ', res)
};