import http from 'k6/http';
import { check, group, sleep } from 'k6';
import { Rate, Trend } from 'k6/metrics';

/*
export let options = {
  //declaración de rampa con 10 usuarios durante 10 segundos
   vus:10,
   duration:'10s',
}; 
*/
let groupDuration = Trend ('groupDuration');

let TrendPeticion1 = Trend("TrendPeticion1");
let TrendPeticion2 = Trend("TrendPeticion2");


export const options = {
  stages: [
    { duration: '5s', target: 10 },// un minuto y subo hasta 10 usuarios  (1m/1s/1h)
    { duration: '15s', target: 10 },// un minuto y me mantengo en 10 usuarios
    { duration: '5s', target: 0 },// un minuto y bajo a 0  (hay que tener en cuenta que lo comandos prevalecen al código)
  ],
  ext: {
    loadimpact: {
      projectID: 3637355,
    },
  },
  thresholds: {
    'groupDuration{groupName:Peticion1}': ['avg < 900' , 'p(90) < 1500'],
    'groupDuration{groupName:Peticion2}': ['avg< 900'],
    'http_req_duration{type:GETpeticion1}': ['p(95)<100'],// duration must be less than 100 miliseocnds 95% of time
    "http_req_duration{type:GETpeticion2}": ["p(95)<100"],
  
}
};


// define function to measure time
function groupConMetrics(nameOfGroup, groupFunction) {
  // start time
  let start = new Date(); // noe 11.01
  // call group
  group(nameOfGroup, groupFunction); // call get APIs
  let end = new Date();// Stop date // 11.:10

  // Add Trend timing
  groupDuration.add(end - start, { groupName: nameOfGroup }) // end -start = 9 second
}

export default function() {
    //let res = http.get('https://api.demoblaze.com/entries');
    
    groupConMetrics("Peticion1", function () {
   // group("Peticion1", function(){
    const res = http.get('https://api.demoblaze.com/entries');
             console.log('response: ', res)
          
             check(res, {
                'Assertion1': (r) =>
                  r.body.includes('cat'),
    
        });

      });

      TrendPeticion1.add(res.duration); // you c

      groupConMetrics("Peticion2", function () {
      //group("Peticion2", function(){
        let res2 = http.get('https://run.mocky.io/v3/d92c2cf6-d2e8-439f-bf21-e521d39a4ef5')
             console.log('response: ', res2)
            
             check(res2, {
                'Assertion2': (r) =>
                  r.body.includes('Nombre'),
                });
        });    


    }

