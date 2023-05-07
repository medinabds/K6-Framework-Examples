//import { Trend } from 'k6/metrics'
import k6 from 'k6/metrics'
import http from 'k6/http'
import { sleep } from 'k6'
import { check } from 'k6'
import {Rate} from 'k6/metrics'



export let errorRate= new Rate ('errors')

var getApiTrend =new k6.Trend ("TREND_Get_api_Duration")
var getApiTrend1 =new k6.Trend ("TREND_Get_api_Waiting")
var getApi2Trend =new k6.Trend ("TREND_Get_api2_Duration")
var getApi2Trend1 =new k6.Trend ("TREND_Get_api2_Waiting")

export let options =  {
    thresholds:{
     errors: ['rate<0.1']// porcentage de error menor al 10%
    }
    
    }
    
    export default function() {
    let res = http.get('https://run.mocky.io/v3/5e428f08-25a2-45a7-9b56-cdbabd6c0b9c');
    
    console.log(`response body lenght ${res.body.length} for VU=${__VU} ITERA0 ${__ITER}`) //Virtual use nunber y clacular que usuario 
                                                                                           //hace cada iteracion y tamaño de la respuesta
    
        const check1= check(res, {
            'is status code 200': (res) => res.status === 200,
        })
    
    errorRate.add (!check1);// no 200 o no tamaño de la respuesta

    const check2= check(res, {
        'body size is 32 bytes ' : (res) => res.body.length === 32, // comparar tamaño de la respuesta
    })

    errorRate.add (!check2);// no 200 o no tamaño de la respuesta

    getApiTrend.add(res.timings.duration)
    getApiTrend1.add(res.timings.waiting)

  
    const res2 = http.get('https://test.k6.io/');

    getApi2Trend.add(res2.timings.duration)
    getApi2Trend1.add(res2.timings.waiting)

   
    };
