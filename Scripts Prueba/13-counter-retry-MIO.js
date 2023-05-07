import { Counter, Trend } from 'k6/metrics'
var retryCounter = new Counter("GetAPI_MAX_RETRY")
import http from 'k6/http'
import { sleep } from 'k6'

export default function(){

    retryCounter.add(1)
    for (var retries = 5; retries=0; retries--) {
    const response = http.get('https://run.mocky.io/v3/4ef744be-eb28-4a71-97aa-ea52dc3c6836')
    if (response.status !== 404){

        console.log('Respuesta no es correcta')
        sleep(1)
    }
    else{
        retries == 0
    }
    }
}