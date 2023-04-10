//import { apod_url, eonet_url, exo_url, NASA_API_KEY } from "./tokens.js"

const date = new Date()
let day = date.getDate()// < 10? "0" + date.getDate() : date.getDate();
let month = date.getMonth() //+ 1 < 10? "0" + date.getDate() : date.getDate();
let year = date.getFullYear();
const today = `${year}-${month}-${day}`


export { today }