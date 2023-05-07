import http from 'k6/http'

export default async function(){

    /* Respuesta de esta peticion
    [
    {
        "name": "leanne graham",
        "email": "leanne@gmail.com",
        "job": "web developer",
        "location": "london"
    },
    {
        "name": "ervin howell",
        "email": "ervin@gmail.com",..................
    
    */

    let response = await http.get('https://run.mocky.io/v3/b2ef378b-5f93-421e-8406-aba4f319578f')

    //me saca todos los datos del tipo de elemento que le indico del array

    let body = JSON.parse(response.body)
    body.forEach(element => {
        console.log(`name is ${element.name}`)
    });

       /* Respuesta de esta peticion (diferencia un campo por encima denominado data)
    {
  "data": [
    {
      "name": "leanne graham",
      "email": "leanne@gmail.com",
      "job": "web developer",
      "location": "london",
      "array": [
        1,
        2,
        3
      ]
    },
    {
      "name": "ervin howell",
      "email": "ervin@gmail.com",
      "job": "tech le.......................
    
    */


    let response1 = await http.get('https://run.mocky.io/v3/a19b0ec9-5985-4064-bce0-11647d98132e')
    let body1 = JSON.parse(response1.body)
    
    body1.data.forEach(element => {
        console.log(`name from data is ${element.name}`)
 
        element.array.forEach(elementArr => {
            console.log(`name from data is ${elementArr}`)

        })
       
    });

}