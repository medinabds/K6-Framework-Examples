import http from 'k6/http'
import { check, group} from 'k6'
import { Rate, Trend } from 'k6/metrics'
export let errorRate = new Rate('errors')
let myTrend = new Trend('my_trend');

export let options = {
    vus: 30,
    duration: '50s',
    thresholds: {
        errors: ['rate<0.1'] , // i.e. 10% error,
        "http_req_duration{type:API}": ["p(95)<500"],  
        'groupDuration{groupName:Login}': ['avg < 200'],
        'groupDuration{groupName:GetUsers}': ['avg < 200'],
        "http_req_duration{type:GETAPI}": ["p(95)<500"],  

        // lets add threasholds for regions
        "http_req_duration{load_zone:amazon:us:ashburn}": ["p(95)<500"], // 95% of time/ 95% of requets from region ashburn must have http req duration within 500 milisecodns
        "http_req_duration{load_zone:amazon:us:dublin}": ["p(95)<200"],
        "http_req_duration{load_zone:amazon:us:mumbai}": ["p(95)<100"],
        "http_req_duration{load_zone:amazon:us:tokyo}": ["p(95)<300"],
        "http_req_duration{load_zone:amazon:us:singapore}": ["p(95)<400"]
    },
    ext: {
        loadimpact: {
            projectID: 3498636,
            // Test runs with the same name groups test runs together
            name: "LOADIMPACT BASICS",
             // optional

             // add distributon
             distribution:{
                 ashburnDistribution :{loadZone: 'amazon:us:ashburn', percent:10}, // distributionLabel is optional, you cna provide any user friendly label - 10%
                 dublinDistribution : {loadZone: 'amazon:ie:dublin', percent: 10}, // 50% users will be from Dublin, 50% from ashburn, lets add more regions - 10%
                 mumbaiDistribution : {loadZone: 'amazon:in:mumbai', percent: 10}, // - 10%
                 tokyoDistribution : {loadZone: 'amazon:jp:tokyo', percent: 20},  //20%
                 singaporeDistribution : {loadZone: 'amazon:sg:singapore', percent: 50} // amazon:sg:singapore its syntax specified by loadimpact // load of 50% of users
             }
        }
    }
}
