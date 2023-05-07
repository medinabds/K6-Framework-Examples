import http from 'k6/http'; // Importamos librerias
import { check } from 'k6'; // Importamos librería de check

export const options = {
  vus: 10,
  duration:'10s',
  thresholds: { 
    'http_reqs{expected_response:true}': ['rate>200'], //condiciones umbrales; media menor de 100ms y percentil95 menor de 200 ms.
  },
};

export default function () {// assertion de que estamos recibiendo un 200
   check(http.get("https://test-api.k6.io"),{
   "status is 200": (r) => r.status == 200,
   "protocol is HTTP/2" : (r) => r.protocol == "HTTP/2.0",
   });
}


