import { apod_url, eonet_url, exo_url, NASA_API_KEY } from "tokens.js"

const count = "1"
const date = new Date()
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
const today = `${year}-${month}-${day}`

/*
const eonet_request = new Request(
  fetch(`${eonet_url}`).then(response => {
    console.log(response)
    return response.json()
  })
  .then(users => {
    return users
  })
  .catch(error => console.log(error))
)
*/
const apod_request = new Request(
  fetch(`${apod_url}api_key=${NASA_API_KEY}%date=${today}`).then(response => {
    console.log(response)
    return response.json()
  })
  .then(json_file => {
    return json_file  })
  .catch(error => console.log(error))
)

/*const exo_request = new Request(
  fetch(exo_url).then(response => {
    console.log(response)
    return response.json()
  })
  .then(users => {
    return users
  })
  .catch(error => console.log(error))
)*/

export { eonet_request, apod_request, exo_request }