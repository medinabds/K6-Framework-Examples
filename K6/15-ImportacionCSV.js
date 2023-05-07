/*  Where contents of data.csv is:
username,password
admin,123
test_user,1234
*/
import http from 'k6/http';
import { check, sleep } from 'k6';
import { SharedArray } from 'k6/data';
import papaparse from 'https://jslib.k6.io/papaparse/5.1.1/index.js';
// const fs = require('fs');

// not using SharedArray here will mean that the code in the function call (that is what loads and
// parses the csv) will be executed per each VU which also means that there will be a complete copy
// per each VU
const csvData = new SharedArray('another data name', function () {
  // Load CSV file and parse it using Papa Parse
  return papaparse.parse(open('./15-Usuarios.csv'), { header: true }).data;
});

export default function () {
    
 
    // fs.readFile('./15-Usuarios.csv', 'utf8', function (err, data) {
    //     /* parse data */console .log(data);
    // })
    // Now you can use the CSV data in your test logic below.
  // Below are some examples of how you can access the CSV data.
 console.log(csvData);
  // Recorre todos los pares de nombre de usuario/contraseña
  for (const userPwdPair of csvData) {
    console.log(JSON.stringify(userPwdPair));
  }

  // Elige uno del csv aleatoriamente
  const randomUser = csvData[Math.floor(Math.random() * csvData.length)];
  console.log('Random user: ', JSON.stringify(randomUser));

  const params = {
    login: randomUser.username,
    password: randomUser.password,
  };
  console.log('Random user2: ', JSON.stringify(params));

  /*
  const res = http.post('https://test.k6.io/login.php', params);
  check(res, {
    'login succeeded': (r) => r.status === 200 && r.body.indexOf('successfully authorized') !== -1,
  });
*/
  sleep(1);

}