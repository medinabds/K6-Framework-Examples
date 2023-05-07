
export default function setOptions  (stageCount,times,target){
    const arrayStages = [];
    for (let i =0; i < stageCount; i++){
        const stageObject = {
            duration: times[i],
            target : target[i],
        }
        arrayStages.push(stageObject)
    }
    const options = {
        stages :[...arrayStages],
        thresholds: {
            'http_req_duration' : ['avg<300', 'p(99)<900'],
            'http_req_waiting': ['avg<300'],
            }
    }
    return options;
 } 