import http, { post } from 'k6/http';
import { check, group, sleep } from 'k6';
import { Rate } from 'k6/metrics';
import { findBetween } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';

export default async function () {
    const url = 'http://localhost:3000/todo';
    const headerParam = {
        headers: {
            'Content-Type': 'application/json',
        }
    }

    const res = await http.get(url, headerParam);

    console.log(res.body);

    const resultado = JSON.parse(res.body);
    let encontrado = resultado[0].nombre;

    const res2 = await http.get(`${url}/${encontrado}`);
    console.log(resultado[2]);
    console.log('Petición correlada', res2.body);
    console.log(encontrado);


    var url2 = "http://localhost:3000/todo"
    var header = {
        headers: {
            'Content-Type': 'application/json',
        }
    }

    const fechaCor = '01/05/2023';

    var body = JSON.stringify({

            nombre :`${encontrado}`,
            //fecha : "01/05/2023"
            fecha : `${fechaCor}`
    })

    let res3 = await http.post(url, body, header);

    console.log('response del POST', res3.body)

    //hay alguna manera de ver la petición que yo realizo

}